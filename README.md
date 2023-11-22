***Teste 2 - Prático - Backend (Node.js)***

O desafio consiste no desenvolvimento de um serviço backend utilizando Node.js, com a finalidade de interagir com três endpoints específicos.

***Etapa 1: Consulta de endpoints***

• A aplicação deve realizar GET requests para os seguintes endpoints:
1. https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-1
2. https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-2
3. https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-3
Observação: Cada endpoint retornará dados no formato JSON que representa um menu, contendo um nome e uma lista de itens. Cada item, por sua vez, é um objeto que contém um identificador único (id), o título (title), a URL de destino (url) e o tipo de comportamento ao ser clicado (target), podendo ser _blank para abrir em uma nova aba ou _self para abrir na mesma aba.

***Etapa 2: Agregação de Resultados***

• Após receber os dados de cada endpoint, a aplicação deve combiná-los em um único conjunto de dados.

***Etapa 3: Exposição de Endpoint***

Em seguida, você deve criar um endpoint que aceite solicitações HTTP do tipo POST. A aplicação deve expor um novo endpoint RESTful que, quando invocado via GET request, forneça os dados agregados em um único objeto seguindo a seguinte estrutura de dados conforme imagem.

***Executando a aplicação***
Execute index.js e acesse:
  - http://localhost:3000/menu1
  - http://localhost:3000/menu2
  - http://localhost:3000/menu3
  - http://localhost:3000/menu4
