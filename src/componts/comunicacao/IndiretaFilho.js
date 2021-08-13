/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props => {
    
    const geraIdade = () =>parseInt(Math.random()*(70 - 50)) + 50
    const gerarNerd = () => Math.random()>0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={e => props.quandoClicar("João", geraIdade(), gerarNerd())
            }>Forncer Informações</button>
        </div>
    )
}