# Protótipo de Alta Fidelidade — Alterar Local de Votação

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Guilherme | Criação do protótipo de alta fidelidade |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Introdução

Este artefato apresenta o **protótipo de alta fidelidade** da funcionalidade de **Alterar Local de
Votação** do portal do Tribunal Superior Eleitoral (TSE), desenvolvido no âmbito da disciplina de
Interação Humano-Computador da Universidade de Brasília.

O protótipo simula o fluxo completo que o eleitor percorre ao solicitar a alteração de seu local
de votação pelo portal digital, partindo da análise de tarefas (HTA e CMN-GOMS), modificações do reprojeto e das telas de referência do sistema real do TSE.

Ele foi implementado em HTML, CSS e JavaScript, servido localmente por meio do servidor FastAPI
compartilhado pelo grupo.

---

## Objetivo

O protótipo de alta fidelidade tem por objetivo:

- Representar com maior fidelidade visual e interativa o fluxo real da funcionalidade de
  alteração de local de votação;
- Incorporar as melhorias propostas no reprojeto da interface (descritas abaixo);
- Permitir testes de usabilidade próximos da experiência real do usuário;
- Identificar problemas de navegação, clareza do fluxo e satisfação do usuário antes de uma
  implementação definitiva.

---

## Mudanças do Reprojeto em Relação ao Fluxo Original

A análise de tarefas original (HTA/CMN-GOMS) descreve o fluxo básico do sistema atual do TSE. No
reprojeto implementado neste protótipo, três melhorias foram incorporadas:

| # | Mudança | Onde foi aplicada |
|:-:|:--------|:-------------------|
| 1 | **Captura de foto pelo próprio sistema**: além do botão "Selecionar arquivo", os documentos que dependem de foto (selfie com documento e documento de identificação) agora possuem um botão **"Tirar foto agora"**, que abre a câmera do dispositivo, permite capturar e confirmar a imagem diretamente na tela. | Etapa 1 — Documentos |
| 2 | **Listagem de locais por distância**: a tabela de locais de votação passou a exibir uma coluna **"Distância"**, com os locais já ordenados do mais próximo para o mais distante em relação ao endereço atual do eleitor, eliminando a necessidade de paginação manual para encontrar a seção mais próxima. | Etapa 2 — Local de votação |
| 3 | **Remoção de locais indisponíveis**: locais marcados como "(BLOQUEADO — TEMPORARIAMENTE)" no sistema atual deixam de ser exibidos na lista, mostrando apenas seções com vagas disponíveis. | Etapa 2 — Local de votação |
| 4 | **Popup de confirmação final**: antes do envio efetivo da solicitação, é exibido um modal de confirmação com o resumo do novo local escolhido (nome, endereço, bairro e distância), reforçando que a efetivação depende de disponibilidade de vaga. | Etapa 4 — Contatos → Confirmação |

<div style="text-align: left">
<p>Tabela 2: Mudanças do reprojeto (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Funcionalidade: Alterar Local de Votação

O fluxo modelado no protótipo contempla as seguintes etapas:

| Etapa | Descrição |
|:-----:|:----------|
| 0 | Acesso ao Portal do Eleitor (TSE) → menu "Eleitor" → "Atualizar dados pessoais, endereço ou local de votação" |
| 0.1 | Seleção do tipo de atualização desejada ("Local de votação") no diálogo "O que você deseja atualizar?" |
| 1 | Autenticação do eleitor (identificação, data de nascimento e filiação, ou e-Título) |
| 2 | Anexo dos documentos obrigatórios e opcionais — **com opção de captura por câmera** |
| 3 | Seleção do novo local de votação — **lista ordenada por distância, sem locais bloqueados** |
| 4 | Preenchimento dos dados complementares |
| 5 | Preenchimento dos dados de contato |
| 6 | **Confirmação final em popup** e envio da solicitação, com geração de número de protocolo |

<div style="text-align: left">
<p>Tabela 3: Etapas do fluxo no protótipo (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Cenário de Teste de Usabilidade

O protótipo foi construído para suportar o seguinte cenário de teste, a ser aplicado com um(a)
entrevistado(a) a definir:

>Seu local de votação atual ficou bem longe da sua nova casa, e você gostaria de trocá-lo pelo local mais próximo possível do seu endereço, para não precisar se deslocar tanto no dia da eleição.


---

## Como Executar o Protótipo

O protótipo é executado localmente junto ao servidor FastAPI do grupo. Siga as instruções no
[README do FastAPI](../FastAPI/README.md) para configurar o ambiente.

Após iniciar o servidor, acesse:

- **Protótipo (início direto):** [http://127.0.0.1:8000/alterar-local](http://127.0.0.1:8000/alterar-local)

---

## Bibliografia

> <a id="REF1" href="#anchor_1">1.</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene
> S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e
> Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

> <a id="REF2" href="#anchor_2">2.</a> TRIBUNAL SUPERIOR ELEITORAL. **Atualizar dados pessoais,
> endereço ou local de votação**. Disponível em:
> [https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral]. Acesso em: 14 jun. 2026.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 14/06/2026 | 1.0 | Criação do documento e do protótipo de alta fidelidade, com captura de foto via câmera, listagem por distância e popup de confirmação final | Guilherme | Maria Luana |

<div style="text-align: left">
<p>Tabela 4: Histórico de Versão (Fonte: CARVALHO, Guilherme, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento e do
protótipo. A ferramenta foi utilizada para auxiliar na estruturação do documento, na codificação do
HTML/CSS/JS e na formatação das tabelas e seções, seguindo o modelo de artefato do Grupo 02. Todo o
conteúdo técnico — incluindo a definição do fluxo de tarefas, as decisões de reprojeto (captura por
câmera, ordenação por distância, remoção de locais indisponíveis e popup de confirmação) — foi
realizado pelos integrantes da equipe; o Claude atuou como assistente de formatação e codificação,
sem interferir nas escolhas metodológicas do grupo.
