import React from "react";
import F, { Else } from "./F";

export default (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
            <F test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </F>
        </div>
    );
};