# Relato dos Resultados — Avaliação da Análise de Tarefas (Justificativa Eleitoral Online)
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Luan Ludry | Elaboração dos resultados da avaliação da análise de tarefas para a justificativa eleitoral online |
| Bryan Smith | Revisão do documento |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Introdução

Este documento apresenta o relato dos resultados da avaliação da **Análise de Tarefas da Justificativa Eleitoral Online**. A estrutura adotada segue o que foi definido no artefato *Planejamento do Relato dos Resultados de Avaliação da Análise de Tarefas*, no qual foram estabelecidos os tópicos, os critérios e o método de registro das informações.

O artefato avaliado é a Análise Hierárquica de Tarefas (HTA) elaborada para a funcionalidade de justificativa eleitoral online, que modela quatro grandes objetivos: **acessar o portal** (acessar o site do TSE/TRE e localizar a seção), **autenticar-se no sistema** (clicar em realizar justificativa, fazer login pelo GOV.BR e aguardar validação), **preencher e enviar a justificativa** (selecionar motivo, descrever situação, anexar documento e confirmar envio) e **obter o comprovante** (visualizar/baixar o PDF e verificar os dados).

---

## Objetivo e Escopo da Avaliação

A avaliação da análise de tarefas teve como objetivo verificar se o modelo de tarefas representado na HTA corresponde à forma como os usuários compreendem e executam, na prática, a justificativa eleitoral online. Buscou-se identificar se os participantes:

- reconhecem os objetivos e subtarefas modelados como adequados à tarefa real;
- concordam com a **ordem** das subtarefas (acessar portal, autenticar-se, preencher formulário, obter comprovante);
- identificam etapas ausentes ou redundantes em relação ao fluxo real;
- compreendem a separação entre as quatro fases e as ações associadas a cada uma.

O **escopo** restringe-se à avaliação do modelo de tarefas (HTA, CTT e GOMS) da funcionalidade de justificativa eleitoral online, e não da interface implementada.

---

## Método de Avaliação

A estrutura do relato dos resultados é fundamentada nos tópicos de avaliação de intersujeito descritos por Barbosa e Silva, adaptados ao contexto da análise de tarefas do projeto. Em conformidade com o planejamento metodológico, foi adotado o método de **observação e entrevista com usuários**, por meio do qual o avaliador acompanha o participante durante a avaliação dos modelos, registrando problemas, percepções e sugestões.

O entrevistador apresentou os diagramas de HTA e CTT e o pseudocódigo GOMS, solicitando que o participante descrevesse como realizaria a tarefa de justificar a ausência eleitoral online, comparando o passo a passo esperado por ele com o passo a passo modelado, e registrando divergências, dúvidas e comentários.

A Tabela 2 exibe as informações da sessão de avaliação realizada.

| Entrevistador | Entrevistado | Horário de Início | Horário de Fim | Data | Local/Plataforma |
|:-------------:|:------------:|:-----------------:|:--------------:|:----:|:----------------:|
| Luan Ludry e Bryan Smith | a preencher | 12:40 | 13:00 | 21/05/2026 | Presencial |

<div style="text-align: left">
<p>Tabela 2: Cronograma executado (Fonte: LUDRY, Luan, 2026).</p>
</div>

> **Nota:** O teste piloto não foi incluído nos resultados desta avaliação, conforme critério de verificação definido no planejamento do artefato.

---

## Seleção do Participante

O participante foi selecionado de modo a refletir o [perfil de usuário](../../../Analise de Requisitos/PerfilDeUsuario.md) definido no projeto, sendo eleitor com familiaridade básica com tecnologia. Esse perfil é compatível com as [personas](../../../Analise de Requisitos/personas.md) elaboradas pela equipe, em especial a persona **Rafael Mendonça Alves**, que representa um usuário que utiliza o portal do TSE ocasionalmente.

---

## Problemas e Dificuldades Encontradas

Os problemas observados estão descritos a seguir, indicando a tarefa em que ocorreram, a ação realizada pelo participante e o comportamento esperado em comparação com o observado.

**Problema 1 — Falta de clareza sobre o prazo para justificativa (Tarefa 1)**

- **Tarefa:** 1. Acessar o portal e localizar a seção de Justificativa Eleitoral.
- **Ação do usuário:** O participante questionou se existe alguma indicação de prazo para realizar a justificativa antes de iniciar o fluxo.
- **Esperado × observado:** A HTA não modela uma etapa de verificação do prazo ou exibição de alerta sobre o período disponível para justificativa.

**Problema 2 — Autenticação GOV.BR pode ser desconhecida (Tarefa 2)**

- **Tarefa:** 2.2 Fazer login pelo GOV.BR (CPF + senha).
- **Ação do usuário:** O participante demonstrou dúvida sobre o que é o GOV.BR e se precisaria de cadastro prévio.
- **Esperado × observado:** O modelo pressupõe que o usuário já possui conta no GOV.BR. A etapa de cadastro ou recuperação de acesso não está representada na HTA.

