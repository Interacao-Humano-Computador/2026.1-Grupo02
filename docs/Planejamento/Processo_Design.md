# Processo de Design

## Histórico de Versão

|    Data    | Data Prevista de Revisão | Versão |          Descrição           |                   Autor                    |                  Revisor                   |
| :--------: | :----------------------: | :----: | :--------------------------: | :----------------------------------------: | :----------------------------------------: |
| 10/04/2026 |        10/04/2026        |  1.0   |     Criação do Documento     | Guilherme| Samuel |

---

## Introdução

Antes de tratar dos processos de design em si, é importante compreender o que o design representa dentro da área de Interação Humano-Computador. Segundo Barbosa e Silva (2010), o design pode ser entendido como uma atividade composta por três etapas essenciais que se relacionam: primeiro, o designer investiga e compreende a situação atual, identificando onde existem problemas ou oportunidades de melhoria; a partir dessa compreensão, ele concebe e modela uma forma de intervir nessa situação; e, por fim, avalia se a intervenção proposta ou já implantada é adequada e satisfatória. Os processos de design em IHC se organizam de forma iterativa, de modo que o designer possa retornar a etapas anteriores sempre que surgir a necessidade de ampliar sua compreensão do problema ou reformular a intervenção que está sendo construída. 

Conforme levantado por Barbosa e Silva (2010), esses processos focam prioritariamente nas pessoas, e não na tecnologia pela tecnologia. O objetivo central é criar soluções que atendam às necessidades reais dos usuários e de seu contexto. Para que isso aconteça de forma consistente, os autores descrevem três princípios que orientam os processos centrados no usuário, originalmente formulados por Gould e Lewis (1985):

O primeiro princípio é o **foco no usuário**: o designer deve conhecer os usuários, compreendendo seu perfil, rotina, capacidades físicas e cognitivas, além de seus objetivos. Ignorar esses fatores torna as decisões de design vulneráveis a suposições equivocadas que podem comprometer a eficácia do sistema.

O segundo princípio diz respeito às **métricas observáveis**: para garantir decisões fundamentadas, o design deve incluir testes com usuários reais em versões preliminares do sistema. Registrar e analisar o desempenho e as reações dessas pessoas fornece a base empírica necessária para validar as escolhas do projeto.

O terceiro princípio é o **design iterativo**: sempre que testes com usuários revelarem falhas, estas devem ser corrigidas antes do progresso da equipe. O design, a avaliação e a revisão compõem um ciclo iterativo que se repete até que todas as necessidades do público sejam plenamente atendidas.

---

## Modelos de Ciclos de Vida

### Ciclo de Vida Simples

O ciclo de vida simples foi organizado por Preece, Sharp e Rogers e corresponde ao modelo mais simpless entre as propostas apresentadas, assim por não detalhar profundamente cada etapa é recomendado ter uma base sólida de conhecimento relacionado. Nele, a etapa de síntese é subdividida em duas frentes: a elaboração do design ou redesign conceitual da interação, seguida pela construção de uma versão interativa que permita avaliar a proposta (Barbosa; Silva, 2010).

### Ciclo de Vida em Estrela

Conforme Barbosa e Silva (2010), o ciclo de vida em estrela foi criado por Hix e Hartson no início dos anos 1990 e foi um dos primeiros modelos voltados especificamente para IHC a ganhar ampla difusão. Esse processo é formado por seis atividades: análise de tarefas, usuários e funções; especificação de requisitos; projeto conceitual e especificação do design; prototipação; implementação; e avaliação.

O diferencial desse modelo é a centralização da avaliação, que se conecta a todas as outras etapas do processo. Na prática, o designer deve obrigatoriamente avaliar os resultados de qualquer atividade antes de avançar. Além disso, não existe uma ordem fixa, garantindo a autonomia para decidir por onde começar, adaptando o fluxo conforme as necessidades do projeto (Barbosa; Silva, 2010).

### Engenharia de Usabilidade de Nielsen

Jakob Nielsen formulou a engenharia de usabilidade como um conjunto de dez atividades que compõe todo o ciclo de vida de um produto. Segundo Barbosa e Silva (2010), Nielsen enfatiza que grande parte dessas atividades ocorre nas fases iniciais do projeto, antes mesmo que a interface comece a ser desenhada. As atividades que compõem essa proposta são:

