# Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Tiago Geovane | Condução da sessão de avaliação, elaboração do relato e análise dos resultados |
| Maria Luana | Revisão do documento |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: autor, 2026).</p>
</div>

---

## Introdução

Este artefato tem como objetivo documentar o relato dos resultados obtidos através da avaliação do Protótipo de Alta Fidelidade desenvolvido pelo grupo, especificamente na parte do sistema "DivulgaCandContas" do site do TSE (Tribunal Superior Eleitoral). A avaliação visou analisar a usabilidade da funcionalidade de comparação de gastos entre candidaturas, identificar possíveis problemas que afetam a experiência do usuário e propor soluções de melhoria.

---

## Resultados da Avaliação

### 1. Objetivos e Escopo da Avaliação

O principal objetivo foi avaliar a usabilidade do site do TSE na parte do DivulgaCandContas, que consiste em buscar dados de contas eleitorais e gastos de candidaturas. A tarefa avaliada consistia em analisar a funcionalidade de comparar 2 candidatos. 

O escopo da tarefa envolvia o usuário realizar os seguintes passos:
1. Filtrar a busca da eleição de 2022 para 2026.
2. Achar o botão no grid de funcionalidades de comparar candidatos.
3. Adicionar 2 candidatos fictícios à tela.
4. Limpar a tela.
5. Voltar para a página inicial.

### 2. Método Adotado

O método escolhido para esta avaliação foi o **Teste de Usabilidade (Método de Observação)**.

A sessão foi conduzida utilizando a coleta de logs de cliques e medição de tempo, com o auxílio da técnica de *Think Aloud* (pensamento em voz alta), que consiste em o usuário verbalizar os seus pensamentos para que possamos analisar o que ele está pensando durante as interações. A análise também consistiu em comparar a performance real do usuário (cliques e tempo) com as métricas ideais previamente esperadas para a realização da tarefa.

### 3. Perfil dos Avaliadores e Participantes

- **Avaliadores:** Tiago Geovane
- **Participantes:** Foi selecionado para esta etapa 1 usuário (Henrique Mendes). De acordo com a literatura de IHC [1], com 5 participantes é possível descobrir uma grande porcentagem dos problemas de usabilidade, porém, devido a limitações de tempo dos avaliadores e dificuldades no recrutamento, optou-se por realizar o teste com apenas 1 participante nesta fase.

### 4. Medições de Performance e Satisfação (Dados Quantitativos)

A avaliação revelou diferenças significativas entre o caminho ideal projetado e a execução real do usuário. A Tabela 2 apresenta as medições de performance quantitativas obtidas através da análise dos logs.

| Métrica | Caminho Ideal | Desempenho do Usuário |
|:---|:---:|:---:|
| **Tempo de Conclusão da Tarefa** | 42,8 segundos | 103,4 segundos |
| **Número de Cliques** | 18 cliques | 32 cliques |

<div style="text-align: left">
<p>Tabela 2: Medições quantitativas de performance (Fonte: autor, 2026).</p>
</div>

Analisando detalhadamente as fases da execução da tarefa:
- **Fase de Exploração:** A maior parte do tempo excedente ocorreu nos primeiros 60 segundos, onde o usuário realizou diversos cliques em elementos não interativos da página (títulos, textos explicativos e cartões) até encontrar o botão correto para iniciar a ação.
- **Fase de Sucesso:** Após encontrar e clicar no botão "Adicionar" (`btn-add`), o usuário acompanhou quase que perfeitamente o fluxo ideal de seleção nos formulários.
- **Finalização:** No momento de limpar ou remover os candidatos selecionados, o usuário optou por remover individualmente cada um em vez de usar a função global de limpar tudo.

### 5. Problemas de Usabilidade Encontrados (Dados Qualitativos)

Com base na observação e na aplicação da técnica *Think Aloud*, foram identificados os seguintes problemas e dificuldades de usabilidade durante a interação.

#### Problema 1: Dificuldade em achar como trocar a eleição selecionada
- **Local na interface:** Barra de Topo.
- **Descrição e justificativa:** Durante o primeiro minuto, o usuário teve dificuldade em achar como selecionar as eleições de 2026. O padrão (default) estava configurado como eleições federais de 2022, acessível por um elemento que, ao ser clicado, abria uma lista com as opções. Contudo, este botão apresentava cor cinza e pouco destaque visual, deixando o usuário confuso e demandando a ajuda do avaliador para encontrá-lo.
- **Fatores de usabilidade prejudicados:** Eficiência e Aprendizado.
- **Recomendações e sugestões:** Adicionar uma nova instância de um elemento de seleção na seção HERO do site, deixando explícito como o usuário deve selecionar a eleição desejada.

#### Problema 2: Demora para achar a funcionalidade desejada
- **Local na interface:** Tela inicial (elementos de texto e cartões informativos).
- **Descrição e justificativa:** Durante o primeiro minuto, o usuário deu 16 cliques em elementos estáticos (títulos, textos, cartões `region-card`) antes de encontrar e clicar no botão de iniciar a tarefa (`btn-add`). A provável causa é que existiam muitas opções no grid, deixando o usuário confuso ao analisar a quantidade de informações até encontrar a que ele queria.
- **Fatores de usabilidade prejudicados:** Eficiência e Aprendizado.
- **Recomendações e sugestões:** Separar as opções do grid por tema para facilitar a navegação.

#### Problema 3: Uso ineficiente da funcionalidade de exclusão
- **Local na interface:** Tela de resultados / Lista de candidatos selecionados.
- **Descrição e justificativa:** Para limpar a tela, o usuário clicou individualmente na lixeira de cada item selecionado (utilizou o botão `btn-remove-candidate` duas vezes), ignorando completamente a existência de um atalho para limpar tudo de uma vez (`btn-clear`).
- **Fatores de usabilidade prejudicados:** Eficiência.
- **Recomendações e sugestões:** Reposicionar ou alterar o estilo do botão "Limpar" para que o usuário o perceba com mais facilidade antes de iniciar a remoção individual de cada cartão.

---

# Video
O video da avaliação com o usuario pode ser acessado no seguinte link: https://youtu.be/oiyiBPWnm6o

---
## Bibliografia

> [1] BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 16/06/2026 | `1.0` | Criação do documento de relato | Tiago Geovane | Maria Luana |

---

## Agradecimentos

Agradecemos à IA Generativa **Gemini** (Google) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para transcrever o relatório baseado no arquivo de planejamento, organizar estruturalmente as informações e formatar as tabelas seguindo o modelo de artefato previamente definido. Todo o conteúdo técnico e as decisões metodológicas e de observação foram definidos pelos integrantes da equipe; a ferramenta atuou como assistente de formatação e redação.
