# Relato dos Resultados — Avaliação da Análise de Tarefas (Agendamento Presencial)
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Lucas Fujimoto | Elaboração no resultados da avaliação da análise de tarefas para o agendamento presencial |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: FUJIMOTO, Lucas, 2026).</p>
</div>

---

## Introdução

Este documento apresenta o relato dos resultados da avaliação da **Análise de Tarefas do Agendamento Presencial**. A estrutura adotada segue o que foi definido no artefato *Planejamento do Relato dos Resultados de Avaliação da Análise de Tarefas*, no qual foram estabelecidos os tópicos, os critérios e o método de registro das informações.

O artefato avaliado é a Análise Hierárquica de Tarefas (HTA) elaborada para a funcionalidade de agendamento presencial, que modela dois grandes objetivos: **agendar atendimento presencial** (informar dados pessoais, selecionar local, selecionar horário e data e confirmar) e **acompanhar agendamento** (informar dados pessoais, cancelar e visualizar). 

---

## Objetivo e Escopo da Avaliação

A avaliação da análise de tarefas teve como objetivo verificar se o modelo de tarefas representado na HTA corresponde à forma como os usuários compreendem e executam, na prática, o agendamento presencial. Buscou-se identificar se os participantes:

- reconhecem os objetivos e subtarefas modelados como adequados à tarefa real;
- concordam com a **ordem** das subtarefas (informar dados, selecionar local, selecionar data/horário, confirmar);
- identificam etapas ausentes ou redundantes em relação ao fluxo real;
- compreendem a separação entre "agendar" e "acompanhar" e as ações associadas (cancelar e visualizar).

O **escopo** restringe-se à avaliação do modelo de tarefas (HTA) e CTT da funcionalidade de agendamento presencial, e não da interface implementada.

---

## Metodo de Avaliação

A estrutura do relato dos resultados é fundamentada nos tópicos de avaliação de intersujeito descritos por Barbosa e Silva, adaptados ao contexto da análise de tarefas do projeto. Em conformidade com o planejamento metodológico, foi adotada o método de **observação e entrevista com usuários**, por meio do qual o avaliador acompanha o participante durante a execução das tarefas analisadas, registrando problemas, percepções e sugestões.

Ademais, o entrevistador apresentou o diagrama de HTA e CTT solicitou que o participante descrevesse como realizaria a tarefa de agendar (e depois acompanhar) um atendimento presencial, comparando o passo a passo esperado por ele com o passo a passo modelado, e registrando divergências, dúvidas e comentários.

> **Nota:** O teste piloto não foi incluído nos resultados desta avaliação, conforme critério de verificação definido no planejamento do artefato.

---


## Seleção do Participante

O participante foi modelado de modo a refletir o [perfil de usuário](../../Analise de Requisitos/PerfilDeUsuario.md) definido no projeto, sendo eleitores do Distrito Federal, com idade entre 18 - 22 anos. Esse perfil é compatível com as [personas](../../Analise de Requisitos/personas.md) elaboradas pela equipe, que representam possíveis usuários do site.


---

## Problemas e Dificuldades Encontradas

Os problemas observados estão descritos a seguir, indicando a tarefa em que ocorreram, a ação realizada pelo participante e o comportamento esperado em comparação com o observado.

**Problema 1 — Ausência da subtarefa de seleção do serviço (Tarefa 1)**

- **Tarefa:** 1. Agendar atendimento presencial.
- **Ação do usuário:**  Usuário procurou uma etapa para escolher o **tipo de serviço** (por exemplo, coleta de biometria) antes de selecionar o local.
- **Esperado × observado:** A HTA e CTT não modela a escolha do serviço/tipo de atendimento, partindo diretamente para a identificação.

**Problema 2 — Acompanhamento exige dados pessoais em vez de protocolo (Tarefa 2)**

- **Tarefa:** Informar dados pessoais
- **Ação do usuário:** Usuário esperava localizar o agendamento por meio do **número de protocolo/comprovante**, e não preenchendo novamente dados pessoais.
- **Esperado × observado:** No serviço real do TRE-DF, o acompanhamento e a reimpressão do comprovante podem ser feitos a partir de identificação de protocolo. O modelo prevê apenas "informar dados pessoais".

**Problema 3 — Clareza dos planos/sequência no diagrama**

- **Tarefa:** Gerenciar atendimento presencial e demais nós com notação de plano.
- **Ação do usuário:** O participante teve dificuldade em distinguir, apenas pelo diagrama, quais subtarefas são **sequenciais** e quais são **opcionais/selecionáveis**.
- **Esperado × observado:** Esperava-se que a notação de plano deixasse claro o tipo de relação entre as subtarefas. A representação atual foi considerada pouco explícita quanto à sequência versus escolha.

