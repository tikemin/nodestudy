var mysql = require('mysql');
var client = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'hogehoge'
});

client.connect();
client.query('CREATE DATABASE quotes');

client.query('CREATE TABLE quotes.quotes (' +
	'id INT NOT NULL AUTO_INCREMENT, ' +
	'author VARCHAR(128) NOT NULL, ' +
	'quote TEXT NOT NULL, PRIMARY KEY(id)' +
	')'
);
