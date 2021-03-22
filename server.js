let connection;
var oracledb = require('oracledb');

(async function() {
try{
   connection = await oracledb.getConnection({
        user : 'scmmweb',
        password : 'scmmweb',
        connectString : '(description = (address = (protocol = tcp) (host = 172.20.0.234)(port = 1521)) (connect_data = (server = dedicated)(sid = mv2000)))'
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