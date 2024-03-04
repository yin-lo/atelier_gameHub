const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.set('views', './views');
app.set('view engine', 'ejs')

app.use(express.static('public'));


app.get('/', (req, res) => {
	res.render('index.ejs', {css : ''});
});


app.get('/game/fourchette', (req, res) => {
    res.render('fourchette', {css : ''});
  }); 
app.get('/game/diceRoller', (req, res) => {
    res.render('diceRoller', {css : '/css/diceRoller.css'});
  }); 

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});