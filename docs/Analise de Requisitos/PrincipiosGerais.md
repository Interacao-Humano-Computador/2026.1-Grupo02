# Princípios Gerais do Projeto — Portal TSE/TRE
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Guilherme | Desenvolvimento do artefato |
<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Introdução

Este artefato apresenta a análise do Portal do Tribunal Superior Eleitoral (TSE) / Tribunal Regional Eleitoral (TRE) à luz dos **Princípios Gerais do Projeto** em Interação Humano-Computador (IHC). Esses princípios orientam o design de interfaces centradas no usuário, estabelecendo diretrizes para garantir que sistemas interativos sejam eficazes, eficientes e satisfatórios.

O presente documento é complementar à análise heurística realizada pelo grupo durante a fase planejamento com base nas 10 Heurísticas de Nielsen, aprofundando a avaliação da plataforma sob uma perspectiva de projeto. Enquanto as heurísticas identificam problemas pontuais de usabilidade, os Princípios Gerais do Projeto orientam decisões do grupo durante o projeto .

---

## Análise dos Princípios Gerais do Projeto

### P1 — Correspondência com as Expectativas dos Usuários

Este princípio determina que o sistema deve utilizar linguagem, estrutura e fluxos coerentes com o modelo mental dos usuários, aproximando a interface de suas experiências cotidianas.

**Observação no Portal TSE/TRE:** Este princípio é **violado**. O portal emprega extensamente terminologia jurídico-eleitoral especializada como "domicílio eleitoral", "certidão de quitação eleitoral" e "biometria" sem oferecer definições ou explicações acessíveis. Usuários leigos, que representam a maioria dos eleitores brasileiros, precisam acessar o sistema de forma esporádica para realizar ações obrigatórias, sem familiaridade prévia com o vocabulário técnico empregado.

**Funcionalidades afetadas:** Autoatendimento ao Eleitor / Geral.

**Status:** Violado.

---

### P2 — Simplicidade nas Estruturas das Tarefas

Este princípio preconiza que as tarefas devem ser redesenhadas para reduzir a quantidade e a complexidade das ações exigidas do usuário, eliminando etapas desnecessárias e simplificando os fluxos de interação.

**Observação no Portal TSE/TRE:** Este princípio é **parcialmente atendido**. Por um lado, os fluxos de Autoatendimento apresentam indicadores de progresso que organizam tarefas complexas como a transferência de domicílio eleitoral em etapas sequenciais e compreensíveis. Por outro lado, a densidade informacional excessiva na página inicial com banners, notícias e alertas sobrepostos impõe ao usuário o esforço de filtrar conteúdo irrelevante antes de localizar as funcionalidades desejadas, o que contraria a simplicidade estrutural esperada.

**Funcionalidades afetadas:** Autoatendimento ao Eleitor / Página inicial.

**Status:** Parcialmente atendido.

---

### P3 — Equilíbrio entre Controle e Liberdade do Usuário

Esse aspecto destaca que o sistema deve oferecer ao usuário controle sobre suas ações, permitindo desfazer operações, cancelar processos e retomar tarefas sem penalizações. Ao mesmo tempo, deve evitar que a liberdade excessiva leve a erros graves.

**Observação no Portal TSE/TRE:** Este princípio é **violado**. No módulo DivulgaCandContas, não há opção clara para limpar filtros de busca aplicados, obrigando o usuário a reiniciar o fluxo completamente para alterar os parâmetros de consulta. Essa limitação retira do usuário o controle sobre a navegação e impõe um custo desnecessário de interação. A ausência de mecanismos de "desfazer" em operações sensíveis agrava a percepção de insegurança no uso.

**Funcionalidades afetadas:** DivulgaCandContas.

**Status:** Violado.

---

### P4 — Consistência e Padronização

Este princípio estabelece que elementos de interface como nomenclaturas, ícones, padrões visuais e estruturas de menu — devem ser coerentes em toda a extensão do sistema, reduzindo a carga cognitiva imposta ao usuário.

**Observação no Portal TSE/TRE:** Este princípio é **violado**. O portal TSE/TRE é composto por múltiplos subportais: Autoatendimento, DivulgaCandContas e Balcão Virtual, que apresentam inconsistências visuais e estruturais entre si, incluindo esquemas de cores distintos, menus com nomenclaturas divergentes e arquiteturas de navegação diferentes. Essa fragmentação força o usuário a reaprender a interface a cada transição entre módulos, aumentando significativamente a carga cognitiva e comprometendo a eficiência do uso.

**Funcionalidades afetadas:** Todos os módulos.

**Status:** Violado.

---

### P5 — Antecipação das Necessidades do Usuário

Sistemas bem projetados antecipam as necessidades dos usuários, oferecendo informações, sugestões e validações antes que os problemas se manifestem, minimizando erros e interrupções no fluxo de uso.

**Observação no Portal TSE/TRE:** Este princípio é **atendido**, constituindo um dos pontos positivos da plataforma. Os formulários do Autoatendimento realizam validação em tempo real de campos críticos como CEP, data de nascimento e número do título eleitoral, sinalizando imediatamente entradas inválidas antes do envio. Essa prática antecipa erros evitáveis e orienta o usuário durante o preenchimento, reduzindo retrabalho e frustração.

