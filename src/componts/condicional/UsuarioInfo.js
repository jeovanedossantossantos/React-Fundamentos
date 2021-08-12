import React from "react";
import F from "./F"

export default props =>{
    const usuario = props.usuario ||{}
    return(
        <div>
            <F test={usuario && usuario.nome}>
                Seja bem vindo {usuario.nome}!<br></br>
            </F>

            <F test={!usuario || usuario.nome}>
                Seja bem vindo Amigão!
            </F>


        </div>
    )
}