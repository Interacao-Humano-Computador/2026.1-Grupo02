# Protótipo de Alta Fidelidade — Justificativa Eleitoral Online

## Grupo 02

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Luan Ludry | Criação do protótipo de alta fidelidade |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Introdução

Este artefato apresenta o **protótipo de alta fidelidade** da funcionalidade de **Justificativa Eleitoral Online** do portal do Tribunal Superior Eleitoral (TSE), desenvolvido no âmbito da disciplina de Interação Humano-Computador da Universidade de Brasília.

O protótipo simula o fluxo completo que o eleitor percorre ao justificar sua ausência em uma eleição pelo portal digital, sem necessidade de deslocamento a um cartório eleitoral. Ele foi implementado em HTML, CSS e JavaScript, servido localmente por meio do servidor FastAPI compartilhado pelo grupo.

---

## Objetivo

O protótipo de alta fidelidade tem por objetivo:

- Representar com maior fidelidade visual e interativa o fluxo real da funcionalidade;
- Permitir testes de usabilidade mais próximos da experiência real do usuário;
- Identificar problemas de navegação, clareza do fluxo e satisfação do usuário antes de uma implementação definitiva.

---

## Funcionalidade: Justificativa Eleitoral Online

A justificativa eleitoral online permite que o eleitor ausente em uma eleição regularize sua situação junto à Justiça Eleitoral sem precisar comparecer presencialmente ao cartório. O fluxo modelado no protótipo contempla as seguintes etapas:

| Etapa | Descrição |
|:-----:|:----------|
| 1 | Acesso ao Portal do Eleitor (TSE) e seleção do serviço de Justificativa Eleitoral |
| 2 | Autenticação via GOV.BR (CPF e senha) |
| 3 | Preenchimento do formulário: eleição, motivo da ausência e descrição |
| 4 | Anexo do documento comprobatório (PDF, JPG ou PNG) |
| 5 | Revisão e confirmação dos dados |
| 6 | Geração do número de protocolo e download do comprovante em PDF |

---

## Como Executar o Protótipo

O protótipo é executado localmente junto ao servidor FastAPI do grupo. Siga as instruções no [README do FastAPI](FastAPI/README.md) para configurar o ambiente.

Após iniciar o servidor, acesse:

- **Termo de Consentimento (TCLE):** [http://127.0.0.1:8000/justificativa](http://127.0.0.1:8000/justificativa)
- **Protótipo (início direto):** [http://127.0.0.1:8000/justificativa-eleitoral](http://127.0.0.1:8000/justificativa-eleitoral)

---

## Persona Relacionada

O protótipo foi desenvolvido com base na persona **Rafael Mendonça Alves**, que representa um eleitor que percebeu que faltou à eleição e deseja regularizar sua situação de forma online, sem deslocamento ao cartório.

---

## Tarefa Modelada

> *Rafael faltou à eleição e, ao consultar o portal do TSE, descobriu que pode realizar a justificativa eleitoral online. Ele acessa o portal, autentica-se via GOV.BR, preenche o formulário informando o motivo de saúde, anexa o atestado médico digitalizado e confirma o envio, obtendo o comprovante em PDF.*

---

## Bibliografia

> <a id="REF1" href="#anchor_1">1.</a> BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 13/06/2026 | 1.0 | Criação do documento e do protótipo | Luan Ludry | Bryan Smith |

<div style="text-align: left">
<p>Tabela 2: Histórico de Versão (Fonte: LUDRY, Luan, 2026).</p>
</div>

---

## Agradecimentos

Agradecemos à IA Generativa **Claude** (Anthropic) pelo suporte na elaboração deste documento e do protótipo. A ferramenta foi utilizada para auxiliar na estruturação do documento, na codificação do HTML/CSS/JS e na formatação das tabelas e seções, seguindo o modelo de artefato do Grupo 02. Todo o conteúdo técnico — incluindo a definição do fluxo de tarefas, as decisões de design e a escolha dos elementos de interface — foram realizados pelos integrantes da equipe; o Claude atuou como assistente de formatação e codificação, sem interferir nas escolhas metodológicas do grupo.