**Funcionalidades afetadas:** Autoatendimento ao Eleitor.

**Status:** Atendido.

---

### P6 — Visibilidade e Reconhecimento

Este princípio determina que o sistema deve tornar visíveis as opções e ações disponíveis, permitindo que o usuário reconheça as funcionalidades sem precisar memorizá-las. O estado atual do sistema também deve ser claramente comunicado.

**Observação no Portal TSE/TRE:** Este princípio é **atendido**. O portal utiliza ícones acompanhados de rótulos textuais descritivos, favorecendo o reconhecimento imediato das funcionalidades em detrimento da memorização. Adicionalmente, os fluxos de Autoatendimento apresentam indicadores visuais de progresso que mantêm o usuário informado sobre a etapa atual e as etapas restantes, atendendo simultaneamente ao princípio de visibilidade do estado do sistema.

**Funcionalidades afetadas:** Autoatendimento ao Eleitor / Geral.

**Status:** Atendido.

---

### P7 — Conteúdo Relevante e Expressão Adequada

Este principio orienta que a interface deve apresentar apenas as informações necessárias para a tarefa em execução, com linguagem clara, objetiva e adaptada ao perfil do usuário. Informações irrelevantes ou redundantes comprometem a eficiência e a satisfação.

**Observação no Portal TSE/TRE:** Este princípio é **violado** em dois aspectos complementares. Primeiro, a página inicial apresenta excesso de elementos de conteúdo (banners, alertas e notícias institucionais) que competem visualmente com os serviços principais, dificultando a localização das funcionalidades de Autoatendimento. Segundo, conforme apontado no P1, a linguagem técnico-jurídica utilizada não é adequada ao perfil majoritário dos usuários, que são cidadãos leigos em matéria eleitoral.

**Funcionalidades afetadas:** Página inicial / Autoatendimento / Geral.

**Status:** Violado.

---

### P8 — Projeto para Erros
 
Este princípio estabelece que o sistema deve ser projetado para minimizar a ocorrência de erros e, quando eles ocorrem, deve auxiliar o usuário a identificar a causa, compreender o problema e se recuperar de forma eficaz, sem perda de dados ou progresso.
 
**Observação no Portal TSE/TRE:** Este princípio é **violado**. Embora o sistema demonstre boas práticas de prevenção de erros (P5), o suporte à recuperação é insuficiente: a ausência de ajuda contextual integrada aos fluxos deixa o usuário sem suporte adequado no momento em que mais necessita de orientação.
 
**Funcionalidades afetadas:** Autoatendimento ao Eleitor / Balcão Virtual.
 
**Status:** Violado.

---

## Quadro-Resumo dos Princípios Gerais do Projeto

| Princípio | Observação no Portal TSE/TRE | Funcionalidade Afetada | Status |
|:----------|:-----------------------------|:----------------------:|:------:|
| P1 — Correspondência com as expectativas dos usuários | Terminologia técnico-jurídica sem adaptação ao público leigo. | Autoatendimento / Geral | Violado |
| P2 — Simplicidade nas estruturas das tarefas | Fluxos com indicadores de progresso, mas página inicial sobrecarregada. | Autoatendimento / Página inicial | Parcial |
| P3 — Equilíbrio entre controle e liberdade do usuário | Ausência de opção para desfazer filtros no DivulgaCandContas. | DivulgaCandContas | Violado |
| P4 — Consistência e padronização | Inconsistência visual e estrutural entre subportais. | Todos os módulos | Violado |
| P5 — Antecipação das necessidades do usuário | Validação em tempo real de campos críticos nos formulários. | Autoatendimento | Atendido |
| P6 — Visibilidade e reconhecimento | Ícones com rótulos e indicadores de progresso nos fluxos. | Autoatendimento / Geral | Atendido |
| P7 — Conteúdo relevante e expressão adequada | Excesso de elementos na página inicial e linguagem inacessível. | Página inicial / Geral | Violado |
| P8 — Projeto para erros | Ausência de ajuda contextual. | Autoatendimento / Balcão Virtual | Violado |

<div style="text-align: left">
<p>Tabela 2: Quadro-resumo dos Princípios Gerais do Projeto aplicados ao Portal TSE/TRE (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Bibliografia

> BARBOSA, Simone; SILVA, Bruno. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010. 

>TRIBUNAL SUPERIOR ELEITORAL. *Portal do TSE.* Disponível em: https://www.tse.jus.br. Acesso em: mai. 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 12/05/2026 | 1.0 | Criação do documento | Guilherme | Maria Luana |
| 23/05/2026 | 1.1 | Padronização do artefato | Tiago | - |

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para correlacionar o conteúdo da análise heurística prévia do grupo com os Princípios Gerais do Projeto, auxiliar na estruturação das seções e na padronização do documento conforme o modelo do grupo. Todo o conteúdo técnico e as decisões de análise foram definidos pelos integrantes da equipe; o Claude atuou como assistente de organização e redação, sem interferir nas escolhas metodológicas do grupo.
