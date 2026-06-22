## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Guilherme | Criação do documento e realização da avaliação |
| IA - Claude | Formatação e correção de pequenos erros |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: CARVALHO, Guilherme).</p>
</div>

---

## Introdução

Este documento apresenta o relato dos resultados da avaliação do Protótipo de Papel referente à funcionalidade de **troca de local de votação** no sistema do TSE, desenvolvida no âmbito da disciplina de Interação Humano-Computador. Os resultados aqui registrados foram obtidos por meio de entrevista e observação com usuário, conforme planejamento previamente definido pela equipe.

---

## Objetivo e Escopo da Avaliação

A avaliação do Protótipo de Papel foi realizada com o objetivo de verificar se o modelo de tarefas elaborado representa adequadamente o comportamento real dos usuários ao executar a funcionalidade de troca de local de votação no portal do TSE. Buscou-se identificar possíveis lacunas entre o fluxo modelado e a experiência efetiva do usuário, bem como avaliar se as melhorias propostas no reprojeto da funcionalidade especialmente a integração da captura de documentos diretamente pelo sistema contribuem para uma experiência mais fluida e eficiente.

O escopo desta avaliação abrange a tarefa completa de troca de local de votação, desde o acesso ao serviço até o envio da solicitação, incluindo autenticação, anexo de documentos, seleção do novo local de votação e preenchimento de dados complementares.

---

## Método de Avaliação

O método adotado foi o de **observação e entrevista com usuário**, no qual o avaliador acompanhou o participante durante a execução das tarefas modeladas, registrando problemas, percepções e sugestões ao longo da sessão. A avaliação foi conduzida com base em um protótipo de papel da interface reprojetada.

A Tabela 2 apresenta o cronograma executado da entrevista realizada.

**Tabela 2** — Cronograma Executado da Entrevista.

| **Entrevistador(es)** | **Entrevistado(s)** | **Horário de Início** | **Horário de Fim** | **Data** | **Local** |
|:---------------------:|:-------------------:|:---------------------:|:------------------:|:--------:|:---------:|
| Guilherme e Maria Luana | Davi | 12:50 | 13: 10 | 03/06/2026 | FCTE - I8 |

<div style="text-align: left">
<p>Tabela 2: Cronograma executado da entrevista. (Fonte: CARVALHO, Guilherme).</p>
</div>

---

## Seleção dos Participantes

O participante selecionado foi **Davi**, jovem com idade entre 20 e 30 anos, com **alta familiaridade com tecnologia** e apto para exercer os direitos eleitoral. Esse perfil está diretamente alinhado ao perfil de usuário definido para o sistema do TSE, que contempla eleitores jovens e com experiência no uso de plataformas digitais. Davi também se aproxima das personas elaboradas pela equipe, que representam usuários que buscam autonomia e praticidade ao realizar serviços eleitorais de forma online, sem necessidade de deslocamento a cartórios ou postos de atendimento presencial.

O cenário definido para a avaliação foi o de um jovem que precisa **trocar seu local de votação para o mais próximo de sua residência atual**.

---

## Problemas e Dificuldades Encontradas

Durante a sessão de avaliação, foi identificado o seguinte problema:

**Problema 1 — Falta de fluidez na navegação pelo protótipo de papel**

- **Tarefa:** Fluxo geral da tarefa de troca de local de votação.
- **Ação realizada pelo usuário:** O participante realizou diversas perguntas ao avaliador ao longo da sessão, questionando o que deveria fazer em cada etapa e quais ações eram permitidas.
- **Comportamento esperado:** O usuário deveria conseguir avançar pelas etapas do fluxo de forma autônoma, sem necessidade de orientação do avaliador.
- **Comportamento observado:** O usuário demonstrou hesitação recorrente, indicando baixa clareza sobre os passos seguintes em diferentes momentos da tarefa.
- **Observação:** Parte dessa dificuldade pode ser atribuída à **baixa fidelidade do protótipo de papel**, que por natureza não reproduz com precisão os elementos visuais e interativos de uma interface digital, dificultando a compreensão espontânea do fluxo por parte do participante. Esse ponto deve ser considerado ao interpretar os resultados, uma vez que o problema pode não se manifestar com a mesma intensidade em um protótipo de maior fidelidade.

---

## Sugestões de Melhoria

Com base no problema identificado, propõe-se a seguinte melhoria:

**Melhoria 1 — Reforço de orientações contextuais na interface**

- **Problema identificado:** Falta de clareza sobre as ações disponíveis e os próximos passos em cada etapa da tarefa.
- **Contexto:** O usuário interrompia o fluxo para perguntar ao avaliador sobre o que deveria fazer, o que evidencia ausência de indicadores visuais suficientes na interface.
- **Resultado esperado:** O usuário avança pelas etapas de forma autônoma, sem necessidade de assistência externa.
- **Resultado observado:** O usuário precisou de orientação verbal do avaliador em múltiplos momentos.
- **Sugestão de correção:** Adicionar **textos de instrução contextual** e **mensagens de orientação** em cada tela do fluxo, deixando claro ao usuário o que é esperado dele em cada passo. Em protótipos de maior fidelidade, esses elementos devem ser testados para verificar se eliminam as dúvidas observadas.

