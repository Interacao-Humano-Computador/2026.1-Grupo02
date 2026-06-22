## Grupo 02

---

## Tabela de Contribuição

| Integrante  | Contribuição                                   |
| :---------: | :--------------------------------------------- |
|  Guilherme  | Criação do documento e realização da avaliação |
| IA - Claude | Formatação e correção de pequenos erros        |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: FUJIMOTO, Lucas).</p>
</div>

---

## Introdução

Este documento apresenta o relato dos resultados da avaliação do Protótipo de Papel referente à funcionalidade de **agendamento presencial** no sistema do TSE, desenvolvida no âmbito da disciplina de Interação Humano-Computador. Os resultados aqui registrados foram obtidos por meio de entrevista e observação com usuário, conforme planejamento previamente definido pela equipe.

---

## Objetivo e Escopo da Avaliação

A avaliação do Protótipo de Papel foi realizada com o objetivo de verificar se o modelo de tarefas elaborado representa adequadamente o comportamento real dos usuários ao executar a funcionalidade de troca de local de votação no portal do TSE. Buscou-se identificar possíveis lacunas entre o fluxo modelado e a experiência efetiva do usuário, bem como avaliar se as melhorias propostas no reprojeto da funcionalidade especialmente a integração da captura de documentos diretamente pelo sistema contribuem para uma experiência mais fluida e eficiente.

O escopo restringe-se à avaliação do protótipo de papel das tarefa de agendar atendimento presencial, e não da interface implementada nem das demais funcionalidades do sistema.

---

## Método de Avaliação

O método adotado foi o de **observação e entrevista com usuário**, no qual o avaliador acompanhou o participante durante a execução das tarefas modeladas, registrando problemas, percepções e sugestões ao longo da sessão. A avaliação foi conduzida com base em um protótipo de papel da interface reprojetada.

A Tabela 2 apresenta o cronograma executado da entrevista realizada.

**Tabela 2** — Cronograma Executado da Entrevista.

| **Entrevistador(es)** | **Entrevistado(s)** | **Horário de Início** | **Horário de Fim** |  **Data**  | **Local** |
| :-------------------: | :-----------------: | :-------------------: | :----------------: | :--------: | :-------: |
|         Lucas         |        Elias        |         13:00         |       13: 20       | 02/06/2026 | FCTE - I8 |

<div style="text-align: left">
<p>Tabela 2: Cronograma executado da entrevista. (Fonte: FUJIMOTO, Lucas).</p>
</div>

---

## Seleção dos Participantes

O participante selecionado foi **Elias**, jovem com idade entre 20 e 30 anos, com **alta familiaridade com tecnologia** e apto para exercer os direitos eleitoral. Esse perfil está diretamente alinhado ao perfil de usuário definido para o sistema do TSE, que contempla eleitores jovens e com experiência no uso de plataformas digitais. Davi também se aproxima das personas elaboradas pela equipe, que representam usuários que buscam autonomia e praticidade ao realizar serviços eleitorais de forma online, sem necessidade de deslocamento a cartórios ou postos de atendimento presencial.

O cenário definido para a avaliação foi o de um jovem que precisa **fazer um agendamento presencial de maneira online**.

---

## Problemas e Dificuldades Encontradas

Durante a sessão de avaliação, foi identificado o seguinte problema:

**Problema 1 — Ausência de um botão de acesso ao autoatendimento online**

- **Tarefa:** Agendar, tela inicial do fluxo de agendamento presencial.
- **Ação realizada pelo usuário:** Ao iniciar a tarefa, o participante procurou uma opção que permitisse resolver a demanda de forma totalmente online, sem precisar agendar um atendimento presencial, esperando encontrar um botão ou atalho para o autoatendimento online.
- **Esperado × observado**: Esperava-se que a interface oferecesse, já na tela inicial, um caminho alternativo ao presencial (autoatendimento), permitindo ao usuário escolher entre resolver pelo próprio sistema ou agendar uma ida ao posto. No protótipo avaliado, esse acesso não existe: o fluxo conduz diretamente ao agendamento presencial, sem oferecer a opção de autoatendimento online. Essa ausência levou o participante a hesitar e a tentar, sem sucesso, localizar o recurso.
- **Observação:** Esse problema é um ponto que pode ser considerado a depender do escopo planejado, não sendo algo de extrema importância ou algo fatal ao funcionamento da funcionalidade, assim, podendo ser considerado ao adicionar ou não.

---

## Sugestões de Melhoria

Com base no problema identificado, propõe-se a seguinte melhoria:

**Melhoria 1 — Botão de autoatendimento online**

