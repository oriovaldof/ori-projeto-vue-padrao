const express = require('express')
const app = express();

//responder a requisições feitas para o servidor web por meio da rota get
app.get('/', function(req, res){
    res.send('Olá, eu sou um servidor web em Node com Express');
});

app.listen(3000,function(){
    console.log('Servidor web rodando com Express');
});