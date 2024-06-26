const express = require('express');
const app = express();
const route = require('./routes');
const path = require('path');


app.use(express.urlencoded({
    extended:true
}));

app.use(express.static(path.resolve('./src/public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(route);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });

