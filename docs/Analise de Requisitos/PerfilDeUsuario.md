# Perfil do Usuário
## Grupo 02

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 02/05/2026 | 1.0 | Criação do documento | Tiago | ------ |
| 02/05/2026 | 1.0 | Adicionando dados obtidos pela entrevista | Tiago | ------ |
| 03/05/2026 | 1.1 | Adição parcial dos dados obtidos pela Análise de Documentos | Samuel Felipe | ----- |
| 03/05/2026 | 1.1 | Adição dos dados obtidos pela Análise de Documentos | Bryan Smith| ----- |


---

## Introdução

Este documento tem como objetivo descrever o **Perfil do Usuário** do sistema analisado no contexto da disciplina de Interação Humano-Computador (IHC). O perfil do usuário é um artefato fundamental para orientar as decisões de design centrado no ser humano, pois permite compreender quem são os usuários reais ou potenciais do sistema, suas características, necessidades, limitações e expectativas.

Para a construção deste perfil, foram empregadas três técnicas complementares de coleta e análise de dados: **entrevista**, **análise de documentos** e **questionário**. A combinação dessas abordagens visa garantir maior riqueza e confiabilidade às informações levantadas, reduzindo vieses que poderiam surgir do uso exclusivo de uma única técnica.

---

## Perfil do Usuário

### 1. Resultados da Entrevista

#### Descrição da Técnica

A entrevista é uma técnica qualitativa de coleta de dados que permite uma investigação aprofundada das percepções, experiências e necessidades dos usuários. Neste trabalho, foram realizadas entrevistas semiestruturadas com 2 participantes. As sessões foram conduzidas de forma presencial no dia 30/04/2026, com duração média de 5 minutos cada.

#### Perfil dos Entrevistados

| # | Faixa Etária | Ocupação | Nível de Escolaridade | Experiencia com o Sistema | Afinidade com tecnologia |
|:-:|:------------:|:--------:|:---------------------:|:-------------------------:|:-------------------------:|
| 1 | 18-30 | Estudante de Engenharia de Software  | Ensino Superior Incompleto | Alta | Alta
| 2 | 18-30 | Estudante de Engenharia de Software | Ensino Superior Incompleto | Nunca utilizou | Alta


<div style="text-align: left">
<p>Tabela 1: Perfil dos entrevistados (Fonte: autores, 2026).</p>
</div>

#### Principais Resultados

Com base nas entrevistas realizadas, foram identificados os seguintes aspectos relevantes para a composição do perfil do usuário:

- **Motivações de uso:** Fazer a primeira via do titulo de eleitor, confirmar autenticidade do documento e verificar pendencias eleitorais
- **Frequência de uso:** Anualmente
- **Principais dificuldades relatadas:** Relatou dificuldades em inserir dados no sistema, muitas vezes dados tinham que ser inseridos mais de uma vez após dar erro.
---

#### Descrição da Técnica

A análise de documentos é uma técnica de pesquisa que consiste no exame sistemático de registros, relatórios, manuais, políticas internas ou qualquer outro material documentado que possa fornecer informações relevantes sobre os usuários e o contexto de uso do sistema. Esta abordagem permite acessar dados secundários já existentes, complementando as informações obtidas por meio de técnicas primárias.

O livro "Interação Humano-Computador" (Barbosa & Silva, 2010) estabelece na página 138 que:

> *"A documentação de processos e normas também é um insumo importante para a análise, pois define restrições sobre o que o usuário poderá ou não fazer através do sistema, e às vezes até como ele poderá utilizá-lo."*

Os documentos analisados neste trabalho incluem: **Dados Abertos do Perfil do Eleitorado** (estatísticas oficiais do TSE), **comunicados oficiais do TSE sobre o título de eleitor**, e **Resoluções do TSE sobre alistamento e regularização eleitoral**. A análise foi conduzida entre os dias **01/05/2026** e **03/05/2026**.

#### Documentos Analisados