**Problema 3 — Clareza dos planos/sequência no diagrama (Tarefa 3)**

- **Tarefa:** 3. Preencher e enviar a justificativa.
- **Ação do usuário:** O participante teve dificuldade em distinguir quais subtarefas são obrigatórias e quais são opcionais (como o anexo de documento).
- **Esperado × observado:** A notação de plano não deixa explícito que o anexo é opcional em alguns casos de justificativa.

---

## Sugestões de Melhoria

Para cada problema identificado, registram-se abaixo as sugestões de melhoria propostas.

| Problema | Contexto / ação | Resultado esperado × observado | Sugestão de melhoria |
|:--------:|:----------------|:-------------------------------|:---------------------|
| 1 | Falta de indicação de prazo | Esperado: saber se ainda está no prazo. Observado: lacuna no modelo. | Incluir a subtarefa "Verificar prazo para justificativa" antes de acessar o formulário. |
| 2 | Autenticação GOV.BR desconhecida | Esperado: login direto. Observado: usuário sem conta GOV.BR travaria no fluxo. | Modelar caminho alternativo para cadastro ou recuperação de acesso ao GOV.BR. |
| 3 | Obrigatoriedade do anexo pouco clara | Esperado: distinguir obrigatório de opcional. Observado: ambiguidade no diagrama. | Detalhar nos planos da HTA quais operações são opcionais, usando a notação adequada. |

<div style="text-align: left">
<p>Tabela 3: Sugestões de melhoria (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Feedback dos Usuários

De modo geral, o participante avaliou positivamente a **completude** do modelo de tarefas e a clara separação entre as quatro fases do fluxo (acessar, autenticar, preencher e obter comprovante). O participante considerou o fluxo representado condizente com o que esperaria ao realizar a justificativa na prática. Entretanto, surgiram dúvidas pontuais relacionadas ao prazo da justificativa e ao uso do GOV.BR como plataforma de autenticação.

---

## Análise e Interpretação dos Resultados

A partir das respostas coletadas e das percepções do participante durante a análise conjunta dos modelos, foram consolidados os seguintes achados.

### Facilidade de Aprendizado e Legibilidade dos Modelos

O usuário conseguiu interpretar os diagramas de tarefas de forma satisfatória. O modelo atende à meta de **legibilidade para usuários leigos**, não exigindo conhecimento técnico prévio para compreensão do fluxo representado. Entretanto, ajustes na notação de planos tornariam a leitura ainda mais clara.

### Validade dos Modelos em Relação ao Uso Real

O participante confirmou que os objetivos modelados, as operações descritas e a sequência de ações correspondem adequadamente à sua expectativa de uso do sistema. Seria interessante incluir caminhos alternativos para situações como ausência de conta GOV.BR, aumentando a conformidade com o fluxo real.

### Conformidade com Padrões e Ausência de Falhas Graves

Nenhuma falha grave foi identificada na análise de tarefas. Os elementos simbólicos e a hierarquia de decomposição foram avaliados como consistentes com os métodos HTA, CTT e GOMS adotados. Os modelos foram aprovados pelo participante sem ressalvas estruturais.

### Sugestões de Melhoria

O participante indicou que uma legenda mais detalhada nos diagramas e a representação do prazo para justificativa contribuiriam para melhorar a compreensão do fluxo.

<p style="text-align: center"><a href="" target="blanket">Clique aqui para assistir à gravação</a></p>

<font size="3"><p style="text-align: center">Fonte: LUDRY, Luan, 2026.</p></font>

---

## Planejamento de Reprojeto

As sugestões levantadas e as dificuldades identificadas serão consideradas no reprojeto da análise de tarefas da justificativa eleitoral online. O reprojeto deve manter a base do artefato original, realizando apenas as alterações justificadas pelos dados coletados. O foco será na clareza dos planos do diagrama HTA e na modelagem de caminhos alternativos para autenticação. A Tabela 4 apresenta o cronograma previsto para a execução do reprojeto.

**Tabela 4** — Cronograma de Reprojeto.

| Executor(a) do Reprojeto | Horário de Início | Horário de Fim | Data |
|:------------------------:|:-----------------:|:--------------:|:----:|
| Luan | 17:40 | 18:40 | 03/06/2026 |

<div style="text-align: left">
<p>Tabela 4: Cronograma de reprojeto (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Bibliografia

> <a id="REF1" href="#anchor_1">[1].</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

> <a id="REF2" href="#anchor_2">[2].</a> TRIBUNAL SUPERIOR ELEITORAL. **Justificativa Eleitoral**. Disponível em: [https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/justificativa-eleitoral](https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/justificativa-eleitoral). Acesso em: 31 mai. 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 31/05/2026 | 1.0 | Criação do relato dos resultados | Luan Ludry | Bryan Smith |

<div style="text-align: left">
<p>Tabela 5: Histórico de versão (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na redação, organizar a estrutura das seções e formatar as tabelas do artefato. Todo o conteúdo técnico e as decisões metodológicas foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas do grupo.