- **Problema identificado**: Ausência de um botão de acesso ao autoatendimento online na interface de agendamento presencial.
- **Contexto**: Ao iniciar a tarefa, o usuário procurou uma opção que permitisse resolver a demanda de forma totalmente online, sem precisar agendar uma ida ao posto, e interrompeu o fluxo ao não localizar esse caminho na tela inicial.
- **Resultado esperado**: O usuário encontra, logo na tela inicial, a opção de autoatendimento online e escolhe de forma autônoma entre resolver a demanda remotamente ou agendar o atendimento presencial.
- **Resultado observado**: O protótipo conduz diretamente ao agendamento presencial, sem oferecer acesso ao autoatendimento online, levando o usuário a hesitar e a buscar, sem sucesso, o recurso esperado.
- **Sugestão de correção**: Adicionar, na tela inicial, um botão de autoatendimento online claramente identificado, ao lado da opção de agendamento presencial, permitindo ao usuário optar entre os dois caminhos. Em protótipos de maior fidelidade, esse elemento deve ser testado para verificar se atende à expectativa do usuário de resolver a demanda remotamente e se elimina a hesitação observada na tela inicial.

---

## Feedback dos Usuários

De modo geral, os participantes avaliaram positivamente a clareza visual das telas e a objetividade do fluxo de agendamento, considerando o suporte computacional adequado para resolver a tarefa sem precisar se deslocar previamente a um cartório. A separação entre "agendar" e "acompanhar" o atendimento foi compreendida e considerada coerente com o que esperariam de um sistema desse tipo.

As observações mais críticas, captadas tanto no pensamento em voz alta quanto na entrevista pós-teste, concentraram-se na ausência de uma etapa explícita de seleção do serviço, na ordem em que os dados pessoais são solicitados e na pouca informação disponível para escolher o local de atendimento. Os participantes também sugeriram que o acompanhamento por protocolo seria mais prático. Apesar disso, relataram que conseguiriam concluir o agendamento e demonstraram motivação para usar a interface, descrevendo-a como simples e direta.

---

## Análise e Interpretação dos Resultados

A análise dos dados coletados indica que o protótipo de papel cumpre seu objetivo formativo: o participante conseguiu operar as telas e concluir a tarefa de agendamento, o que evidencia boa apropriação geral da tecnologia e uma estrutura de fluxo compreensível. A clareza das telas e a separação entre agendar e acompanhar foram os pontos fortes mais consistentes.

Os problema mais relevante refere-se ao **botão de autoatendimento**. A ausência de uma dessa funcionalidade trouxe um pouco de incomodo, ao não haver uma maneira de fazer essa atividade de uma forma mais rápida.

Em síntese, os resultados apontam para um reprojeto focado em **botão de autoatendimento**, preservando a simplicidade e a clareza já reconhecidas pelos participantes.

---

## Sumário dos Principais Resultados

| Etapa da Tarefa |        Resultado         | Observação                                               |
| :-------------- | :----------------------: | :------------------------------------------------------- |
| Tela inicial    |        Concluída         | -                                                        |
| Agendamento     |        Concluída         | -                                                        |
| Acompanhamento  | Concluída com facilidade | -                                                        |
| Captcha         |        Concluída         | -                                                        |
| Tela inicial    |         Parcial          | Sentiu falta de um atalho para o autoatendimento online. |

<div style="text-align: left">
<p>Tabela 3: Sumário dos principais resultados. (Fonte: FUJIMOTO, Lucas).</p>
</div>

<p style="text-align: center"><a href="https://youtu.be/3AfNchstf5Q" target="blanket">Clique aqui para assistir à gravação</a></p>

<font size="3"><p style="text-align: center">Fonte: FUJIMOTO, Lucas.</p></font>

---

## Planejamento de Reprojeto

Com base nos dados coletados e nas dificuldades identificadas, propõem-se as seguintes alterações para reprojeto: deve manter a estrutura base do modelo original, realizando somente os ajustes justificados pelos resultados da avaliação.

### Alterações Propostas no Reprojeto

**Adição de botão de autoatendimento**

Em resposta às hesitações observadas, o essa funcionalidade facilitaria a tarefa ao propor uma alternativa mais rápida para a funcionalidade em si.

A Tabela 4 apresenta o cronograma previsto para a execução do reprojeto.

**Tabela 4** — Cronograma de Reprojeto.

| Executor(a) do Reprojeto | Horário de Início | Horário de Fim |    Data    |
| :----------------------: | :---------------: | :------------: | :--------: |
|      Lucas Fujimoto      |       17:00       |     18:00      | 11/06/2026 |

<div style="text-align: left">
<p>Tabela 4: Cronograma de reprojeto. (Fonte: FUJIMOTO, Lucas).</p>
</div>

---

## Bibliografia

> <a id="REF1" href="#anchor_1">1.</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

---

## Histórico de Versão

|    Data    | Versão | Descrição            | Autor(es) | Revisor(es) |
| :--------: | :----: | :------------------- | :-------: | :---------: |
| 07/06/2026 |  1.0   | Criação do documento |   Lucas   |    Bryan    |

<div style="text-align: left">
<p>Tabela 5: Histórico de Versão (Fonte: FUJIMOTO, Lucas).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na redação, organizar a estrutura das seções e formatar as tabelas do artefato. Todo o conteúdo técnico e as decisões metodológicas foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas do grupo.
