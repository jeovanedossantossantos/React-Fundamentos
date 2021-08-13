/* eslint-disable import/no-anonymous-default-export */
import React ,{useState} from "react"
import "./Mega.css"


function geraNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

    return array.includes(aleatorio) ? geraNumeroNaoContido(min, max, array) :
        aleatorio


}

function geraNumero(qtde) {

    const numero = Array(qtde)
        .fill(0)
        .reduce((nuns) => {
            const novoNumero = geraNumeroNaoContido(1, 60, nuns)
            return [...nuns, novoNumero]

        }, []).sort((n1, n2) => n1 - n2);

    return numero;

}

export default props =>{

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroInicial = Array(qtde).fill(0)
    const [numeros, setNumero] = useState(numeroInicial )

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label htmlFor="">Quantidade de Número</label>
                <input min="6"
                max="17"
                type="number" value={qtde} 
                onChange={e => {setQtde(+e.target.value)
                    setNumero(geraNumero(+e.target.value))
                }}></input>
            </div>
            <button onClick={_ => setNumero(geraNumero(qtde))}>Gerar Números</button>
        </div>
    )
}