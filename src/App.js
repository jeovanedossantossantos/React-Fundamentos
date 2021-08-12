/* eslint-disable import/no-anonymous-default-export */


import "./App.css"
import React from "react"



import Aleatorio from './componts/basicos/Aleatorio'
import Primeiro from "./componts/basicos/Primeiro"
import ComParametro from "./componts/basicos/ComParametro"
import Fragmento from "./componts/basicos/Fraguimentos"
import Card from './componts/layout/Card'
import Familia from "./componts/basicos/Familia"
import FamiliaMembro from "./componts/basicos/FamiliaMembro"
import ListaAlunos from "./componts/repeticao/ListaAlunos"
import TabelaProdutos from "./componts/repeticao/TabelaProdutos"
import ParOuImpar from "./componts/condicional/ParOuImpar"
import UsuarioInfo from "./componts/condicional/UsuarioInfo"

export default () =>(

    <div className="App">
        <h1>Funadamentos React</h1>

        <div className="Cards">
            <Card titulo="#08 - Redenização Condicional" color="#287">

                <ParOuImpar numero={21}>

                </ParOuImpar>
                <UsuarioInfo usuario={{nome:"Fernando"}}>
                

                </UsuarioInfo>
                
                <UsuarioInfo usuario={{ email: "Fernando@fé.com" }}>


                </UsuarioInfo>


            </Card>
            <Card titulo="#07 -Desafio" color="#302">

                <TabelaProdutos>

                </TabelaProdutos>
                

            </Card>
            <Card titulo="#06 - Repetição" color="#205">
                <ListaAlunos></ListaAlunos>
                
            </Card>
            <Card titulo="#05 - Componenete com Filhos" color="#085">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Lovi"  />
                    <FamiliaMembro nome="Pedryo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={10} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmaento" color="yellow">
                <Fragmento />

            </Card>
            <Card titulo="#02 - Aleatorio" color="blue">
                <Aleatorio min={10} max={60}></Aleatorio>

            </Card>


            <Card titulo="#01">
                <Fragmento></Fragmento>
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}>

                </ComParametro>
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
)