| Documento | Tipo | Fonte | Data de Acesso |
|:---------:|:----:|:-----:|:--------------:|
| Eleitorado da eleição - Painel Perfil do Eleitorado | Dados de Acesso / Estatístico | SIG TSE (https://sig.tse.jus.br/ords/dwapr/r/seai/sig-eleicao-eleitorado/painel-perfil-eleitorado) | 03/05/2026 |
| Título de eleitor: uma questão de cidadania | Notícia / Comunicação Oficial | Portal do TSE (https://www.tse.jus.br/comunicacao/noticias/2023/Marco/titulo-de-eleitor-uma-questao-de-cidadania) | 03/05/2026 |
| Resolução TSE nº 23.759/2026 | Normativa / Resolução | TSE (https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-759-de-26-de-fevereiro-de-2026) | 03/05/2026 |

<div style="text-align: left">
<p>Tabela 2: Documentos analisados (Fonte: autores, 2026).</p>
</div>

#### Principais Resultados

A análise documental permitiu identificar os seguintes elementos relevantes para o perfil do usuário:

##### Características demográficas identificadas

Com base no **Painel Perfil do Eleitorado** do TSE (Dados Abertos), foram identificadas as seguintes características do eleitorado brasileiro:

- **Total do eleitorado:** Aproximadamente **156 milhões** de eleitores.
- **Distribuição por gênero:** 52% feminino e 48% masculino.
- **Faixa etária predominante:** Entre 21 e 60 anos (média de idade concentrada nesta faixa).
- **Distribuição por grau de escolaridade:**
    - 27,04% têm Ensino Médio completo
    - 22,48% têm Ensino Fundamental incompleto
    - 17,78% têm Ensino Médio incompleto
    - 10,75% têm Ensino Superior completo
    - 06,59% não têm informação de escolaridade mas sabem ler e escrever
    - 06,41% têm Ensino Superior incompleto
    - 05,37% têm Ensino Fundamental completo
    - 03,57% são analfabetos (sem informação de escolaridade)
    - 00,02% não têm dados informados

**Fonte:** SIG TSE - Eleitorado da Eleição. Disponível em: https://sig.tse.jus.br/ords/dwapr/r/seai/sig-eleicao-eleitorado/painel-perfil-eleitorado. Acesso em: 03 maio 2026.

##### Contexto de uso

Com base na notícia institucional **"Título de eleitor: uma questão de cidadania"**, publicada no portal do TSE, foi possível identificar o seguinte contexto de uso:

> *"O documento é obrigatório para todos os brasileiros maiores de 18 anos e também para os que completam 18 anos até a data do primeiro turno das eleições. Além disso, o título de eleitor é necessário para tirar passaporte e carteira de identidade, se inscrever em concurso público, tomar posse em cargo público, obter empréstimos em instituições financeiras, participar de concorrência pública, renovar matrícula em estabelecimento de ensino oficial ou fiscalizado pelo poder público e muitas outras situações."*

**Principais contextos de uso identificados:**
- Exercício do voto obrigatório (maiores de 18 anos).
- Obtenção de passaporte e carteira de identidade.
- Inscrição e posse em concursos públicos.
- Renovação de matrícula em instituições de ensino.
- Operações financeiras (empréstimos, concorrências públicas).

**Fonte:** TSE. Título de eleitor: uma questão de cidadania. Disponível em: https://www.tse.jus.br/comunicacao/noticias/2023/Marco/titulo-de-eleitor-uma-questao-de-cidadania. Acesso em: 03 maio 2026.

##### Padrões de comportamento

Com base na mesma notícia, foram identificados os seguintes padrões de comportamento dos usuários em relação ao título de eleitor:

> *"O eleitor pode fazer a qualquer momento a emissão do seu título de eleitor em qualquer cartório eleitoral do país ou pela internet, no site do TSE, por meio do Autoatendimento Eleitoral – Título Net."*

> *"Eleitores que estão com o título cancelado ou com alguma pendência têm até esta quarta-feira (3) para regularizar sua situação."*

**Padrões de comportamento identificados:**
- **Comportamento sazonal/concentrado:** Os usuários tendem a buscar a regularização do título próximo aos prazos finais (ex: 3 de maio).
- **Canal de acesso:** Migração gradual do atendimento presencial para o online (Autoatendimento Eleitoral – Título Net).
- **Multifuncionalidade:** O título de eleitor é utilizado como documento de identificação em múltiplos contextos (concursos, bancos, escolas).

**Fonte:** TSE. Título de eleitor: uma questão de cidadania. Disponível em: https://www.tse.jus.br/comunicacao/noticias/2023/Marco/titulo-de-eleitor-uma-questao-de-cidadania. Acesso em: 03 maio 2026.

##### Requisitos e restrições institucionais

Com base na **Resolução TSE nº 23.759/2026** (que dispõe sobre a participação das eleitoras e dos eleitores no processo eleitoral), foram identificadas as seguintes restrições que impactam o uso do sistema:

> *"O alistamento eleitoral e a transferência de eleitor serão deferidos mediante a apresentação, pelo requerente, de documento oficial de identificação com foto, comprovante de residência e, quando for o caso, comprovante de quitação com o serviço militar."*

> *"O eleitor que tiver o título cancelado poderá requerer sua regularização perante o cartório eleitoral da sua zona ou por meio do Autoatendimento Eleitoral – Título Net, desde que quite com a Justiça Eleitoral."*

**Restrições identificadas:**
- Para realizar o alistamento eleitoral (primeiro título), é necessário apresentar: documento oficial com foto, comprovante de residência e comprovante de quitação militar (para homens).
- O título cancelado pode ser regularizado apenas se o eleitor estiver quite com a Justiça Eleitoral.
- O sistema exige que o usuário mantenha suas pendências regularizadas para acessar certos serviços (ex: emissão de certidões, justificativa).

**Fonte:** TRIBUNAL SUPERIOR ELEITORAL. Resolução nº 23.759, de 26 de fevereiro de 2026. Disponível em: https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-759-de-26-de-fevereiro-de-2026. Acesso em: 03 maio 2026.

#### Síntese

A análise documental dos materiais do Tribunal Superior Eleitoral (TSE) revelou um perfil de usuário **diversificado e numericamente expressivo** (aproximadamente 156 milhões de eleitores), com distribuição equilibrada entre gêneros (52% feminino, 48% masculino) e faixa etária majoritariamente adulta (21 a 60 anos). Em termos de escolaridade, o eleitorado apresenta **grande heterogeneidade**: enquanto 27% possuem Ensino Médio completo, outros 22% possuem apenas Ensino Fundamental incompleto, e cerca de 3,5% são analfabetos — o que implica a necessidade de comunicação acessível e linguagem simples no sistema.

O **contexto de uso** do sistema vai além do exercício do voto, abrangendo situações como obtenção de passaporte, inscrição em concursos públicos, renovação de matrículas escolares e operações financeiras. Isso significa que o sistema deve atender não apenas eleitores em período eleitoral, mas cidadãos em diversas situações cotidianas.

Os **padrões de comportamento** indicam que os usuários tendem a buscar serviços próximos aos prazos finais (comportamento concentrado), e que há uma migração crescente do atendimento presencial para o online. Por fim, as **restrições institucionais** (ex: necessidade de quitação militar para homens no primeiro título, regularização de pendências para acesso a certos serviços) impõem barreiras que o sistema precisa comunicar de forma clara e antecipada ao usuário para evitar frustração.

Essas informações são fundamentais para a definição do perfil do usuário, pois:
1. Indicam a **diversidade de escolaridade** do público, demandando linguagem acessível.
2. Revelam os **múltiplos contextos de uso** fora do período eleitoral.
3. Apontam **restrições e pré-requisitos** que devem ser comunicados ao usuário.
4. Evidenciam **padrões de comportamento** (ex: procrastinação) que impactam o design de prazos e notificações.

---

### 3. Resultados do Questionário

#### Descrição da Técnica

O questionário é uma técnica quantitativa de coleta de dados que permite alcançar um número maior de participantes de forma padronizada. Neste trabalho, foi elaborado um questionário com [*número*] questões, distribuídas entre perguntas fechadas (escala Likert, múltipla escolha) e abertas, aplicado de forma [*online / presencial*] por meio da plataforma [*ex: Google Forms, SurveyMonkey, etc.*].

O questionário ficou disponível para respostas entre os dias [*DD/MM/AAAA*] e [*DD/MM/AAAA*], e obteve um total de [*número*] respostas válidas.

#### Perfil dos Respondentes

| Atributo | Resultado |
|:--------:|:---------:|
| Faixa etária predominante | — |
| Nível de escolaridade predominante | — |
| Ocupação mais frequente | — |
| Frequência de uso do sistema | — |
| Nível de experiência tecnológica (auto declarado) | — |

<div style="text-align: left">
<p>Tabela 3: Perfil sintético dos respondentes do questionário (Fonte: autores, 2026).</p>
</div>

#### Principais Resultados

Os dados coletados pelo questionário revelaram os seguintes aspectos sobre o perfil dos usuários:

- **Distribuição por faixa etária:** [*Descreva os dados percentuais sobre a idade dos respondentes.*]
- **Nível de familiaridade tecnológica:** [*Apresente os dados sobre o letramento digital dos participantes.*]
- **Frequência e contexto de uso:** [*Descreva com qual frequência e em quais situações os usuários interagem com o sistema.*]
- **Aspectos mais valorizados no sistema:** [*Indique quais características os usuários consideram mais importantes — ex: velocidade, clareza das informações, facilidade de navegação.*]
- **Principais pontos de insatisfação:** [*Apresente os aspectos do sistema que geraram maior insatisfação entre os respondentes.*]

#### Síntese

[*Elabore um parágrafo sintetizando os principais resultados quantitativos do questionário e sua contribuição para o entendimento do perfil dos usuários.*]

---

### 4. Perfil Consolidado do Usuário

Com base nos resultados obtidos pelas três técnicas aplicadas, é possível traçar o seguinte perfil geral do usuário do sistema:

| Atributo | Descrição |
|:--------:|:----------|
| **Faixa etária** | — |
| **Nível de escolaridade** | — |
| **Ocupação** | — |
| **Experiência tecnológica** | — |
| **Frequência de uso** | — |
| **Principais objetivos de uso** | — |
| **Principais dificuldades** | — |
| **Dispositivos utilizados** | — |
| **Idioma** | — |

<div style="text-align: left">
<p>Tabela 4: Perfil consolidado do usuário (Fonte: autores, 2026).</p>
</div>

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Tiago | Criação da estrutura inicial do documento |
| Tiago | Preenchimento parcial dos dados obtidos pela entrevista |
| Samuel Felipe | Preenchimento parcial dos dados obitidos pela anásile de documentos |
| Bryan Smith | Preenchimento dos dados obtidos pela Análise de documentos do TSE |
| Nome do Integrante 3 | — |

<div style="text-align: left">
<p>Tabela 5: Tabela de contribuição (Fonte: autores, 2026).</p>
</div>

---

## Referência Bibliográfica

> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na estruturação do documento, formatação das tabelas e organização do conteúdo de acordo com o modelo estabelecido pelo grupo. Todo o conteúdo técnico — incluindo os dados coletados nas entrevistas, na análise de documentos e no questionário — e as decisões metodológicas foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.  