---

## Feedback dos Usuários

O participante interagiu ativamente durante a sessão, fazendo perguntas que revelaram pontos de incerteza no fluxo. De forma geral, o feedback indicou que:

- A etapa de **seleção do novo local de votação** foi percebida como clara e simples, graças ao indicador de distância baseado no endereço registrado do usuário e à listagem dinâmica que prioriza locais próximos e disponíveis.
- A etapa de **anexo de documentos** foi considerada facilitada pela possibilidade de capturar fotos diretamente pelo sistema, sem necessidade de preparação prévia dos arquivos.
- As etapas de **confirmação de dados complementares** e **preenchimento de contato** foram realizadas sem dificuldades, com o pré-preenchimento contribuindo para agilizar o processo.
- A **baixa fidelidade do protótipo** foi percebida como um fator limitante para a fluência da navegação, gerando dúvidas que provavelmente não ocorreriam em uma interface digital completa.

---

## Análise e Interpretação dos Resultados

A avaliação revelou que o modelo de tarefas reprojetado apresenta avanços significativos em relação ao fluxo original, especialmente nas etapas de seleção do local de votação e anexo de documentos. A introdução de uma listagem dinâmica com indicador de distância e a integração da captura de documentos diretamente pelo sistema demonstraram aderência ao comportamento esperado do perfil de usuário definido.

O principal ponto de atenção identificado foi a hesitação recorrente do participante que pode ter duas origens distintas: (1) a limitação inerente ao protótipo de papel, que não reproduz fidedignamente os elementos visuais de orientação de uma interface digital; e (2) a possível necessidade de aprimorar os indicadores de contexto e orientação no próprio fluxo reprojetado. Recomenda-se que esse aspecto seja reavaliado em etapas posteriores, com protótipos de maior fidelidade, para distinguir os efeitos do meio de avaliação dos problemas reais de usabilidade.

De forma geral, os resultados são positivos quanto à adequação do modelo reprojetado às necessidades e ao comportamento do usuário, com o cenário proposto sendo cumprido com êxito pelo participante.

---

## Sumário dos Principais Resultados

| Etapa da Tarefa | Resultado | Observação |
|:----------------|:---------:|:-----------|
| Acesso ao serviço e autenticação | Concluída | Sem dificuldades relatadas |
| Anexo de documentos (foto + selfie com documento) | Facilitada | Captura integrada ao sistema foi bem recebida |
| Seleção do novo local de votação | Concluída com facilidade | Listagem dinâmica com distância foi eficaz |
| Confirmação de dados complementares (pré-preenchimento) | Concluída | Realizada de forma tranquila |
| Preenchimento de contato (e-mail e telefone) | Concluída | Sem dificuldades |
| Fluidez geral do fluxo | Parcial | Hesitações atribuídas à baixa fidelidade do protótipo |

<div style="text-align: left">
<p>Tabela 3: Sumário dos principais resultados. (Fonte: CARVALHO, Guilherme).</p>
</div>

<p style="text-align: center"><a href="https://youtu.be/1tNV92ngjFM" target="blanket">Clique aqui para assistir à gravação</a></p>

<font size="3"><p style="text-align: center">Fonte: CARVALHO, Guilherme.</p></font>

---

## Planejamento de Reprojeto

Com base nos dados coletados e nas dificuldades identificadas, propõem-se as seguintes alterações para reprojeto: deve manter a estrutura base do modelo original, realizando somente os ajustes justificados pelos resultados da avaliação.

### Alterações Propostas no Reprojeto

**Adição de indicadores de orientação e ajuda contextual**

Em resposta às hesitações observadas, o modelo deve registrar a necessidade de que a interface forneça orientações contextuais ao longo do fluxo. Embora isso seja um requisito de interface e não de tarefa em si, pode ser representado como uma nota de design associada às operações do modelo.

A Tabela 4 apresenta o cronograma previsto para a execução do reprojeto.

**Tabela 4** — Cronograma de Reprojeto.

| Executor(a) do Reprojeto | Horário de Início | Horário de Fim | Data |
|:------------------------:|:-----------------:|:--------------:|:----:|
| Guilherme | 20:50 | 21:50 | 09/06/2026 |

<div style="text-align: left">
<p>Tabela 4: Cronograma de reprojeto. (Fonte: CARVALHO, Guilherme).</p>
</div>

---

## Bibliografia

> <a id="REF1" href="#anchor_1">1.</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 07/06/2026 | 1.0 | Criação do documento | Guilherme | Maria Luana |

<div style="text-align: left">
<p>Tabela 5: Histórico de Versão (Fonte: CARVALHO, Guilherme).</p>
</div>