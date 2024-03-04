const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.set('views', './views');
app.set('view engine', 'ejs')

app.use(express.static('public'));









app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});