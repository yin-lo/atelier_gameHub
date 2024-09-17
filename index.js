const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const games = require('./games.json');
app.locals.games = games;

app.get('/', (req, res) => {
	res.render('index', {css : ''});
});

  app.get('/game/:activeGame', (req,res) => {
	const game = games.find((game) => game.name === req.params.activeGame);

	if (game){
		res.render(`${game.name}`, {css : `/css/${game.cssFile}`});
	} else{
		res.redirect('/game/404');
	}
})

app.get('/game/404', (req, res) => { 
	res.render('page404')})


app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});