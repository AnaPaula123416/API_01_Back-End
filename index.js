const express = require('express');
const app = express();
const calculaIMC = require ('./servicos/calculadoraIMC');

app.get('/',(req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (calculaIMC.validaParametro(peso)&&calculaIMC.validaParametro(altura)) 
    {
    let imc = calculaIMC.efetuarCalculoIMC(peso,altura);
    let status = calculaIMC.retornarStatusIMC(imc);

    let json = {imc: imc, status: status};
    res.json(json);}
    
    else{
        res.status(400).json({ erro: 'Peso ou altura inválidos'})
    }
    
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciando em: " + data)
});

