// Callback Multiplicar

function multiplicar(valores){
    return valores.reduce((valorInicial, valorAtual) => valorInicial * valorAtual);
}

// Callback Dividir

function dividir(valores){
    return valores.reduce((valorInicial, valorAtual) => valorInicial / valorAtual);
}

// Callback Somar

function somar(valores){
    return valores.reduce((valorInicial, valorAtual) => valorInicial + valorAtual);
}

// Callback Subtrair

function subtrair(valores){
    return valores.reduce((valorInicial, valorAtual) => valorInicial - valorAtual);
}

function zerarResultado(valores){
    valorAcumulado -= valorAcumulado;
    return valorAcumulado
}

module.exports = {multiplicar, dividir, somar, subtrair, zerarResultado}