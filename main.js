const express = require('express')
const app = require('express')();
const PORT = 3000;

/*1. Crie um projeto Express com quatro rotas GET, cada uma representando uma operação matemática: adição, subtração, multiplicação e divisão. 

Cada rota deve capturar os parâmetros numUm e numDois da URL, realizar a operação correspondente e retornar o resultado no formato de texto simples.
Trate possíveis erros, como divisão por zero, e retorne mensagens adequadas.

Exemplo de chamada:
GET /soma/5/10 deve retornar:
Resultado da soma: 15*/

app.get ('/soma/:numeroUm/:numeroDois', async (req, res) => {
    const {numeroUm, numeroDois} = req.params;
    const resultado = parseFloat(numeroUm) + parseFloat(numeroDois);
    res.send(`O resultado da operação é: ${resultado}`)

});

app.get ('/subtracao/:numeroUm/:numeroDois', async (req, res) => {
    const {numeroUm, numeroDois} = req.params;
    const resultado = parseFloat(numeroUm) - parseFloat(numeroDois);
    res.send(`O resultado da operação é: ${resultado}`)

});

app.get ('/multiplicacao/:numeroUm/:numeroDois', async (req, res) => {
    const {numeroUm, numeroDois} = req.params;
    const resultado = parseFloat(numeroUm) * parseFloat(numeroDois);
    res.send(`O resultado da operação é: ${resultado}`)

});

app.get ('/divisao/:numeroUm/:numeroDois', async (req, res) => {
    const {numeroUm, numeroDois} = req.params;
    const resultado = parseFloat(numeroUm) / parseFloat(numeroDois);
    res.send(`O resultado da operação é: ${resultado}`)

});




/*2. Crie uma rota /calculadora que receba os parâmetros via query:
operacao (valores possíveis: soma, subtracao, multiplicacao, divisao);
numUm e numDois (números para operação);
A rota deve processar os parâmetros e retornar o resultado da operação solicitada.
GET /calculadora?operacao=soma&numUm=4&numDois=6 → Retorna Resultado: 10*/


app.get ('/calculadora', async (req, res) => {
    const {calculo, numeroUm, numeroDois} = req.query;
    const numero1=parseFloat(numeroUm)
    const numero2=parseFloat(numeroDois)

    let resultado;
    if (calculo=="soma") {
        resultado = numeroUm+numeroDois
    } if (calculo=="subtracao") {
        resultado = numeroUm-numeroDois
    } if (calculo=="multiplicacao") {
        resultado = numeroUm*numeroDois
    } if (calculo=="divisao") {
        resultado = numeroUm/numeroDois
    } else {
        console.log("EScreva uma operação correta!");
    }
        
    });

res.send (`O Resultado da operação ${calculo} é ${resultado}`)


app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
})