# Análise de Tarefas para a Alteração de Local de Votação

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Guilherme | Criação do artefato|

<div style="text-align: left">
<p>Tabela 6: Tabela de contribuição (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Bibliografia

> BARBOSA, Simone; SILVA, Bruno. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010. 

> TRIBUNAL SUPERIOR ELEITORAL. **Atualizar dados pessoais, endereço ou local de votação**. Disponível em: [https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral]. Acesso em: 03 maio 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 03/05/2026 | 1.0 | Criação da análise de tarefas para alteração de local de votação no portal TSE | Guilherme | Maria Luana |
| 03/05/2026 | 1.1 | Adiçaõ de agradecimentos | Guilherme | Maria Luana |
| 23/05/2026 | 1.2 | Padronização do artefato | Tiago | - |

---

# Análise Hierárquica de Tarefas

### Legenda de Planos

| Notação | Tipo | Descrição |
|:-------:|:----:|:----------|
| 1>2>3 | Sequencial | Subobjetivos executados em ordem fixa |
| 1/2 | Seleção | Apenas um dos subobjetivos é executado |
| 1+2 | Paralelo | Subobjetivos executados simultaneamente ou em qualquer ordem |

| Objetivos / Operações | Problemas e Recomendações |
|---|---|
| 0. Trocar local de votação `sequencial 1>2>3>4>5>6` | **Input:** Acesso ao portal TSE. **Feedback:** Confirmação da solicitação enviada. **Plano:** Executar cada etapa em sequência até o envio final. |
| 1. Acessar o serviço `sequencial 1.1>1.2>1.3` | **Input:** Página inicial do portal TSE. **Plano:** Navegar pelo menu até localizar o serviço de atualização de local de votação. |
| 1.1 Localizar opção no menu "Eleitor" | **Input:** Menu de navegação do portal. **Feedback:** Opção de atualização de dados destacada. |
| 1.2 Clicar em "Atualizar dados pessoais, endereço ou local de votação" | **Input:** Item de menu selecionado. **Feedback:** Usuário é redirecionado para a tela de seleção do tipo de atualização. |
| 1.3 Selecionar "Local de votação" no diálogo e clicar em Continuar | **Input:** Diálogo de seleção do tipo de atualização. **Feedback:** Sistema avança para a etapa de autenticação. |
| 2. Autenticar-se `seleção 2.A / 2.B` | **Regra de seleção:** 2.A se o usuário não possui o app e-Título; 2.B se possui. |
| 2.A Autenticação manual `sequencial` | **Input:** Formulário de identificação do eleitor. **Plano:** Preencher os dados de identificação e clicar em Entrar. |
| 2.A.1 Informar número do título eleitoral, CPF ou nome | **Input:** Campo de identificação. **Feedback:** Campo preenchido. |
| 2.A.2 Informar data de nascimento (dia/mês/ano) | **Input:** Campo de data de nascimento. **Feedback:** Data registrada. |
| 2.A.3 Selecionar opção de filiação no combo (padrão: mãe e pai) | **Input:** Combo de opção de filiação. **Feedback:** Opção selecionada. |
| 2.A.4 Informar nome da mãe e nome do pai nos campos | **Input:** Campos de filiação. **Feedback:** Dados preenchidos. |
| 2.A.5 Clicar em Entrar | **Input:** Botão de confirmação. **Feedback:** Sistema valida os dados e avança para a próxima etapa. |
| 2.B Autenticação via e-Título | **Input:** Opção de autenticação pelo aplicativo móvel. **Plano:** Utilizar o app e-Título para autorizar o acesso. |
| 2.B.1 Clicar em "Entrar com e-Título" | **Input:** Botão de autenticação alternativa. **Feedback:** Sistema muda as informções necessárias. |
| 2.B.2 Informar número do título eleitoral ou CPF  | **Input:** Campo de identificação. **Feedback:** Campo preenchido. |
| 2.B.3 Informar código de autenticação de e-Título  | **Input:** Campo de identificação. **Feedback:** Campo preenchido. |
| 2.B.4 Clicar em Entrar | **Input:** Botão de confirmação. **Feedback:** Sistema valida os dados e avança para a próxima etapa. |
| 3. Anexar documentos `paralelo 3.1+3.2` | **Input:** Área de upload de documentos. **Plano:** Preencher os obrigatórios antes dos opcionais; limite de 5 MB por arquivo (PNG, JPG, JPEG, PDF). |
| 3.1 Anexar foto segurando documento (selfie com doc. de identificação) | **Input:** Campo de upload da foto. **Obrigatoriedade:** Obrigatório. **Feedback:** Arquivo anexado ao formulário. |
| 3.2 Anexar documento de identificação (até 5 arquivos) | **Input:** Campo de upload do documento. **Obrigatoriedade:** Obrigatório. **Feedback:** Arquivo(s) anexado(s) ao formulário. |
| 3.3 Anexar comprovante de vínculo (residencial, afetivo ou profissional) | **Input:** Campo de upload do comprovante. **Obrigatoriedade:** Opcional. **Feedback:** Arquivo anexado ao formulário. |
| 3.4 Anexar certidão de nascimento ou casamento | **Input:** Campo de upload da certidão. **Obrigatoriedade:** Opcional. **Feedback:** Arquivo anexado ao formulário. |
| 3.5 Anexar outros documentos (até 5 arquivos) | **Input:** Campo de upload adicional. **Obrigatoriedade:** Opcional. **Feedback:** Arquivo(s) anexado(s) ao formulário. |
| 4. Selecionar novo local de votação `seleção 4.A / 4.B` | **Feedback:** Seção selecionada destacada; a efetivação depende de vaga disponível na Justiça Eleitoral. |
| 4.A Busca por nome | **Regra de seleção:** Usuário conhece o nome da escola ou seção. |
| 4.A.1 Digitar nome no campo "Pesquisar por" | **Input:** Campo de busca textual. **Feedback:** Lista filtrada exibida. |
| 4.A.2 Clicar no ícone de lupa | **Input:** Botão de busca. **Feedback:** Resultados correspondentes apresentados. |
| 4.A.3 Selecionar a seção na lista filtrada | **Input:** Lista de seções filtradas. **Feedback:** Seção selecionada e destacada. |
| 4.B Navegação pela lista paginada | **Regra de seleção:** Usuário não conhece o nome da seção. |
| 4.B.1 Percorrer a lista de seções disponíveis | **Input:** Lista paginada de seções. **Feedback:** Seções exibidas em páginas. |
| 4.B.2 Navegar entre páginas | **Input:** Controles de paginação. **Feedback:** Nova página de seções carregada. |
| 4.B.3 Selecionar a seção desejada (evitar bloqueadas) | **Input:** Lista de seções disponíveis e bloqueadas. **Feedback:** Seção selecionada destacada. |
| 5. Informar dados complementares e contatos `sequencial 5>6` | **Input:** Formulário de dados complementares e contato. **Plano:** Preencher todos os campos obrigatórios antes de prosseguir. |
| 5.1 Preencher campos de dados complementares | **Input:** Campos de dados adicionais. **Feedback:** Campos preenchidos e validados. |
| 5.2 Preencher campos de contato  | **Input:** Campos de contato. **Feedback:** Dados de contato registrados. |
| 6. Enviar solicitação | **Input:** Tela de revisão com todos os dados da solicitação. **Plano:** Revisar as informações e confirmar o envio. |
| 6.1 Revisar informações preenchidas | **Input:** Resumo da solicitação. **Feedback:** Dados conferidos pelo usuário. |
| 6.2 Clicar em Enviar | **Input:** Botão de envio. **Feedback:** Solicitação submetida ao sistema. |
| 6.3 Confirmar recebimento do feedback de sucesso | **Input:** Mensagem de confirmação do sistema. **Feedback:** Protocolo ou comprovante exibido ao usuário. |

<div style="text-align: left">
<p>Tabela 1: Representação da HTA em tabela.</p>
</div>

---

# Modelo CMN-GOMS

A seguir, apresentamos o modelo CMN-GOMS da funcionalidade de alteração de local de votação.

```
GOAL 0: Trocar local de votação

  GOAL 1: Acessar o serviço
    OP 1.1: Localizar e clicar na seção "Autoatendimento eleitoral" no menu
    OP 1.2: Selecionar "Atualizar dados pessoais, endereço ou local de votação"
    OP 1.3: Marcar opção "Local de votação" no diálogo
    OP 1.4: Clicar em "Continuar"

  GOAL 2: Autenticar-se

    METHOD 2.A: Autenticação manual
    (SEL. RULE: usuário não possui o aplicativo e-Título)
      OP 2.A.1: Digitar número do título, CPF ou nome
      OP 2.A.2: Digitar data de nascimento no formato dia/mês/ano
      OP 2.A.3: Selecionar opção de filiação no combo (padrão: mãe e pai)
      OP 2.A.4: Digitar nome da mãe e nome do pai nos campos
      OP 2.A.5: Clicar em "Entrar"

    METHOD 2.B: Autenticação via e-Título
    (SEL. RULE: usuário possui o app e-Título instalado)
      OP 2.B.1: Clicar em "Entrar com e-Título"
      OP 2.B.2: Autorizar usando o aplicativo móvel

  GOAL 3: Anexar documentos

    GOAL 3.1: Anexar foto segurando documento (obrigatório)
      OP 3.1.1: Clicar em "+ Selecionar arquivo" da linha "Foto..."
      OP 3.1.2: Localizar e selecionar o arquivo no sistema (PNG, JPG, PDF)
      OP 3.1.3: Verificar se o arquivo foi anexado corretamente

    GOAL 3.2: Anexar documento de identificação (obrigatório)
      OP 3.2.1: Clicar em "+ Selecionar arquivo" da linha "Documento..."
      OP 3.2.2: Selecionar até 5 arquivos do sistema

    GOAL 3.3: Anexar documentos opcionais (se aplicável)
    (SEL. RULE: usuário tem comprovante de vínculo ou certidão relevante)
      OP 3.3.1: Repetir operação de seleção para cada documento opcional

  GOAL 4: Selecionar novo local de votação

    METHOD 4.A: Busca por nome
    (SEL. RULE: usuário conhece o nome da escola ou seção)
      OP 4.A.1: Digitar nome no campo "Pesquisar por"
      OP 4.A.2: Clicar no ícone para buscar
      OP 4.A.3: Selecionar a seção desejada na lista filtrada

    METHOD 4.B: Navegação pela lista paginada
    (SEL. RULE: usuário não conhece o nome da seção)
      OP 4.B.1: Percorrer a lista de seções disponíveis
      OP 4.B.2: Navegar entre páginas
      OP 4.B.3: Selecionar a seção desejada
      OP 4.B.4: Verificar disponibilidade (evitar seções bloqueadas)

  GOAL 5: Informar dados complementares e contatos
    OP 5.1: Preencher campos de dados complementares
    OP 5.2: Preencher campos de contato 

  GOAL 6: Enviar solicitação
    OP 6.1: Revisar informações preenchidas
    OP 6.2: Clicar em "Enviar"
```

---

## Agradecimentos

Agradecemos à IA Generativa Claude (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na estruturação e redação das análises de tarefas.
