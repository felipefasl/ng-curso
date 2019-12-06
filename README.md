# ng-curso

Material ministrado no curso AngularJs - O necessário em 40hrs Por [Felipe Lima](https://github.com/felipefasl) e [Guilherme Cruz](https://github.com/sambrmg)

## Índice
#### 1. AngularJS
##### [1.1 Introdução](#11-introdução-1)
##### [1.2. Preparando o ambiente](#12-preparando-o-ambiente-1)
###### 1.2.1. Editor de código
###### 1.2.2. NodeJS
###### 1.2.3 Instalação AngularJS 
##### 1.3. Conhecendo o AngularJS 
###### 1.3.1. DataBind 
###### 1.3.2. Controladores 
###### 1.3.3. Loop 
###### 1.3.4. Formulários 
###### 1.3.5. Filtros 
###### 1.3.5.1. Criando seu próprio filtro 
##### 1.3.6. Diretivas 
###### 1.3.6.1. Criando sua própria diretiva 
##### 1.3.7. Rotas 
#### 1.4. Promessas 
#### 1.5. Conectando AngularJS ao o servidor 
##### 1.5.1. Uso do $http 
#### 1.6. Services 
#### 1.7. Gerindo dependências com NPM 
##### 1.7.1. Como o npm Funciona? 
##### 1.7.2. Começar um projeto com npm 
#### 1.8. Automatizando com o Grunt 
#### 1.9. Testes automatizados com Jasmine/Karma 
##### 1.9.1. Jasmine 
##### 1.9.2. Karma 
##### 1.9.3. Configuração 
##### 1.9.4. Testanto o service 
##### 1.9.5. Testando o controlador 
#### 1.10. Git - Controle de versão 

<hr/>

#### 1. AngularJS
##### 1.1 Introdução

Este framework é mantido pelo Google e possui algumas particularidades interessantes, que o fazem um framework muito poderoso. Uma dessas particularidades é que ele funciona como uma extensão ao documento HTML, adicionando novos parâmetros e interagindo de forma dinâmica com vários elementos. Ou seja, com AngularJS podemos adicionar novos atributos no html para conseguir adicionar funcionalidades extras, sem a necessidade de programar em javascript. AngularJS é quase uma linguagem declarativa, ou seja, você usa novos parâmetros na linguagem html para alterar o comportamento padrão do html. Estes parâmetros (ou propriedades) são chamados de diretivas, na qual iremos conhecer cada uma ao longo do curso. 
 
Além disso, é fornecido também um conjunto de funcionalidades que tornam o desenvolvimento web muito mais fácil e empolgante, tais como o DataBinding, templates, fácil uso do Ajax, controllers e muito mais. Todas essas funcionalidades serão abordadas ao longo desta obra

#### 1.2. Preparando o ambiente 
 
É preciso muito pouco para começar a aprender AngularJS. Em um nível mais básico, você precisa de um editor de textos e de um navegador web. Mas para otimizar o nosso desenvolvimento, temos algumas ferramentas que nos ajudam bastantes. 

##### 1.2.1. Editor de código 
 
Existem vários editores de código, mas aqui no curso recomendaremos o [Visual Studio Code](https://code.visualstudio.com), ele possui facilidades que ajudam bastante no dia a dia de um desenvolvedor.

##### 1.2.2. NodeJS 
 
Com a evolução do javascript nos últimos anos, outra tecnologia ganhou destaque no desenvolvimento web, que é o Node.js, no qual iremos chamar simplesmente de node. Node é uma plataforma para executar javascript no lado do servidor, construída sobre o motor Javascript do Google Chrome. 
 
https://nodejs.org/pt-br/ 
 
 
##### 1.2.3. Instalação AngularJS  
 
Para trabalhar com o AngularJS a única coisa que você precisará fazer é importar o seu arquivo JavaScript para o seu projeto, seja através do download direto ou do uso da interface npm. 
 
Trabalharemos com a versão 1.7.8 que é a mais atual do AngularJS. 
 
https://angularjs.org/ - Neste link encontraremos o AngularJS para download, bem como sua documentação.

#### 1.3. Conhecendo o AngularJS 
 
Agora que temos o básico em funcionamento, vamos aprender as principais regras do AngularJS. Através delas será possível realizar diferentes tarefas que irão tornar o desenvolvimento web muito mais simples e prazeroso.

1.3.1. DataBind 
 
Uma das principais vantagens do AngularJS é o seu DataBind. Este termo é compreendido como uma forma de ligar automaticamente uma variável qualquer a uma outra. Geralmente, o DataBind é usado para ligar uma variável do JavaScript (ou um objeto) a algum elemento do documento HTML. 
 
No exemplo a seguir, estamos usando o AngularJS para ligar uma caixa de texto (o elemento input do html) à um cabeçalho.

**```databind.html```**
```html
<html ng-app> <meta charset="utf-8" /> 
 
<head>    
  <title>DataBind</title>    
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script> 
</head>
 
<body>    
 
  Nome: <input type="text" ng-model="nome" />     
  <hr/>     
  <h1>Olá {{nome}}!</h1> 
 
 </body> 

</html>
```
Além da propriedade ng-app (linha 1), utilizamos para DataBind a propriedade ng-model, para informar que este elemento estará ligado a uma variável do AngularJS, através do variável nome, na linha 9. Isso significa que qualquer alteração na caixa de texto irá atualizar o valor da variável. Na linha 11, temos a chamada à variável através do comando {{nome}}, que imprime o valor da variável. Como o DataBind é dinâmico, ao mesmo tempo que algo é escrito na caixa de texto, o seu referido bind é realizado, atualizando instantaneamente o seu valor. Bind também pode ser realizado em objetos, mas antes de começar a aumentar a complexidade do código, vamos criar um controller para melhorar a organização do código

*Normalização*
 
O AngularJS normaliza a tag de um elemento e o nome do atributo para determinar quais elementos correspondem a quais diretivas. Normalmente, nos referimos às diretivas pelo nome normalizado de camelCase que diferencia maiúsculas de minúsculas (por exemplo, ngModel). No entanto, como o HTML não faz distinção entre maiúsculas e minúsculas, nos referimos às diretivas no DOM em minúsculas, geralmente usando atributos delimitados por traços nos elementos DOM (por exemplo, ng-model). 

O processo de normalização é o seguinte: 
Retire x- e data- da frente do elemento / atributos e substitua por  “:”, “-“ ou por “_”. 
 
No exemplo abaixo, todos correspondem à diretiva ngBind: 
```html

```


