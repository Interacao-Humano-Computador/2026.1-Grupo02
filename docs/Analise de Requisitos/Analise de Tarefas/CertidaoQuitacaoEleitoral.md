# Análise de tarefas para o agendamento presencial

---

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Samuel Felipe | Criação do arquivo de analise de tarefas |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: FELIPE, Samuel, 2026).</p>
</div>

---

## Bibliografia

> Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021)Interação Humano-Computador e Experiência do usuário.

> TRIBUNAL SUPERIOR ELEITORAL. **Certidão de quitação eleitoral**. Disponível em: [https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/](https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/). Acesso em: 03 maio 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 02/05/2026 | 1.0 | Criação da análise de tarefas para Certidão de Quitação Eleitoral do TSE | Samuel Felipe | |
| 23/05/2026 | 1.1 | Padronização do artefato | Tiago | - |

---

# Análise Hierárquica de Tarefas

| Objetivos / Operações | Problemas e Recomendações | 
|---|---|
| 0.Gera certidão de quitação eleitoral | **Input:** Necessidade de criar uma nova certidão de quitação . <br> **Feedback:** A certidão foi criada ou consultada com sucesso. |
| 1. Examinar certidão de quitação eleitoral  | **Input:** Necessidade de consultar sua quitação. <br> **Feedback:** Certidão de quitação pode ser vizualizada na tela. |
| 1.1 Informar dados pessoais | **Input:** Formulário de identificação do eleitor. <br> **Plano:** Preencher os dados e completar a verificação de humanidade. <br> **Feedback:** O sistema valida os dados e avança para a próxima etapa. |
| 1.1.1 Informar nome | **Input:** Preencher o nome completa no local recomendado. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 1.1.2 Informar cpf ou numero eleitoral | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 1.1.3 Informar data de nascimento | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 1.1.4 Selecionar opção de filiação | **Input:** Calendário com datas e horários disponíveis. <br> **Plano:** Escolher uma data e um horário vagos. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 1.1.4.1 Informar nome da(s) mãe(s) | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 1.1.4.2 Informar nome do(s) pai(s) | **Input:** Lista ou mapa com os postos de atendimento. <br> **Plano:** Escolher o local mais conveniente na lista. <br> **Feedback:** Aparece um indicador visual confirmando o dado. |
| 2.Gerar certidão de quitação eleitoral | **Input:** Tela de revisão com todos os dados do agendamento. <br> **Plano:** Revisar as informações e clicar no botão de confirmação. <br> **Feedback:** Mensagem de sucesso e exibição da certidão. |

<div style="text-align: left">
<p>Tabela 1: Representação da HTA em tabela (Fonte: FELIPE, Samuel, 2026).</p>
</div>

# Análise Hierárquica de Tarefas (HTA)

A seguir na imagem 1, apresentamos o diagrama de análise hierárquica de tarefas da funcionalidade da Certidão de quitação eleitoral.

![HTA Quitacao](../../img/DiagramaHTAQuitacao.jpg#center)
<div style="text-align: center">
<p>Imagem 1: Imagem do diagrama HTA da Certidão de quitação eleitoral (Fonte: FELIPE, Samuel, 2026).</p>
</div>

# ConcurTaskTrees (CTT)

Nessa parte, apresentamos o diagrama de árvore de tarefas concorrentes, a partir da imagem 2.

![CTT Agendamento](../../img/DiagramaCTTCertidao.jpg#center)
<div style="text-align: left">
<p>Imagem 2: Imagem do diagrama CTT da Certidão de quitação eleitoral (Fonte: FELIPE, Samuel, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na estruturação e padronização do artefato. Todo o conteúdo técnico e as decisões de projeto foram definidos pelos integrantes da equipe; a IA atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.
