# Guia de Estilo: Módulo Digital do Tribunal Superior Eleitoral (TSE)
## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Tiago | Desenvolvimento do artefato |


<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: autor, 2026).</p>
</div>

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 13/05/2026 | 1.0 | Criação do Guia de Estilo | Tiago | Lucas Fujimoto |

<div style="text-align: left">
<p>Tabela 2: Historico de Versão (Fonte: autor, 2026).</p>
</div>
---

## Introdução

Este documento consolida as diretrizes de identidade visual e padrões de interação aplicáveis ao módulo digital do Tribunal Superior Eleitoral (TSE). Seu propósito é assegurar que qualquer interface produzida — seja um portal, um sistema interno ou um aplicativo — reflita de forma fiel os valores institucionais da Justiça Eleitoral: transparência, credibilidade e acesso democrático.

A existência deste guia se justifica pela necessidade de padronização visual e comportamental entre diferentes equipes e sprints de desenvolvimento. Sem um documento de referência comum, decisões de design tendem a se fragmentar, gerando inconsistências que prejudicam a experiência do usuário e enfraquecem a percepção institucional da marca. Este artefato resolve esse problema ao centralizar as decisões de look-and-feel, vocabulário, tipografia, cores e padrões de interação em um único ponto de consulta.

---

## Desenvolvimento

### 1. Metodologia

