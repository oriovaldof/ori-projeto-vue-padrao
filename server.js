const express = require('express')
const app = express();
//definindo a porta
// const porta = 3000; 
//variavel de ambiente do Heroku informando a porta
const porta = process.env.PORT || 8080; 

app.use(express.static(__dirname+'/dist/'));

//responder a requisições feitas para o servidor web por meio da rota get
app.get('/', function(req, res){
    // res.send('Olá, eu sou um servidor web em Node com Express');
    res.sendFile(__dirname+'/dist/index.html');
});

app.listen(porta,function(){
    console.log('Servidor web rodando com Express');
});