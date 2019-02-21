const express = require('express');
const app = express();
const hbs = require('hbs');
require('./views/hbs/helper.js');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Express hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/prcil');

app.get('/', function (req, res) {//home pge
	res.render('home', {
	    nombre: 'ngel'	   	
	});
})
app.get('/bout', function (req, res) {//module bout
	res.render('bout');
})
 
app.listen(port, () => console.log(`ecuchndo el puerto ${port}`));