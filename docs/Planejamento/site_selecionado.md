# Análise do Portal TRE/TSE — Seleção do Site
## Grupo 02

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| DD/MM/2026 | 1.0 | Criação e padronização do documento de seleção do site | Samuel e Tiago Geovane | — |

---

## Introdução

Este documento apresenta o processo de seleção do site analisado pelo grupo no contexto da disciplina de Interação Humano-Computador (IHC). Seu objetivo é justificar a escolha da plataforma digital a ser estudada, bem como descrever suas principais funcionalidades e relevância.

A escolha do portal do Tribunal Superior Eleitoral (TSE) e dos Tribunais Regionais Eleitorais (TRE) se deve à sua importância social e à complexidade dos serviços oferecidos, permitindo uma análise aprofundada da usabilidade e da experiência do usuário em fluxos críticos de atendimento ao cidadão.

---

## Seleção do Site e Escopo da Análise

### Site Selecionado

O site selecionado pelo grupo foi o portal do **Tribunal Superior Eleitoral (TSE) / Tribunal Regional Eleitoral (TRE)**, com foco nas plataformas de atendimento ao eleitor e transparência pública.

---

### Funcionalidades Analisadas

O grupo focará a análise nas seguintes funcionalidades que podem ser acessadas pelo Portal do **TSE**, representando diferentes níveis de interação e complexidade:

#### 1. Autoatendimento ao Eleitor

Painel que centraliza diversos serviços fundamentais para o público externo:

- **Transferir título eleitoral:** Fluxo de mudança de domicílio eleitoral.
- **Atualizar dados pessoais:** Alteração de informações biográficas e cadastrais.
- **Justificar ausência:** Sistema para eleitores que não compareceram às urnas.
- **Validar autenticidade de documentos:** Verificação de certidões e documentos emitidos pela Justiça Eleitoral.

---

#### 2. DivulgaCandContas

Portal de transparência que permite a navegação profunda por dados de candidaturas em todo o país:

- **Consultas detalhadas:** Acesso a propostas e históricos de candidatos.
- **Validação de documentos:** Conferência de atas e registros.
- **Comparativo de gastos:** Visualização e análise de receitas e despesas de campanhas.

---

#### 3. Balcão Virtual

Plataforma de interação em tempo real para atendimento imediato:

- **Agendamento de videoconferência:** Sistema de marcação para atendimento remoto por vídeo com servidores da Justiça Eleitoral.

---

# Motivação da Escolha e Heurísticas Relacionadas

A seleção do portal TSE/TRE como objeto de estudo nesta disciplina justifica-se por três razões centrais. Primeiramente, trata-se de uma interface de uso cívico obrigatório, cujos serviços impactam diretamente a participação política dos cidadãos brasileiros — qualquer falha de usabilidade tem consequências concretas para o exercício dos direitos eleitorais. Em segundo lugar, a plataforma contempla uma diversidade de perfis de usuário, desde eleitores com baixa familiaridade tecnológica até servidores eleitorais e pesquisadores de dados políticos, o que oferece um campo rico para análise de usabilidade. Por fim, a arquitetura do portal combina múltiplos subportais com propósitos distintos, criando oportunidades de avaliação de consistência, hierarquia informacional e integração entre sistemas.

Do ponto de vista das heurísticas de Nielsen (1994b), conforme descritas por Barbosa et al. (2021), o portal TSE apresenta características que permitem exercitar a aplicação de todas as dez heurísticas de usabilidade, pois seus fluxos envolvem desde operações simples (consulta de situação eleitoral) até processos multi-etapas (transferência de domicílio eleitoral), passando por interfaces de dados complexos (DivulgaCandContas). A seguir, detalhamos a análise heurística de cada uma das dez heurísticas.

---

## Análise das 10 Heurísticas de Nielsen

### H1 — Visibilidade do Estado do Sistema

Segundo Barbosa et al. (2021, p. 282), esta heurística determina que o sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback adequado e no tempo certo. No portal TSE, esta heurística não é violada nos fluxos de Autoatendimento: ao iniciar processos como justificativa de ausência eleitoral ou transferência de título, o usuário recebe indicadores visuais de progresso (como barras de progresso ou breadcrumbs), que sinalizam quantas etapas ainda restam.

