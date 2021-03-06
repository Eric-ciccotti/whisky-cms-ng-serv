const express = require('express');
const router = express.Router(); // le router

router.get('/ping', (req, res) => {
	res.status(200).json({
		msg: 'pong',
		date: new Date()
	});
});
//locahost:3000/pink - on envoi un statut 200 et en reponse un json

router.get('/blog-posts', (req, res) => {
	const posts = [
		{
			id: 1,
			title: 'Etre programmeur ça pique parfois !!!',
			subTitle: 'ce cactus est pas là pour rien',
			image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			content:
				'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier. not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk! You\'re going to do his laundry? I\'ve got to find a way to escape.'
		},
		{
			id: 2,
			title: 'Un nouveau framework JS',
			subTitle: 'encore !?',
			image: 'https://fakeimg.pl/300/?text=frameworks',
			content: 'Ca en fait 1 par semaine. On va pas tenir le rythme'
		},
		{
			id: 3,
			title: 'Vive le vanilla JavaScript',
			subTitle: 'encore !?',
			image: 'https://fakeimg.pl/300/?text=JS',
			content: 'Là au moins, on est sûr que ça va durer'
		}
	];
	res.status(200).json(posts);
});
// http://localhost:3000/api/v1/blog-posts

module.exports = router; //pour qu'il soit utilisable depuis un autre fichier
