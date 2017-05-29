# CONTATOOH - MEAN framework application

Small tutorial with the following technologies:

* MongoDB
* Express
* Angular.js
* Node.js

[MEAN: Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node](https://books.google.com.br/books?id=-2eCCwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false)

## Mongo DB

* Syntax:
	mongod --dbpath <PROJECT_ROOT>/database --port 27017

* Example:
	mongod --dbpath ./database --port 27017

* Mongo console:
	mongo --port 27017 --host localhost

* Scripts


	var contato1 = { "nome" : "Contato 1 Mongo", "email" : "cont1@empresa.com.br" }
	var contato2 = { "nome" : "Contato 2 Mongo", "email" : "cont2@empresa.com.br" }
	var contato3 = { "nome" : "Contato 3 Mongo", "email" : "cont3@empresa.com.br" }
	db.contatos.insert(contato1)
	db.contatos.insert(contato2)
	db.contatos.insert(contato3)
	db.contatos.find()

	var criterio = { "email" : "cont2@empresa.com.br" }
	var contato = db.contatos.find(criterio)
	contato



## Notes

* __IN LINUX SYSTEMS DO NOT FORGET THE ln -s /usr/bin/nodejs /usr/bin/node__
