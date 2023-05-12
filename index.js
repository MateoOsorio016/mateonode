const express = require('express');
const app = express();
const puerto= 8082;
const path=require('path')
const hbs= require('hbs')
// servidor de contenido estatico
app.use(express.static('hbs/public'))

// configuracion del directorio de las vistas hbs
app.set('views', path.join(__dirname + '/hbs/public/views')
// app.get('/',(req, res)=>{
//     res.write('home')
//     res.end()
)

app.get('/',(req, res)=>{
    res.render('index')

})

app.set('view engine', 'hbs'); // motor de plantilla


hbs.registerPartials(__dirname + '/hbs/public/views/partials')


app.listen(puerto, ()=>{
    console.log(`escuhando el puerto ${puerto}`)
});