1. Conhecer o usuário
2. Realizar uma análise competitiva
3. Definir as metas de usabilidade
4. Fazer designs paralelos
5. Adotar o design participativo
6. Fazer o design coordenado da interface como um todo
7. Aplicar diretrizes e análise heurística
8. Fazer protótipos
9. Realizar testes empíricos
10. Praticar design iterativo

### Engenharia de Usabilidade de Mayhew

Deborah Mayhew propôs, em 1999, um ciclo de vida para a engenharia de usabilidade que se destaca por sua abrangência. A proposta reúne, sob uma perspectiva holística, diversas atividades provenientes da área de IHC, organizando-as de modo a guiar o trabalho do designer em direção a soluções interativas de qualidade, assim o modelo é estruturado em três grandes fases (Barbosa; Silva, 2010).

#### Fase 1: Análise de Requisitos

A fase inicial foca em estabelecer as metas de usabilidade baseadas em quatro fontes fundamentais. Essas metas são documentadas em guias de estilo que servem como referência contínua para o projeto.
<ul>
<li>Perfil dos Usuários: Mapeamento de características como idade, experiência técnica, motivações e limitações. 
<li>Análise de Tarefas: Estudo detalhado das atividades, incluindo objetivos, tempo necessário, dependências e esforço mental. 
<li>Plataforma e Restrições: Definição das capacidades e limites técnicos do hardware, software e rede. 
<li>Princípios de IHC: Aplicação de diretrizes ergonômicas e boas práticas de interface específicas para o contexto. 
</ul> 

#### Fase 2: Design, Avaliação e Desenvolvimento

A segunda fase tem como objetivo construir uma solução que atenda às metas estabelecidas na fase anterior. Mayhew organiza essa construção em três níveis progressivos de detalhamento, cada qual acompanhado de avaliação com usuários.

No **primeiro nível**, o foco reside na reengenharia do trabalho e na concepção da solução. O designer repensa como as tarefas devem ser executadas para atingir os objetivos dos usuários, desenvolve diferentes alternativas para o modelo conceitual e as materializa em protótipos de baixa fidelidade, que são submetidos a avaliação imediata.

No **segundo nível**, o foco é a padronização, designer estabelece padrões de design de IHC específicos para a solução, constrói protótipos de média fidelidade baseados nessas normas e realiza novas avaliações para garantir a consistência e a funcionalidade.

No **terceiro nível**, o designer executa o projeto detalhado da interface em alta fidelidade, preparando-a para a implementação final. Durante o desenvolvimento do sistema, a interface deve ser continuamente avaliada com a participação ativa dos usuários para garantir que o produto final seja funcional e intuitivo.

#### Fase 3: Instalação

A terceira fase ocorre depois que o sistema já está em operação e os usuários o utilizaram por algum período. O objetivo é coletar as opiniões e percepções que emergem do uso cotidiano, informações que dificilmente estariam disponíveis durante as fases de projeto. Esse retorno pode servir para duas finalidades: orientar melhorias em versões futuras do sistema ou indicar a necessidade de desenvolver novos produtos que atendam a demandas ainda não contempladas.

---

## Justificativa da Escolha do Ciclo de Mayhew

Após examinar os modelos apresentados, o ciclo de vida de Mayhew foi o escolhido para orientar este projeto. Essa decisão levou em consideração os seguintes aspectos.

Em primeiro lugar, o grau de detalhamento que o modelo oferece é consideravelmente maior. Enquanto o ciclo de vida simples e o ciclo em estrela deixam à cargo do designer a maior parte das decisões sobre como conduzir cada etapa, o ciclo de Mayhew especifica o que fazer, quando fazer e o que se espera como resultado de cada atividade. 

Em segundo lugar, o modelo especialmente adequado para equipes que ainda estão desenvolvendo familiaridade com os processos de IHC. O roteiro bem estruturado funciona como um guia concreto, diminuindo a dependência de experiência prévia acumulada para que o processo seja conduzido de forma consistente.

---

## Referência Bibliográfica

BARBOSA, Simone; DINIZ, Bruno. Interação Humano-Computador. Editora Elsevier, Rio de Janeiro, 2010.
