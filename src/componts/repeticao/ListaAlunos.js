/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import alunos from "../../data/Alunos"

export default props =>{
   

    const lis = alunos.map(aluno =>{
        return (
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} {aluno.nota}
            </li>
        );
    });
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {lis}
                
                
            </ul>
        </div>
    );
};