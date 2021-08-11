import React from 'react'

export default (props) =>{

    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min

    return(
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Minimo</strong> {props.min}</p>
            <p><strong>Valor Maximo</strong> {props.max}</p>
            <p><strong>Valor Escolhido:</strong> {aleatorio}</p>
            {/*Testes  */}
        </div>
    );
}
    