/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import alunos from "../../data/Alunos"

export default props =>{
    const li1 = (
        <li>
            {alunos[0].id} {alunos[0].nome} {alunos[0].nota}
        </li>
    )

    const lis = alunos.map(aluno =>{
        return (
            <li>
                {aluno.id} {aluno.nome} {aluno}
            </li>
        )
    })
    return(
        <div>
            <ul>
                {li1}
                <li>Carlos - 7</li>
                <li>Julia - 7.7</li>
                
            </ul>
        </div>
    )
}