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
import DiretoPai from "./componts/comunicacao/DiretaPai"
import Indireta from "./componts/comunicacao/IndiretaPai"
import Input from "./componts/formulario/Input"
import Contador from "./componts/contador/Contador"
import Contador1 from "./componts/contador/Contador1"
import Mega from "./componts/mega/Mega"

export default () =>(

    <div className="App">
        <h1>Funadamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#27">

                <Mega></Mega>



            </Card>
            <Card titulo="#12 - Componente Contador1" color="#127">

                <Contador1 numeroInicial={10}></Contador1>
                <Contador1 numeroInicial={100}></Contador1>



            </Card>
            <Card titulo="#12 - Componente Contador" color="#227">

                <Contador numeroInicial={10}></Contador>
                <Contador numeroInicial={100}></Contador>



            </Card>
            <Card titulo="#11 - Componente controlado" color="#237">

                <Input></Input>



            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#247">

                <Indireta>

                </Indireta>



            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#257">

                <DiretoPai>

                </DiretoPai>
               


            </Card>

            <Card titulo="#08 - Redenização Condicional" color="#287">

                <ParOuImpar numero={21}>

                </ParOuImpar>
                <UsuarioInfo usuario={{nome:"Fernando"}}>
                

                </UsuarioInfo>

                
                
               { /*<UsuarioInfo usuario={{ email: "Fernando@fé.com" }}>


            </UsuarioInfo>*/}


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
