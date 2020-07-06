## Menu dinâmico

Crie um banco de dados e passe suas credenciais no arquivo 
[applications.properties](https://github.com/TiagoC-Aguiar/menu-dinamico/tree/master/src/main/resources/applications.properties), 
localizado em src/main/resources

Exemplo: (um banco de dados chamado menu_teste em MySQL)

`spring.datasource.url=jdbc:mysql://localhost:3306/menu_teste`

`spring.datasource.username=root`

`spring.datasource.password= `

Baixe e abra o projeto do menu em uma IDE e o execute. (recomendado)

Ou digite o comando abaixo no terminal para executar o spring-boot

`mvn spring-boot:run`

Acesse o front-end dentro do diretório [src/main/webapp](https://github.com/TiagoC-Aguiar/menu-dinamico/tree/master/src/main/webapp)

Digite o comando abaixo para excutar o front-end

`yarn start`

Abra o navegador e acesse o projeto em [http://localhost:3000](http://localhost:3000)
