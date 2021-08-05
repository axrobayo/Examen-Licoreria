const express = require('express');
const app = express();
const hbs = require('hbs');
require('./data/productos')

const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parties');

//Expres HBS view_engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('homeLic',{
    licor1:'Wisky Jhonny Rojo',
    licor2:'Ron Abuelo',
    licor3:'Tequila Azteca',
    pre1:20,
    pre2:25,
    pre3:22
});
});
app.listen(port, ()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`)
});