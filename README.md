# DESPESAS

Desenvolver uma API REST com NestJS, implementando:


Autenticação de usuário.
CRUD de despesas.

 

A api deverá conter uma forma de Autenticação. (o CRUD deve estar protegido pela autenticação).

 

Na entidade despesas, deverá conter:

 

● Id
● Descrição (descrição da despesa)
● Data (data de quando ocorreu a despesa)
● Usuário (usuário dono da despesa, um relacionamento com a tabela de Usuários)
● Valor (valor em reais da despesa)

 

Colocar validação nos requests do CRUD (usuário existe, data não é futuro, valor não é negativo, descrição tem até 191 caracteres). 

 

Colocar restrição de acessos nos requests do CRUD (somente o usuário relacionado a despesa pode acessar e agir sobre ela).

 

Ao cadastrar uma despesa, deverá ser enviado um e-mail para o usuário vinculado a despesa, com o título "despesa cadastrada". 

 

O teste pode ser realizado da forma que preferir, porém, a forma como for realizado o projeto será o ponto central da avaliação. Recomendamos implementar o projeto do jeito mais simples possível e seguir as boas práticas do Clean Code.

 

Algumas recomendações:

 

Fazer a validação da API utilizando o Class validator;
Não esqueça dos testes unitários! 
 

O teste deverá ser comitado em um repositório público e compartilhado comigo (aqui mesmo, em resposta a este e