# Características da Plataforma — Portal TSE/TRE
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Guilherme| Criação do artefato |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Introdução

Este artefato tem como objetivo descrever as características da plataforma do **Portal do Tribunal Superior Eleitoral (TSE) e dos Tribunais Regionais Eleitorais (TRE)**, com base na primeira fase do Ciclo de Vida de Mayhew: análise de requisitos. Compreender as capacidades e restrições técnicas do portal é essencial para embasar as demais etapas do processo de design centrado no usuário. Este documento registra as funcionalidades disponíveis, os requisitos de sistema, as tecnologias utilizadas, e apresenta um levantamento crítico das características positivas e negativas identificadas na interface do portal.

---

## Descrição da Plataforma

O Portal do Tribunal Superior Eleitoral (TSE) é o sistema digital oficial da Justiça Eleitoral brasileira, disponível em [https://www.tse.jus.br](https://www.tse.jus.br). Sua finalidade é prover ao cidadão acesso a serviços eleitorais, informações institucionais e dados de transparência pública, abrangendo tanto o público leigo quanto servidores, pesquisadores e partidos políticos.

O portal concentra múltiplos subportais e sistemas integrados, entre os quais se destacam:

- **Autoatendimento ao Eleitor:** serviços como transferência de título, atualização de dados, justificativa de ausência e validação de documentos eleitorais.
- **DivulgaCandContas:** sistema de transparência para consulta de candidaturas, propostas, históricos e prestações de contas de campanhas eleitorais.
- **Balcão Virtual:** plataforma de atendimento remoto em tempo real via videoconferência com servidores da Justiça Eleitoral.

---

## Requisitos de Sistema

O portal pode ser acessado por qualquer dispositivo com conexão à internet e navegador. Sendo principalmente acessado por computadores desktop ou laptop. Seu design é responsivo, adaptando-se a diferentes tamanhos de tela, incluindo dispositivos móveis. Os navegadores compatíveis com o funcionamento adequado incluem:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## Funcionalidades da Plataforma

A seguir, são listadas as principais funcionalidades disponíveis no portal TSE/TRE:

**Autoatendimento ao Eleitor:**
- Transferir título eleitoral (mudança de domicílio eleitoral)
- Atualizar dados pessoais e cadastrais
- Justificar ausência às urnas
- Validar autenticidade de documentos e certidões emitidas pela Justiça Eleitoral

**DivulgaCandContas:**
- Consultar propostas e históricos de candidatos em todo o país
- Validar documentos, atas e registros eleitorais
- Visualizar e comparar receitas e despesas de campanhas eleitorais

**Balcão Virtual:**
- Agendar atendimento por videoconferência com servidores da Justiça Eleitoral

**Funcionalidades Gerais:**
- Consultar situação eleitoral
- Emitir certidão de quitação eleitoral
- Acessar notícias institucionais e calendário eleitoral
- Navegar pelo mapa do site e utilizar atalhos de navegação

---

## Tecnologias Utilizadas

Por meio da análise do código-fonte da página inicial do portal (opção "Visualizar código-fonte" do navegador), foi possível identificar as seguintes tecnologias e frameworks empregados na construção do portal:

**Linguagens base:**
- **HTML**: estruturação do conteúdo das páginas
- **CSS**: estilização e layout da interface
- **JavaScript**: comportamentos dinâmicos e interações no lado do cliente

**CMS e framework:**
- **Plone**: sistema de gerenciamento de conteúdo (CMS) utilizado como base do portal, identificado pela meta tag `generator: Plone - https://plone.org/` e pela estrutura de URLs dos recursos estáticos (`++theme++`, `++plone++`, `++webresource++`)

**Bibliotecas e frameworks front-end:**
- **Bootstrap**: framework CSS responsivo, identificado pelo uso de classes como `navbar`, `collapse`, `dropdown-menu`, `btn`, `modal`, `swiper-slide`, além dos atributos `data-bs-toggle` e `data-bs-target`
- **Swiper.js**: biblioteca de carrossel/slider, utilizada nas seções de destaques e banners da página inicial (classes `swiper`, `swiper-wrapper`, `swiper-slide`, `swiper-pagination`)
- **Lucide Icons**: biblioteca de ícones vetoriais, identificada pelo atributo `data-lucide` nos elementos de ícone do menu e rodapé

---

## Bibliografia

BARBOSA, S. D. J.; SILVA, B. S. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.

TRIBUNAL SUPERIOR ELEITORAL. **Portal do TSE**. Disponível em: [https://www.tse.jus.br](https://www.tse.jus.br). Acesso em: maio 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
|11/05/2026 | 1.0 | Criação do documento | Guilherme | Maria Luana |
| 23/05/2026 | 1.1 | Padronização do artefato | Tiago | - |

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na redação, análise das tecnologias, organização da estrutura e formatação do conteúdo conforme o modelo padrão do grupo. Todo o conteúdo técnico e as decisões de projeto foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.
