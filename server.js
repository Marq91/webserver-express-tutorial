const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  // Vamos a renderizar el sitio HBS
  res.render('home', {
    nombre: 'Anibal'
  });
});

app.get('/about', (req, res) => {

  res.render('about');
});
 
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});