---

## Sugestões de Melhoria

Para cada problema identificado, registram-se abaixo as sugestões de melhoria propostas.

| Problema | Contexto / ação | Resultado esperado × observado | Sugestão de melhoria |
|:--------:|:----------------|:-------------------------------|:---------------------|
| 1 | Falta de seleção de serviço | Esperado: escolher o tipo de atendimento. Observado: lacuna no modelo. | Incluir a subtarefa "Selecionar serviço/tipo de atendimento" |
| 2 | Acompanhar exige dados pessoais | Esperado: localizar por protocolo. Observado: divergência do fluxo real. | Permitir a possibilidade de acompanhamento por número de protocolo, |
| 3 | Notação de planos pouco clara | Esperado: distinguir sequência de escolha. Observado: ambiguidade no diagrama. | Detalhar os planos (sequencial, opcional, seleção) nos nós da HTA. |

<div style="text-align: left">
<p>Tabela 2: Tabela de contribuição (Fonte: FUJIMOTO, Lucas, 2026).</p>
</div>

---

## Feedback dos Usuários

De modo geral, o participante avaliou positivamente a **completude** do modelo de tarefas e a clara separação entre os objetivos de "agendar" e "acompanhar" o atendimento. Porém houve um pouco de dúvida na parte do entendimento dos símbolos e da lógica em si dos diagramas.

---
### Análise e Interpretação dos Resultados

A partir das respostas coletadas e das percepções do participante durante a análise conjunta dos modelos, foram consolidados os seguintes achados.

#### Facilidade de Aprendizado e Legibilidade dos Modelos

O usuário conseguiu interpretar ambos os diagramas de tarefas parcialmente. Esse resultado indica que os modelos atendem à meta de **legibilidade para usuários leigos**, não exigindo conhecimento técnico prévio para compreensão do fluxo representado. Entretanto, é necessário deixar ainda mais claro para não haver inconssistência de informação.

#### Validade dos Modelos em Relação ao Uso Real

Para ambas as tarefas avaliadas, o participante confirmou que os objetivos modelados, as operações descritas e a sequência de ações correspondem adequadamente à sua expectativa de uso do sistema. porém seria interessante repensar um pouco na ordem das subtarefas, e no seguimento do fluxo, para melhorar o uso e a conformidade dos diagramas.

#### Conformidade com Padrões e Ausência de Falhas Graves

Nenhuma falha grave foi identificada em nenhuma das duas análises de tarefas. Os elementos simbólicos e a hierarquia de decomposição foram avaliados como consistentes com o método HTA/CTT adotado. Os modelos foram aprovados pelo participante sem ressalvas estruturais.

#### Sugestões de Melhoria

O participante indicou que caso seja possível, haver uma pequena mudança na parte de legenda dos diagramas para melhor entendimento.

<p style="text-align: center"><a href="" target="blanket">Clique aqui para assistir à gravação</a></p>


<font size="3"><p style="text-align: center">Fonte: FUJIMOTO, Lucas, 2026.</p></font>

---

## Planejamento de Reprojeto

As sugestões levantadas e as dificuldades identificadas serão consideradas no reprojeto da análise de tarefas do agendamento presencial. O reprojeto deve manter a base do artefato original, realizando apenas as alterações justificadas pelos dados coletados. Assim, o foco será na parte do entendimento dos diagramas e a lógica dos diagramas. A Tabela 3 apresenta o cronograma previsto para a execução do reprojeto.

**Tabela 3** — Cronograma de Reprojeto.

| Executor(a) do Reprojeto | Horário de Início | Horário de Fim | Data |
|:------------------------:|:-----------------:|:--------------:|:----:|
| Lucas | 20:30 | 21:30 | 03/06/2026 |

<div style="text-align: left">
<p>Tabela 3: Tabela de contribuição (Fonte: FUJIMOTO, Lucas, 2026).</p>
</div>

---

## Bibliografia

> <a id="REF1" href="#anchor_1">[1].</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

> <a id="REF2" href="#anchor_2">[2].</a> TRIBUNAL REGIONAL ELEITORAL DO DISTRITO FEDERAL. **Agendamento para Atendimento Presencial**. Disponível em: [https://www.tre-df.jus.br/servicos-eleitorais/agendamento](https://www.tre-df.jus.br/servicos-eleitorais/agendamento). Acesso em: 31 mai. 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 31/05/2026 | 1.0 | Criação do relato dos resultados | Lucas | Luan |

<div style="text-align: left">
<p>Tabela 4: Tabela de contribuição (Fonte: FUJIMOTO, Lucas, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na redação, organizar a estrutura das seções e formatar as tabelas do artefato. Todo o conteúdo técnico e as decisões metodológicas foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas do grupo.