A construção deste guia seguiu uma abordagem de design centrado no usuário, alinhada aos princípios de Engenharia de Usabilidade [[1]](#ref1). As diretrizes foram definidas a partir de três fontes complementares: análise do Manual de Identidade Visual da Justiça Eleitoral [[2]](#ref2), caracterização dos perfis de usuário identificados nas etapas anteriores do projeto e referências consolidadas de IHC [[1]](#ref1).

O processo envolveu, primeiramente, o levantamento dos elementos gráficos oficiais (tipografia, paleta cromática, versões da marca). Em seguida, esses elementos foram traduzidos em decisões de interface, considerando os contextos de uso — acesso público por cidadãos e eleitores, e acesso interno por servidores e operadores de sistema. Por fim, as diretrizes de interação foram formuladas para reduzir a carga cognitiva e prevenir erros, especialmente em fluxos críticos como o cadastro e a consulta de dados eleitorais.

### 2. Resultado da Análise

**Descrição do ambiente de trabalho do usuário:** O portal do TSE atende a dois perfis distintos. O cidadão comum acessa o sistema de forma pontual — geralmente em períodos eleitorais —, por dispositivos variados (desktop e mobile), com pouca familiaridade com o vocabulário técnico-jurídico. Já o servidor ou operador institucional utiliza o sistema de forma recorrente, em ambiente de escritório com desktop, e demanda fluxos de trabalho eficientes e previsíveis.

**Contexto de uso:** Para o cidadão, o acesso é muitas vezes motivado por urgência informacional (consultar local de votação, verificar situação eleitoral). Para o servidor, o contexto é de alta frequência e repetição de tarefas. Em ambos os casos, a interface deve priorizar clareza, prevenção de erros e tempos de resposta rápidos.

### 3. Elementos de Interface

#### 3.1 Tipografia Institucional

A fonte oficial para assinaturas de marca é a **Arial Bold**, utilizada nos logotipos de todas as instâncias da Justiça Eleitoral (JE, TSE e TREs) [[2]](#ref2). Para slogans e textos de apoio, utiliza-se a **Arial Regular**. Nas assinaturas de e-mail e cartões de visita institucionais, adota-se a **Swiss721 Cn Bt** [[2]](#ref2).

Na construção de interfaces digitais, a Arial deve ser priorizada por sua ampla disponibilidade nos sistemas operacionais e por sua legibilidade em telas, especialmente em tamanhos reduzidos. A hierarquia tipográfica deve seguir o padrão: títulos em Arial Bold, corpo de texto e rótulos em Arial Regular, e legendas ou metadados em tamanho menor com peso Regular.

#### 3.2 Paleta de Cores

A paleta cromática do portal do TSE é extraída diretamente do design system oficial, estruturada em variáveis CSS que garantem consistência em todas as interfaces digitais. As cores foram organizadas em quatro grupos funcionais: cores institucionais principais, cores de feedback, tons neutros e cores de redes sociais. Adicionalmente, o CMS Plone utiliza um conjunto específico de cores para indicar o estado de publicação de conteúdos na área administrativa.

##### Cores Principais / Institucionais

Utilizadas para fundos, botões principais e destaques que expressam a identidade visual da Justiça Eleitoral. Demonstrados na tabela 3. [[3]](#ref3).

| Cor | Variável CSS | Hexadecimal | RGB |
|:----|:------------|:------------|:----|
| **Azul Escuro** (Primary) | `--bs-azul` / `--bs-primary` | `#1b305a` | `27, 48, 90` |
| **Azul Claro** | `--bs-azul-claro` | `#4671c8` | `70, 113, 200` |
| **Amarelo** (Secondary/Warning) | `--bs-amarelo` / `--bs-secondary` | `#ffda59` | `255, 218, 89` |
| **Amarelo Escuro** | `--bs-amarelo-escuro` | `#f2bc00` | `242, 188, 0` |
| **Roxo** | `--bs-roxo` | `#8f89db` | `143, 137, 219` |

<div style="text-align: left">
<p>Tabela 3: Cores Principais / Institucionais (Fonte: autor, 2026).</p>
</div>

##### Cores de Feedback / Estado

Utilizadas para mensagens de sucesso, erro, avisos e informações do sistema. Demonstrados na tabela 4.[[3]](#ref3).

| Cor | Variável CSS | Hexadecimal | RGB |
|:----|:------------|:------------|:----|
| **Verde** (Success/Info) | `--bs-verde` / `--bs-success` | `#47c77d` | `71, 199, 125` |
| **Vermelho** (Danger) | `--bs-vermelho` / `--bs-danger` | `#cd201f` | `205, 32, 31` |

<div style="text-align: left">
<p>Tabela 4: Cores de Feedback / Estado (Fonte: autor, 2026).</p>
</div>

##### Tons Neutros e Escala de Cinza

Usados para textos, fundos de seções, bordas e sombras. Demonstrados na tabela 5[[3]](#ref3).

| Cor | Variável CSS | Hexadecimal | RGB |
|:----|:------------|:------------|:----|
| **Preto/Grafite** (Dark) | `--bs-dark` | `#2b2b2b` | `43, 43, 43` |
| **Cinza** | `--bs-cinza` | `#6b6b6b` | `107, 107, 107` |
| **Cinza Azulado** (Light/Body) | `--bs-cinza-azulado` / `--bs-light` | `#e6ecf0` | `230, 236, 240` |
| **Cinza Claro** | `--bs-cinza-claro` | `#ebebeb` | `235, 235, 235` |
| **Branco** | `--bs-branco` | `#ffffff` | `255, 255, 255` |

<div style="text-align: left">
<p>Tabela 5: Tons Neutros e Escala de Cinza (Fonte: autor, 2026).</p>
</div>

##### Redes Sociais e Mídias

Cores específicas aplicadas em botões e links de mídias externas do portal. Demonstrados na tabela 6 [[3]](#ref3).

| Cor / Rede | Variável CSS | Hexadecimal | RGB |
|:-----------|:------------|:------------|:----|
| **Facebook** | `--bs-facebook` | `#3b5999` | `59, 89, 153` |
| **Instagram** | `--bs-instagram` | `#e4405f` | `228, 64, 95` |
| **YouTube** | `--bs-youtube` | `#cd201f` | `205, 32, 31` |
| **Rádio** | `--bs-radio` | `#ff7541` | `255, 117, 65` |

<div style="text-align: left">
<p>Tabela 6: Cores de Redes Sociais e Mídias (Fonte: autor, 2026).</p>
</div>

##### Cores de Estado Interno (Plone CMS)

O portal utiliza o CMS Plone, que define cores específicas para indicar o estado de publicação de conteúdos na área administrativa. Demonstrados na tabela 7[[3]](#ref3).

| Estado | Variável CSS | Hexadecimal |
|:-------|:------------|:------------|
| **Rascunho** (Draft/Internal) | `--plone-state-draft` / `--plone-state-internal` | `#fab82a` |
| **Pendente** (Pending) | `--plone-state-pending` | `#ccd111` |
| **Privado** (Private) | `--plone-state-private` | `#c4183c` |
| **Publicação Interna** | `--plone-state-internally-published` | `#883dfa` |

<div style="text-align: left">
<p>Tabela 7: Cores de Estado Interno do Plone CMS (Fonte: autor, 2026).</p>
</div>

Todos os valores hexadecimais acima já estão no formato adequado para implementação direta em CSS e devem ser utilizados em conformidade com as diretrizes de contraste da WCAG 2.1, nível AA.

#### 3.3 Símbolo e Logomarca

A marca da Justiça Eleitoral é composta por três elementos simbólicos extraídos da Bandeira Nacional: o círculo azul-celeste com as 27 estrelas (representando o cidadão eleitor), a faixa verde recortada do retângulo (representando a urna eletrônica) e a figura amarela do losango (representando a integração entre cidadão e urna pela atuação da Justiça Eleitoral) [[2]](#ref2).

As regras de uso obrigatório incluem:

- **Redução mínima:** a versão horizontal da marca JE não deve ser reproduzida com menos de 3,5 cm de largura; a versão vertical (simplificada) não deve ter menos de 1,5 cm de altura [[2]](#ref2).
- **Área de não interferência:** o espaço ao redor da marca deve ser equivalente à metade da altura do símbolo em todos os lados, impedindo sobreposição com outros elementos [[2]](#ref2).
- **Usos vedados:** é proibido distorcer, rotacionar, aplicar transparência, usar como marca d'água, alterar as cores ou adicionar molduras ao logotipo [[2]](#ref2).
- **Fundos instáveis:** em fundos fotográficos ou com cores similares às da marca, deve-se usar a versão de exceção com borda branca [[2]](#ref2).

#### 3.4 Disposição Espacial (Layout)

O layout das telas deve seguir o princípio de hierarquia visual clara, com leitura natural no eixo top-down e left-right. Para o portal público, recomenda-se estrutura em colunas com navegação superior fixa. Para sistemas internos de uso intensivo, adota-se barra lateral fixa que comporta mais opções sem exigir rolagem.

Todas as telas devem respeitar margens generosas e espaços em branco suficientes para reduzir a carga visual, especialmente em telas de consulta com grande volume de informação tabular.

#### 3.5 Janelas Modais

Janelas modais devem ser utilizadas apenas para confirmações de ações críticas ou irreversíveis (ex.: cancelamento de inscrição, envio de requerimento). Elas devem sobrepor a tela principal com um overlay semitransparente escurecido e conter botão de saída visível ("X" ou "Fechar"), além de botões de ação claramente rotulados.

#### 3.6 Ícones e Símbolos Não Tipográficos

Os ícones devem seguir um sistema coerente de estilo: ações primárias e elementos ativos utilizam ícones preenchidos (solid); navegação inativa, itens secundários e estados desabilitados utilizam ícones vazados (outline). Isso garante distinção visual imediata entre o que é acionável e o que é informativo.

#### 3.7 Animações e Transições

O uso de animações deve ser estritamente funcional. São recomendadas apenas transições de estado (hover, focus, loading) com duração inferior a 300ms. Animações ornamentais ou de carregamento longas são vedadas, pois penalizam a experiência em conexões lentas e desviam a atenção do usuário do conteúdo principal.

---

### 4. Elementos da Interação

#### 4.1 Estilos de Interação

O modelo de interação predominante é baseado em formulários estruturados e menus de navegação hierárquicos. Formulários devem ser divididos em grupos lógicos com rótulos claros, seguindo o fluxo natural de leitura. Para o público cidadão, a linguagem dos rótulos deve ser simples e direta, evitando jargão jurídico. Para operadores institucionais, o vocabulário técnico-eleitoral pode ser utilizado conforme o contexto [[1]](#ref1).

#### 4.2 Aceleradores e Eficiência

Para usuários recorrentes (servidores e operadores), o sistema deve oferecer atalhos de teclado padronizados (ex.: `Enter` para confirmar, `Esc` para cancelar ou fechar modal) e autocompletar em campos de busca. Essas funcionalidades aumentam a eficiência sem prejudicar os usuários novatos, que continuam operando pelo fluxo visual padrão [[1]](#ref1).

---

### 5. Elementos de Ação

#### 5.1 Preenchimento de Campos

Campos obrigatórios devem ser sinalizados com asterisco (*) acompanhado de legenda explicativa. O sistema deve aplicar validação em tempo real com mensagens construtivas — não apenas indicar o erro, mas orientar a correção. Máscaras automáticas devem ser usadas em campos com formato fixo (CPF, título de eleitor, CEP) para reduzir erros de digitação [[1]](#ref1).

#### 5.2 Botões de Ação e Feedback

Botões de ação primária devem utilizar as cores institucionais (azul `#1b305a` ou verde `#47c77d`, conforme o contexto) com texto em branco `#ffffff`. Botões secundários devem ter aparência mais discreta (contorno, sem preenchimento sólido). Após toda ação do usuário, o sistema deve emitir feedback imediato e claro: confirmações em verde (`#47c77d`), alertas em amarelo (`#ffda59`), erros em vermelho (`#cd201f`). O feedback textual deve ser simples e objetivo (ex.: "Solicitação enviada com sucesso" ou "CPF não encontrado. Verifique e tente novamente.") [[1]](#ref1). 

#### 5.3 Projeto para Erros

Controles de ações destrutivas ou irreversíveis (ex.: "Excluir cadastro") devem estar fisicamente separados dos botões de salvamento e confirmação, preferencialmente em posição secundária na hierarquia visual. Sempre que possível, o sistema deve oferecer opção de desfazer a ação recente [[1]](#ref1).

#### 5.4 Seleção e Escolhas

Quando o usuário precisar escolher entre múltiplas opções não excludentes (ex.: documentos aceitos), utilizar checkboxes. Quando a escolha for única e mutuamente exclusiva (ex.: sexo, tipo de pleito), utilizar radio buttons. Dropdowns devem ser reservados para listas com mais de cinco opções [[1]](#ref1).

---

### 6. Vocabulário e Padrões

#### 6.1 Terminologia

A interface pública deve utilizar linguagem acessível ao cidadão comum. Termos como "título de eleitor", "seção eleitoral" e "zona eleitoral" são familiares e aceitáveis. Expressões excessivamente técnicas ou jurídicas devem ser acompanhadas de tooltip explicativo.

#### 6.2 Tom de Voz e Mensagens

O sistema deve manter um tom institucional, neutro e respeitoso em todas as mensagens. Diálogos de confirmação antes de ações críticas devem ser diretos e informativos (ex.: "Você está prestes a cancelar sua solicitação. Esta ação não pode ser desfeita. Deseja continuar?"). Mensagens de erro nunca devem culpar o usuário; devem explicar o que ocorreu e indicar o próximo passo.

---

## Referência Bibliográfica

<a id="ref1"></a>[1] BARBOSA, S. D. J.; SILVA, B. S. da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.

<a id="ref2"></a>[2] BRASIL. Tribunal Superior Eleitoral. **Manual de Identidade Visual da Justiça Eleitoral**. Brasília: TSE, 2023. Disponível em: <https://www.tse.jus.br/institucional/catalogo-de-publicacoes/lista-do-catalogo-de-publicacoes/publicacoes/m/manual-de-identidade-da-justica-eleitoral>. Acesso em: 13 mai. 2026.

<a id="ref3"></a>[3]  BRASIL. Site Tribunal Superior Eleitoral. Disponível em: <https://www.tse.jus.br/>.Acesso em: 13 mai. 2026. 

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na redação das seções, organizar o conteúdo extraído do Manual de Identidade Visual da Justiça Eleitoral e sugerir a estrutura das subseções de elementos de interface e interação. Todo o conteúdo técnico e as decisões de projeto foram definidos pelos integrantes da equipe; o Claude atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.
