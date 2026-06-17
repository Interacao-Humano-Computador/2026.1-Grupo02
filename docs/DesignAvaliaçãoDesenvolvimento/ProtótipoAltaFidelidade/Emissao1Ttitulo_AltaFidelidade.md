# Protótipo de Alta Fidelidade — Emissão de 1° Titulo de Eleitor

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Maria Luana | Criação do protótipo de alta fidelidade para a funcionalidade Emissão de 1° Título de Eleitor |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: SOARES LOPES, Maria Luana, 2026).</p>
</div>

---

## Introdução

Este artefato apresenta o **protótipo de alta fidelidade** da funcionalidade de **Emissão de 1° Título de Eleitor** do portal do Tribunal Superior Eleitoral (TSE), desenvolvido no âmbito da disciplina de Interação Humano-Computador da Universidade de Brasília.

O protótipo simula o fluxo completo que um novo eleitor percorre ao acessar o site pela primeira vez para tirar seu primeiro titulo de eleitor, desde onde encontrar o serviço no site, até a emissão do número do protocolo.

---

## Objetivo

O protótipo de alta fidelidade tem por objetivo:

- Representar com maior fidelidade visual e interativa o fluxo real da funcionalidade;
- Permitir testes de usabilidade mais próximos da experiência real do usuário;
- Identificar problemas de navegação, clareza do fluxo e satisfação do usuário antes de uma implementação definitiva.

---

## Funcionalidade: Emissão de 1° Título de Eleitor

O fluxo modelado no protótipo contempla as seguintes etapas descritas na tabela 2 abaixo:

| Etapa | Descrição |
|:-----:|:----------|
| 1 | Encontrar o serviço de autoatendimento na tela inicial |
| 2 | Encontrar o serviço de emissão de 1° Título de Eleitor na tela de autoatendimento|
| 3 | Anexação dos documentos necessários |
| 4 | Confimação sobre a idade para determinar a necessidade de pagar multa |
| 5 | Preechimento dos dados necessários (nome,data de nascimento, endereço, etc) |
| 6 | Escolha do Local de votação |
| 7 | Preenchimento dos dados para contato |
| 8 | Verificação do resumo dos dados preenchidos |
| 9 | Envio dos dados e recebimento do número do protocolo |
| 10 | Volta a tela inicial |

<div style="text-align: left">
<p>Tabela 2: Tabela de contribuição (Fonte: SOARES LOPES, Maria Luana, 2026).</p>
</div>
---

## Como Executar o Protótipo

O protótipo é executado localmente junto ao servidor FastAPI do grupo. Siga as instruções no [README do FastAPI](FastAPI/README.md) para configurar o ambiente.

Após iniciar o servidor, acesse:

- **Termo de Consentimento (TCLE):** [http://127.0.0.1:8000/tcle-emissaodetitulo](http://127.0.0.1:8000/tcle-emissaodetitulo)
- **Protótipo (início direto):** [http://127.0.0.1:8000/titulo-eleitor](http://127.0.0.1:8000/titulo-eleitor)

---

## Persona Relacionada

O protótipo foi desenvolvido com base na persona **Fernanda Ribeiro**, que representa um usuário que está buscando seu primeiro título de eleitor e não tem prévia experiencia com o processo. Porém, no teste, o usuário assumirá a identidade de Karina, uma mulher de 19 anos que também está buscando seu primeiro título.

---

## Tarefa Modelada

> *Karina acabou de fazer 18 anos e precisa tirar seu título agora, para seguir o que é demnadado pela lei, além de querer fazer sua parte na época de eleições. Está acessando o site pela primeira vez.*

---

## Bibliografia

> <a id="REF1" href="#anchor_1">1.</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 13/06/2026 | 1.0 | Criação do documento e do protótipo | Maria Luana | Samuel |

<div style="text-align: left">
<p>Tabela 3: Histórico de Versão (Fonte: SOARES LOPES, Maria Luana, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento e do protótipo. A ferramenta foi utilizada para auxiliar na estruturação do documento, na codificação do HTML/CSS/JS e na formatação das tabelas e seções, seguindo o modelo de artefato do Grupo 02. Todo o conteúdo técnico — incluindo a definição do fluxo de tarefas, as decisões de design e a escolha dos elementos de interface — foram realizados pelos integrantes da equipe; o Claude atuou como assistente de formatação e codificação, sem interferir nas escolhas metodológicas do grupo.
