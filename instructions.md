NodeOracle

Passos:

	01.	Criar e clonar repositório no GitHub.
	
	02.	Executar o comando abaixo, no diretório do projeto, para criar o
		arquivo package.json com valores padrões:
	
		npm init -y
		
	03.	Instalar o módulo node-oracledb, através da instrução abaixo:
	
		npm install oracledb –save
		
	04.	Criar o arquivo server.js e inclua o código abaixo:
	
		let connection;
		var oracledb = require('oracledb');

		(async function() {
		try{
		   connection = await oracledb.getConnection({
				user : 'YOUR_DATABASE_USER',
				password : 'YOUR_DATABASE_PASSWORD',
				connectString : 'localhost/yourorclpdb'
		   });
		   console.log("Successfully connected to Oracle!")
		} catch(err) {
			console.log("Error: ", err);
		  } finally {
			if (connection) {
			  try {
				await connection.close();
			  } catch(err) {
				console.log("Error when closing the database connection: ", err);
			  }
			}
		  }
		})()	
		
Referências:

	https://www.techiediaries.com/node-oracle-database-crud/