# Integração com o FastAPI (main.py)

Este protótipo segue a mesma infraestrutura compartilhada pelo grupo (FastAPI + telemetry.js),
descrita em `docs/DesignAvaliaçãoDesenvolvimento/ProtótipoAltaFidelidade/FastAPI/README.md`.

## 1. Onde colocar os arquivos

Copie a pasta `AlterarLocalVotacao/` (gerada por este artefato) para dentro de:

```
docs/DesignAvaliaçãoDesenvolvimento/ProtótipoAltaFidelidade/AlterarLocalVotacao/
├── static/
│   ├── alterarlocal.css
│   └── alterarlocal.js
└── templates/
    ├── alterarlocal.html
    └── tcle_alterarlocal.html
```

(ou seja, ao lado das pastas `CandContas/` e `JustificativaEleitoral/` já existentes).

## 2. Alterações em `FastAPI/main.py`

Adicione um novo mount de estáticos, um novo `Jinja2Templates` e duas novas rotas, seguindo o
mesmo padrão usado para `JustificativaEleitoral`:

```python
# --- novos imports/objetos (junto aos já existentes) ---
app.mount("/static-alv", StaticFiles(directory="../AlterarLocalVotacao/static"), name="static-alv")
templates_alv = Jinja2Templates(directory="../AlterarLocalVotacao/templates")

# --- novas rotas (junto às demais rotas) ---
@app.get("/alterar-local-tcle", response_class=HTMLResponse)
async def read_tcle_alterar_local(request: Request):
    return templates_alv.TemplateResponse(request=request, name="tcle_alterarlocal.html")

@app.get("/alterar-local", response_class=HTMLResponse)
async def read_alterar_local(request: Request):
    return templates_alv.TemplateResponse(request=request, name="alterarlocal.html")
```

## 3. Telemetria

O arquivo `alterarlocal.html` já inclui:

```html
<script src="/static-alv/alterarlocal.js"></script>
<script src="/static/telemetry.js"></script>
```

O `telemetry.js` é o mesmo script compartilhado (`CandContas/static/telemetry.js`), já mapeado
em `/static` pelo `main.py` — nenhuma alteração adicional é necessária para a captura de cliques
e teclas digitadas durante o teste de usabilidade.

## 4. Como acessar

Após iniciar o servidor (`uvicorn main:app --reload`):

- **Termo de Consentimento (TCLE):** http://127.0.0.1:8000/alterar-local-tcle
- **Protótipo (início direto):** http://127.0.0.1:8000/alterar-local

## 5. Permissão de câmera

A funcionalidade de "Tirar foto agora" usa `navigator.mediaDevices.getUserMedia`, que exige
contexto seguro (HTTPS) ou `localhost`. Ao rodar via `127.0.0.1`/`localhost` no Chrome/Edge/Firefox,
o navegador solicitará a permissão de câmera normalmente. Nenhuma imagem é enviada a um servidor —
a captura é local, apenas para simular o anexo do documento.
