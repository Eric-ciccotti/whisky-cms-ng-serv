const express = require('express');
const app = express(); // je vais crée une application express
const api = require('./api/v1/index'); // j'importe le routetr mon dossier api
const cors = require('cors');

const mongoose = require('mongoose');
const connection = mongoose.connection;	//connection a mongoose

app.set('port', process.env.port || 3000); // 'set" pour configurer des choses - acceder au port via la variable d'environnement si y en a une OU le port 3000
app.use(cors()); //pour autoriser les clients externes a faire des requests vers mon serveur express
app.use('/api/v1', api); //localhost:3000/api/v1 - on veut utiliser notre router (qu'on a appelé api)

app.use((req, res) => {
	const error = new Error('404 - not found !!!');
	error.status = 404;
	res.json({
		msg: error.message,
		status: error.status
	});
});

mongoose.connect('mongodb://localhost:27017/whiskycms', {
	useNewUrlParser: true
});
connection.on('error', err => {
	console.error(`connection to MongoDB error: ${err}`);
});
// en cas d'erreur on execute le callback qui affiche un message d'erreur
// 'on' permet d'écouter un event emitter, ici on écoute si y a une erreur

connection.once('open', () => {
	console.log('Connected to MongoDB !');

	app.listen(app.get('port'), () => {
		console.log(`express server listen on port ${app.get('port')}!`);
	});
	//on récupère la clé 'port' qu'on a 'set', dans le callack on affiche un message dans la console
	//on commence à écouter uniquement aprés etre connecté a mongodb

});

//la requete va paser par cors() , puis '/api/v1 .. ce sont des middlewares
