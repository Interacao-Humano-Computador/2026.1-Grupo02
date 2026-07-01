# Análise de tarefas para o agendamento presencial

---

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Samuel Felipe | Criação do arquivo de analise de tarefas |
| Tiago | Padronização do documento |
| Guilherme | Revisor do documento |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: FELIPE, Samuel, 2026).</p>
</div>

---

## Introdução

Este documento apresenta a **Análise de Tarefas** referente ao objetivo de usuário de **gerar a certidão de quitação eleitoral** utilizando o sistema do **Tribunal Superior Eleitoral (TSE)**, disponível no portal [www.tse.jus.br](https://www.tse.jus.br).

A análise de tarefas é um instrumento fundamental em IHC para compreender **o que os usuários fazem, como fazem e por que fazem**, antes de qualquer intervenção de design ou avaliação de sistema (Barbosa et al., 2021). Ela permite mapear o trabalho real do usuário em termos de objetivos, ações e relações entre tarefas, revelando problemas de usabilidade e oportunidades de melhoria na interface.

A funcionalidade "Certidão de Quitação Eleitoral" foi selecionada por apresentar **problemas de visibilidade e finalização de objetivo** — a opção não apresenta visualização de que a certidão disponibilizada é a de quitação eleitoral e a página de autenticação de dados não aproveita da disposição de tela, sendo necessário ao usuário conhecimento prévio da existência do serviço ou navegação extensa por menus e submenus até encontrá-la.

O fluxo analisado compreende as seguintes etapas macro:

1. O usuário acessa o portal do TSE.
2. **Localiza** a opção "Ceritdão de Quitação Eleitoral".
3. **Lê as instruções** e requisitos para gerar a certidão requisitada.
4. **Preenche a autenticação** com os dados pessoais que condizem com o sistema da Justiça eleitoral.
5. **Envia a solicitação** e recebe a confirmação e disponibilidade de visualizar a certidão.

Foram aplicadas duas técnicas complementares, conforme descritas em Barbosa et al. (2021): a **Análise Hierárquica de Tarefas (HTA)** e o modelo **ConcurTaskTrees (CTT)**.

---

## Análise Hierárquica de Tarefas (HTA)

A seguir na imagem 1, apresentamos o diagrama de análise hierárquica de tarefas da funcionalidade da Certidão de quitação eleitoral.

![HTA Quitacao](../../img/DiagramaHTAQuitacao.jpg#center)
<div style="text-align: center">
<p>Imagem 1: Imagem do diagrama HTA da Certidão de quitação eleitoral (Fonte: FELIPE, Samuel, 2026).</p>
</div>

### Representação em tabela da tarefa HTA

| Objetivos / Operações | Problemas e Recomendações | 
|---|---|
| **0.Gera certidão de quitação eleitoral** - Plano 1>2 | **Input:** Necessidade de criar uma nova certidão de quitação . <br> **Feedback:** A certidão foi criada ou consultada com sucesso. |
| **1. Examinar certidão de quitação eleitoral** - Plano 1>1.1 | **Input:** Necessidade de consultar sua quitação. <br> **Feedback:** Certidão de quitação pode ser vizualizada na tela. |
| **1.1 Informar dados pessoais** - Plano: 1.1.1>1.1.2>1.1.3>1.1.4 | **Input:** Formulário de identificação do eleitor. <br> **Plano:** Preencher os dados e completar a verificação de humanidade. <br> **Feedback:** O sistema valida os dados e avança para a próxima etapa. |
| **1.1.1 Informar nome** | **Input:** Preencher o nome completa no local recomendado. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **1.1.2 Informar cpf ou numero eleitoral** | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **1.1.3 Informar data de nascimento** | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **1.1.4 Selecionar opção de filiação** - Plano 1.1.4.1>1.1.4.2 | **Input:** Calendário com datas e horários disponíveis. <br> **Plano:** Escolher uma data e um horário vagos. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **1.1.4.1 Informar nome da(s) mãe(s)** | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **1.1.4.2 Informar nome do(s) pai(s)** | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| **2.Gerar certidão de quitação eleitoral** | **Input:** Tela de revisão com todos os dados do agendamento. <br> **Plano:** Revisar as informações e clicar no botão de confirmação. <br> **Feedback:** Mensagem de sucesso e exibição da certidão. |

<div style="text-align: left">
<p>Tabela 1: Representação da HTA em tabela (Fonte: FELIPE, Samuel, 2026).</p>
</div>

## ConcurTaskTrees (CTT)

Nessa parte, apresentamos o diagrama de árvore de tarefas concorrentes, a partir da imagem 2.

![CTT Agendamento](../../img/DiagramaCTTCertidao.jpg#center)
<div style="text-align: left">
<p>Imagem 2: Imagem do diagrama CTT da Certidão de quitação eleitoral (Fonte: FELIPE, Samuel, 2026).</p>
</div>

### Tipos de tarefa

| Tipo | Significado |
|:-----|:------------|
| Usuário | Realizada pelo usuário fora do sistema (ex: decisão, leitura) |
| Sistema | Realizada pelo sistema sem interação direta com o usuário |
| Interativa | Envolve diálogo direto entre usuário e sistema |
| Abstrata | Agrupamento de subtarefas; não é uma tarefa em si |

<div style="text-align: left">
<p>Tabela 2: Tipos de tarefa no modelo CTT (Fonte: Barbosa et al., 2021, adaptado).</p>
</div>

### Operadores CTT utilizados

| Operador | Notação | Significado |
|:---------|:--------|:------------|
| Ativação | T1 >> T2 | T2 só inicia após T1 terminar |
| Escolha | T1 [] T2 | Uma das duas; ao iniciar uma, a outra é desabilitada |
| Concorrência | T1 \|\|\| T2 | Tarefas realizáveis em qualquer ordem ou simultaneamente |
| Independência | T1 \|=\| T2 | Qualquer ordem, mas uma deve terminar antes da outra iniciar |

<div style="text-align: left">
<p>Tabela 3: Operadores de relação temporal no CTT (Fonte: Barbosa et al., 2021, adaptado).</p>
</div>

---

## Bibliografia

> Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021)Interação Humano-Computador e Experiência do usuário.
> TRIBUNAL SUPERIOR ELEITORAL. **Certidão de quitação eleitoral**. Disponível em: [https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/](https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/). Acesso em: 03 maio 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 02/05/2026 | 1.0 | Criação da análise de tarefas para Certidão de Quitação Eleitoral do TSE | Samuel Felipe | Tiago |
| 23/05/2026 | 1.1 | Padronização do artefato | Tiago | Samuel Felipe |
| 01/07/2026 | 2.0 | Adição das legendas nas Análises de Tarefas | Samuel Felipe | Guilherme |

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na estruturação e padronização do artefato. Todo o conteúdo técnico e as decisões de projeto foram definidos pelos integrantes da equipe; a IA atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.
