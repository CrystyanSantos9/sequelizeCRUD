<h1>Criando CRUD com ORM Sequelize</h1>

<section>
<div>
<h3> Sobre o Sequelize </h3>
<a href="https://sequelize.org/master/identifiers.html"><img src="./imgs/sequelize.jpg"></a>
<p>
O Sequelize é o módulo de ORM utilizado em conjunto com o NODEJS para abastrair as operações com um banco de dados. 
</p>
<p>
Ele age como um intermediador entre o nosso código javascript e as operações obrigatóriso de um banco de dados relacional, agindo muito parecido com a versão do HIBERNATE para a plataforma JAVA. Permitindo que através de classes de objetos chamadas "modals" possamos interagir com todas as etapas de criação e manipulação das entidades de um banco de dados relacional.   
</p>
<p>
 Ao utilizarmos o Sequelize e criarmos um objeto base, podemos definir esse objeto como um schema que será utilizado para realizar operações já disponibilizadas pelo módulo sequelize para criação, edição, remoção, listagem e relacionamento entre as tabelas de um banco de dados, simplificando e muito o trabalho de desenvolvimento.
</p>
</div>
</section>
<section>
<h3>Dependências de desenvolvimento - Package.json </h3>
<table>
<tr>
    <th>Dependência</th>
    <th>Detalhes</th>
</tr>
<tr>
<td>"ejs": "^3.1.6"</td>
<td>Engine para geração de HTML Dinâmico</td>
</tr>
<tr>
<td>"express": "^4.17.1"</td>
<td>Criação e disponibilização de Servidor Web</td>
</tr>
<tr>
<td> "mysql2": "^2.3.2"</td>
<td>Driver de conexão com o banco de dados MYSQL<td>
</tr>
<tr>
<td>"sequelize": "5"</d>
<td>Driver de conexão com o banco de dados MYSQL</td>
</tr>
</table>
</section>
<section>
<h3>Dependências de ambiente</h3>
<table>
<tr>
<th>Versão runtime node</th>
<th>Versão banco de dados</th>
<tr>
<tr>
<td>NODEJS ^14"</d>
<td>^MYSQL 5.0</td>
</tr>
</table>
</section>
<section>
<h3>Executando o projeto</h3>
<p>
No seu terminal de comando digite: 
<pre>
$> npm install || yarn add
$> npm start || yarn start 
</pre>
<p>
</section>
<section>
 <h3>Detalhes de criação e implementação do proejto</h3>
 <p>
 Caso tenha interesse em saber como fiz para desenvolver essa projeto prático, basta acessar o documento no link abaixo que você será redirecionado para o meu google docs e poderá ler todo o passo a passo de criação dessa simples aplicação. 
 </p>
 <a href="https://docs.google.com/document/d/1e9eFNLOYEluSb_vqgWxV3-_Ho9kjDtuQetBYVy9AhQA/edit?usp=sharing">Google Docs</a>
</section>