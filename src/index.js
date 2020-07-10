const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicio
const app = express();

//Config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Rutas
app.use(require('./routes/index'));

//Archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Inicio del server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});