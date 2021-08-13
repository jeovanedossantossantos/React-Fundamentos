function geraNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max +1 - min)) + max

    return array.includes(aleatorio) ? geraNumeroNaoContido(min, max, array) : 
    aleatorio

    
}

function geraNumero(qtde) {

    const numero = Array(qtde)
    .fill(0)
    .reduce((nuns) => {
        const novoNumero = geraNumeroNaoContido(1, 60, nuns)
        return [...nuns, novoNumero]

    }, []).sort((n1, n2) => n1-n2)

    return numero
    
}