### H2 — Correspondência entre o Sistema e o Mundo Real

A heurística estabelece que o sistema deve utilizar palavras, expressões e conceitos familiares aos usuários. O portal TSE emprega terminologia jurídico-eleitoral especializada — como "domicílio eleitoral", "certidão de quitação eleitoral" e "biometria" — sem oferecer explicações acessíveis ao cidadão leigo. Esta heurística é **violada**.

### H3 — Controle e Liberdade do Usuário

Usuários devem poder desfazer ações facilmente. No módulo DivulgaCandContas, não há opção clara para limpar filtros aplicados, obrigando o usuário a reiniciar o fluxo. Esta heurística é **violada**.

### H4 — Consistência e Padronização

O portal apresenta inconsistências visuais e estruturais entre subportais (cores, menus e nomenclaturas diferentes), aumentando a carga cognitiva do usuário. Esta heurística é **violada**.

### H5 — Prevenção de Erros

Os formulários do Autoatendimento realizam validação em tempo real (como em campos de CEP, data e título eleitoral), evitando erros antes da submissão. Esta heurística não é violada.

### H6 — Reconhecimento em vez de Memorização

O sistema utiliza ícones acompanhados de rótulos textuais, facilitando a identificação das funcionalidades. Esta heurística não é violada.

### H7 — Flexibilidade e Eficiência de Uso

O portal oferece recursos como atalhos e mapa do site, permitindo navegação mais eficiente para usuários experientes. Esta heurística não é violada.

### H8 — Projeto Estético e Minimalista

A página inicial apresenta excesso de informações (banners, notícias, alertas), prejudicando o foco nas funcionalidades principais. Esta heurística é **violada**.

### H9 — Ajudar a Reconhecer, Diagnosticar e Recuperar de Erros

As mensagens de erro são genéricas e não indicam claramente a causa ou solução do problema. Esta heurística é **violada**.

### H10 — Ajuda e Documentação

A ajuda não é contextualizada dentro dos fluxos de uso, e a FAQ não está integrada às tarefas do usuário. Esta heurística é **violada**.

---

Abaixo se encontra uma imagem (Imagem 1) que é contem uma print do livro de onde foi retirado essas heurísticas

<div align="center">
<img src="docs/img/site_escolhidoIMG/site_escolhido_img1.png" alt="Imagem 1" style="width: 400px">
</div>
> **Imagem 1:** Heurísticas de Nielsen (Fonte: Barbosa et al. (2021, p. 282)).

## Quadro-Resumo das Heurísticas

| Heurística | Observação no Portal TSE/TRE | Funcionalidade Afetada | Status |
|:-----------|:-----------------------------|:----------------------:|:------:|
| H1 — Visibilidade do estado do sistema | Presença de indicadores de progresso nos fluxos de Autoatendimento. | Autoatendimento | ✅ Não violada |
| H2 — Correspondência com o mundo real | Uso de terminologia técnica sem explicações acessíveis. | Autoatendimento / Geral | ❌ Violada |
| H3 — Controle e liberdade do usuário | Ausência de opção para desfazer filtros. | DivulgaCandContas | ❌ Violada |
| H4 — Consistência e padronização | Inconsistência entre subportais. | Todos os módulos | ❌ Violada |
| H5 — Prevenção de erros | Validação em tempo real nos formulários. | Autoatendimento | ✅ Não violada |
| H6 — Reconhecimento em vez de memorização | Uso de ícones com rótulos. | Autoatendimento | ✅ Não violada |
| H7 — Flexibilidade e eficiência de uso | Presença de atalhos e mapa do site. | Geral | ✅ Não violada |
| H8 — Projeto estético e minimalista | Excesso de elementos na página inicial. | Página inicial / Geral | ❌ Violada |
| H9 — Diagnóstico e recuperação de erros | Mensagens de erro genéricas. | Autoatendimento | ❌ Violada |
| H10 — Ajuda e documentação | Falta de ajuda contextual integrada. | Autoatendimento / Balcão Virtual | ❌ Violada |
> **Tabela 2:** Análise heurística do Portal TSE/TRE (Fonte: autores, 2026).

---
## Satisfação do Usuário

