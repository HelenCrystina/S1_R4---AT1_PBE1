const express = require('express')
const app = require('express')();
const PORT = 3000;

/*2. Crie uma rota /calculadora que receba os parâmetros via query:
operacao (valores possíveis: soma, subtracao, multiplicacao, divisao);
numUm e numDois (números para operação);
A rota deve processar os parâmetros e retornar o resultado da operação solicitada.
GET /calculadora?operacao=soma&numUm=4&numDois=6 → Retorna Resultado: 10*/


app.get ('/calculadora', (req, res) => {
    const {calculo, numeroUm, numeroDois} = req.query;
    let resultado;
    if (calculo=="soma") {
        resultado = parseFloat(numeroUm) + parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)
    } if (calculo=="subtracao") {
        resultado = parseFloat(numeroUm)-parseFloat(numeroDois);
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)

    } if (calculo=="multiplicacao") {
        resultado = parseFloat(numeroUm)*parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)

    } if (calculo=="divisao") {
        resultado = parseFloat(numeroUm)/parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é: ${resultado}`)
    } else {
        console.log("EScreva uma operação correta!");
    }
        
    });



app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
})