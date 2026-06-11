# Sistema Base para Testes de Usabilidade e Telemetria

Este sistema, construído com **FastAPI**, tem como objetivo hospedar os protótipos de alta fidelidade e fornecer uma infraestrutura de telemetria que coleta interações do usuário (como cliques, teclas pressionadas e tempo de navegação). Os dados coletados são salvos localmente em arquivos `.csv` organizados por participante.

## 🚀 Como Rodar o Código Localmente

1. **Abra o terminal** na pasta onde este arquivo `README.md` está localizado (`FastAPI/`).
2. **Crie e ative um ambiente virtual (recomendado):**
   - Para **criar** o ambiente virtual (execute apenas uma vez):
     ```bash
     python3 -m venv venv
     ```
   - Para **ativar** o ambiente virtual criado:
     - No **Linux/macOS**:
       ```bash
       source venv/bin/activate
       ```
     - No **Windows**:
       ```bash
       venv\Scripts\activate
       ```
3. **Instale as dependências** listadas no arquivo `requirements.txt`:
   ```bash
   pip install -r requirements.txt
   ```
4. **Inicie o servidor local** utilizando o Uvicorn:
   ```bash
   uvicorn main:app --reload
   ```
   *A flag `--reload` permite que o servidor reinicie automaticamente sempre que você salvar alterações no código.*
4. **Acesse no navegador:**
   - Tela de Consentimento (TCLE): [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
   - O teste configurado para CandContas é executado logo após o aceite do TCLE.
5. **Verifique os Logs:** Após finalizar a interação no navegador, o sistema de telemetria registrará automaticamente os dados gerados (tempo, cliques, digitações) dentro da pasta `logs/`.

---

## 🛠️ Como Adicionar Endpoints para Outros Testes (Para Integrantes do Grupo)

Se o seu subgrupo possui outro protótipo (por exemplo, "Certidão de Quitação", "Consulta de Local de Votação", etc.), você pode usar este mesmo sistema base para hospedar seu protótipo e aproveitar toda a captura automática da telemetria.

### Passo 1: Onde colocar seus arquivos HTML, CSS e JS
Por padrão, este sistema de teste lê recursos estáticos da pasta vizinha `CandContas`.
* Coloque os seus arquivos `seu_prototipo.html` na pasta `../CandContas/templates/` (ou crie a sua estrutura dentro da raiz de protótipos alta fidelidade e adapte os caminhos no Jinja).
* Coloque seus estilos `seu_estilo.css` e lógicas `seu_js.js` na pasta `../CandContas/static/`.

### Passo 2: Importe o Script de Telemetria no seu HTML
Para que o sistema passe a rastrear o que os usuários estão fazendo na sua tela de teste, você precisa adicionar esta única linha ao final do seu HTML (`seu_prototipo.html`), logo antes de fechar a tag `</body>`:

```html
<script src="/static/telemetry.js"></script>
```
*Observação: Assegure-se também de que os caminhos para o seu CSS e JS estejam utilizando o caminho mapeado pelo servidor, ou seja: `/static/seu_estilo.css` e `/static/seu_js.js`.*

### Passo 3: Criar um Novo Endpoint no arquivo `main.py`
Abra o arquivo `main.py` (que está nesta mesma pasta) e crie uma nova função abaixo das rotas que já existem. Você criará um endereço novo, onde a pessoa poderá acessar o seu teste.

**Exemplo de código a ser adicionado:**

```python
@app.get("/meu-teste", response_class=HTMLResponse)
async def read_meu_teste(request: Request):
    # Retorna o arquivo HTML que você colocou na pasta templates/
    return templates.TemplateResponse("seu_prototipo.html", {"request": request})
```

Pronto! Agora o seu teste estará disponível no navegador acessando **http://127.0.0.1:8000/meu-teste**. Todos os cliques que o usuário der nessa tela serão interceptados pelo `telemetry.js` e salvos como logs no FastAPI!
