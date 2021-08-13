/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
   



    function forncerInformacoes(nome, idade, nerd) {
        //console.log(nome, idade, nerd)
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        
    }
    return (
        <div>
            
            <span>{nome} </span>
            <span>{idade }</span>
            <span>{nerd ? "Veradeiro" : "falso"}</span>
            <IndiretaFilho quandoClicar={forncerInformacoes}></IndiretaFilho>
            
        </div>
    )
}