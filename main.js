const express = require('express')
const app = require('express')();
const PORT = 3000;

/*3. Crie uma rota /operacao/:tipo onde tipo é a operação matemática (soma, subtracao, multiplicacao, divisao).
Os números numUm e numDois serão passados via query parameters.
Dica: utilize switch case.
A rota deve executar a operação e retornar o resultado.  */


app.get ('/calculadora/:tipo/:numeroUm/:numeroDois', async (req, res) => {
    const {calculo, numeroUm, numeroDois} = req.params;
    let resultado;
    if (tipo=="soma") {
        resultado = parseFloat(numeroUm) + parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)
    } if (tipo=="subtracao") {
        resultado = parseFloat(numeroUm)-parseFloat(numeroDois);
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)

    } if (tipo=="multiplicacao") {
        resultado = parseFloat(numeroUm)*parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é ${resultado}`)

    } if (tipo=="divisao") {
        resultado = parseFloat(numeroUm)/parseFloat(numeroDois)
        res.send (`O Resultado da operação ${calculo} é: ${resultado}`)
    } else {
        console.log("EScreva uma operação correta!");
    }
        
    });



app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
})