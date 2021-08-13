/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import DiretaFilho from "./DiretaFilha"

export default props =>{
    return(
        <div>
            <DiretaFilho texto="Filho 1" numero={20}  bool={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero={10} bool={false}></DiretaFilho>
        </div>
    )
}