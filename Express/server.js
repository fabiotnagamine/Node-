const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended:true
}))

app.get(('/'), (request, response) => {
    response.send(
        `<form action="/" method="POST">
        Cliente: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`
    );
})

app.post(('/'), (request, response) => {
    response.send('Cliente cadastrado com sucesso!');
});

app.get(('/test/:idUser?'), (request, response) => {
    const { idUser } = request.params;
    response.send(idUser + request.query.idUser);  
})
app.listen(3000)