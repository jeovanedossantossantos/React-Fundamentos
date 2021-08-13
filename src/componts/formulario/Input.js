import React, {useState} from "react"
import "./Input.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        //console.log(e)
        setValor(e.target.value)
        
    }
    return(
        <div className="Input"> 
            <h2>{valor}</h2>
            <div style={{
                display:'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly></input>
                <input value={undefined} ></input>
            </div>
        </div>
    )
}