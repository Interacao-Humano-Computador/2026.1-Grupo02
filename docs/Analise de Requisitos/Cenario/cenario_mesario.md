# Cenário — Ser Mesário (TSE)

## Grupo 02

---

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
|:----:|:------:|:----------|:---------:|:-----------:|
| 02/05/2026 | 1.0 | Criação do Cenário voluntariamento para ser mesário nas eleições | Bryan Smith |  |

---

## Introdução

Este documento apresenta um **cenário de interação** referente ao objetivo de um cidadão se voluntariar para trabalhar como **mesário nas eleições**, utilizando o portal do Tribunal Superior Eleitoral (TSE). O cenário descreve uma situação realista de uso, identificando atores, contexto, tarefas, dificuldades e avaliação dos resultados, conforme orientam Barbosa et al. (2021).

A criação deste cenário permite à equipe de design compreender as necessidades do usuário, antever problemas de usabilidade e validar soluções propostas antes da implementação.

---

## Desenvolvimento

### Título do Cenário
*"Primeiro voluntariado como mesário"*

### Atores

| Ator | Papel | Características relevantes |
|:----:|:------|:---------------------------|
| **Lucas Mendes** | Cidadão / Potencial mesário | 24 anos, estudante de Direito, utiliza tecnologia com facilidade, possui conta gov.br nível prata. Já acessou o site do TSE para consultar local de votação. |
| **Sistema TSE** | Portal da Justiça Eleitoral | Site institucional com serviços ao eleitor, seção de voluntariado para mesários, formulário de cadastro. |

### Contexto de Uso

Lucas está no último ano da faculdade de Direito e sempre se interessou por temas ligados à cidadania e ao processo eleitoral. Após conversar com um professor que já foi mesário voluntário, decidiu que quer participar das próximas eleições nessa função. Ele está em casa, em seu notebook, com acesso à internet. Tem disponibilidade nas manhãs de domingo e gostaria de saber como se inscrever para ser mesário voluntário.

### Objetivo Principal
Realizar o cadastro como mesário voluntário no site do TSE.

### Sequência de Ações e Eventos

1. **Acesso ao portal:** Lucas abre o navegador e digita `www.tse.jus.br`. A página inicial carrega.

2. **Dificuldade inicial – localização do serviço:** Ele procura visualmente por algo como "Seja mesário", "Voluntário" ou "Trabalhe nas eleições". Não encontra imediatamente. Examina os menus "Serviços ao Eleitor", "Cidadão" e "Participe". ([Problema: baixa visibilidade da funcionalidade])

3. **Uso da busca interna:** Frustrado, Lucas localiza a barra de busca e digita **"ser mesário"**. O sistema retorna uma lista de resultados. Entre eles, ele identifica um link chamado "Como ser mesário voluntário". Clica nele.

4. **Leitura das instruções:** O sistema exibe uma página com requisitos (idade mínima, estar quite com a Justiça Eleitoral, não ter parentesco com candidatos, etc.), direitos (dispensa do trabalho, auxílio-alimentação, etc.) e deveres (horário de chegada, assinatura de atas, etc.). Lucas lê atentamente e decide que atende aos requisitos.

5. **Início do cadastro:** Na mesma página, há um botão **"Quero ser mesário"**. Ele clica e é redirecionado para um formulário.

6. **Preenchimento do formulário:** O sistema solicita:
   - Dados pessoais: nome completo, CPF, data de nascimento, título de eleitor.
   - Contato: e-mail, telefone com DDD.
   - Disponibilidade: turno desejado (manhã/tarde) e eventuais impedimentos.
   - Local de trabalho: seleção da zona eleitoral (ele consulta rapidamente sua zona pelo número do título).

   Lucas preenche todos os campos. O sistema realiza validação em tempo real (campos obrigatórios marcados com asterisco). Ele aceita os termos e condições.

7. **Envio e feedback:** Ele clica em **"Enviar"**. O sistema processa e exibe a mensagem: **"Solicitação enviada com sucesso. Você receberá um e-mail de confirmação do cartório da sua zona eleitoral."**

8. **Confirmação externa:** No dia seguinte, Lucas recebe um e-mail informando que seu cadastro foi aprovado e que ele será convocado para treinamento antes das eleições.

### Avaliação pelo Ator

Lucas considera a experiência **razoável**, mas com uma dificuldade importante: **encontrar o serviço** dentro do site. Ele comenta: *"Deveria ter um botão bem visível na página inicial, algo como 'Seja um mesário voluntário'. Perdi uns minutos procurando. Eu já esperava que fosse mais fácil, até porque parece algo que o TSE quer incentivar."* Por outro lado, o formulário foi simples e o feedback do envio foi claro.

### Problemas de Usabilidade Identificados

| ID | Problema | Impacto |
|:--:|:---------|:--------|
| P01 | Funcionalidade "Ser Mesário" com baixa visibilidade na página inicial | Usuário perde tempo navegando ou recorrendo à busca; pode desistir. |
| P02 | Rótulos inconsistentes nos menus ("Serviços ao Eleitor", "Participe", "Cidadão") | Confusão sobre onde encontrar o serviço desejado. |
| P03 | Busca interna não sugere termos relacionados (ex: ao digitar "voluntário", não sugere "mesário") | Usuário precisa adivinhar o termo exato. |

### Recomendações

1. Criar um **card/botão de destaque** na página inicial com o texto "Seja um Mesário Voluntário".
2. Padronizar a terminologia em todos os menus e links relacionados ao voluntariado.
3. Melhorar o mecanismo de busca com **autocomplete e sinônimos** (ex: "voluntário" → "mesário").

---

## Tabela de Contribuição

| Integrante | Contribuição |
|:----------:|:-------------|
| Bryan Smith | Elaboração do cenário, descrição das ações e identificação de problemas |
|  |

<div style="text-align: left">
<p>Tabela 1: Tabela de contribuição (Fonte: autor, 2026).</p>
</div>

---

## Referência Bibliográfica

>BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.

>TRIBUNAL SUPERIOR ELEITORAL. **Portal do TSE – Serviços ao Eleitor**. Disponível em: https://www.tse.jus.br. Acesso em: 02 maio 2026.

---

## Agradecimentos

Agradecemos à IA Generativa **DeepSeek** pelo suporte na elaboração deste documento. A ferramenta foi utilizada para auxiliar na estruturação do cenário, na redação das ações e eventos, e na formatação do texto conforme o modelo exigido. Todo o conteúdo técnico e as decisões de projeto foram definidos pelo autor; o DeepSeek atuou como assistente de formatação e redação, sem interferir nas escolhas metodológicas do grupo.