A satisfação do usuário, conforme definida por Nielsen (1994c) e discutida por Barbosa et al. (2021, p. 37), refere-se à avaliação subjetiva do efeito do uso do sistema sobre as emoções e sentimentos do usuário. No contexto do portal TSE/TRE, essa satisfação é impactada de forma mista, refletindo tanto aspectos positivos quanto limitações identificadas na análise heurística.

Por um lado, há elementos que contribuem positivamente para a experiência. A presença de indicadores de progresso nos fluxos de Autoatendimento (H1), a validação em tempo real de campos críticos (H5) e o uso de ícones com rótulos textuais (H6) auxiliam na compreensão das tarefas e reduzem a ocorrência de erros. Além disso, a existência de atalhos e de um mapa do site (H7) favorece usuários mais experientes, permitindo uma navegação mais eficiente.

Entretanto, as violações heurísticas identificadas exercem impacto significativo e negativo na satisfação geral. O uso de terminologia técnico-jurídica sem adaptação ao público leigo (H2) dificulta a compreensão, especialmente para usuários que acessam o sistema de forma esporádica. As inconsistências entre subportais (H4) aumentam a carga cognitiva, exigindo reaprendizado constante da interface.

Problemas relacionados ao controle e à recuperação de erros também afetam diretamente a experiência. A ausência de mecanismos simples para desfazer ações, como limpar filtros (H3), e a presença de mensagens de erro genéricas (H9) geram frustração e incerteza durante a execução de tarefas. Soma-se a isso a falta de ajuda contextual integrada aos fluxos (H10), o que obriga o usuário a buscar informações fora do contexto da tarefa.

Além disso, o excesso de informação na página inicial (H8) contribui para a sobrecarga cognitiva, dificultando a localização rápida das funcionalidades principais, como os serviços de Autoatendimento.

O caráter obrigatório do uso do sistema amplifica esses problemas. Como o usuário não possui alternativas para realizar determinadas ações cívicas, falhas de usabilidade não resultam apenas em inconveniência, mas em frustração prolongada. Ainda assim, a presença de mecanismos de prevenção de erros (H5) e feedback de progresso (H1) ajuda a mitigar parcialmente essa experiência negativa.

Por fim, conforme Barbosa et al. (2021, p. 38), dificilmente um sistema será excelente em todos os critérios de usabilidade. No caso do portal TSE/TRE, observa-se que, embora existam boas práticas implementadas, as falhas em aspectos críticos — especialmente linguagem, consistência, suporte ao erro e ajuda ao usuário — comprometem a satisfação geral. Dessa forma, recomenda-se priorizar melhorias voltadas à **facilidade de aprendizado** e à **segurança no uso**, considerando o perfil majoritariamente leigo e esporádico dos usuários do sistema.

Abaixo se encontra uma imagem (Imagem 2) que é contem uma print do livro que fala sobre experiencia do usuario

<div align="center">
<img src="docs/img/site_escolhidoIMG/site_escolhido_img2.png" alt="Imagem 1" style="width: 400px">
</div>
> **Imagem 2:** Experiencia do usuario (Fonte: Barbosa et al. (2021, p. 37)).
---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Samuel e Tiago Geovane | Seleção do site e descrição das funcionalidades |
| Tiago Geovane | Estruturação do documento conforme modelo |
| Tiago Geovane | Analise Heurística do site |

> **Tabela 1:** Tabela de contribuição (Fonte: Geovane, Tiago 2026).

---

## Referência Bibliográfica

BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. *Interação Humano-Computador e Experiência do Usuário.* Autopublicação, 2021. ISBN: 978-65-00-19677-1.

NIELSEN, J. *Usability Engineering.* San Francisco: Morgan Kaufmann, 1994c.

NIELSEN, J. Heuristic evaluation. In: NIELSEN, J.; MACK, R. L. (Ed.). *Usability Inspection Methods.* New York: John Wiley & Sons, 1994b. p. 25–62.

TRIBUNAL SUPERIOR ELEITORAL. *Portal do TSE.* Disponível em: https://www.tse.jus.br. Acesso em: abr. 2026.

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na organização da estrutura, padronização do conteúdo em formato acadêmico e desenvolvimento da análise heurística. Todo o conteúdo técnico e as decisões de projeto foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação, redação e análise, sem interferir nas escolhas metodológicas do grupo.
