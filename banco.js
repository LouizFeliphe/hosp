const mysql = require('mysql')

const banco_de_dados = () => {
    const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'database',
  });
  
  
    db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados');
    }
  });
  
  // Execute uma consulta para buscar dados
  db.query('SELECT * FROM database.employee', (err, results, fields) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return;
    }
  
    // Os resultados estão em 'results'
    console.log('Dados recuperados do banco de dados:');
    results.forEach(element => {
      console.log(element.id)
      console.log(element.name)
    });
  
    // Feche a conexão com o banco de dados quando terminar
    db.end((err) => {
      if (err) {
        console.error('Erro ao fechar a conexão com o banco de dados:', err);
        return;
      }
      console.log('Conexão com o banco de dados fechada');
    });
  });
}

module.exports = {banco_de_dados}