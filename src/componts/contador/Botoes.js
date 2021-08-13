/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props => {
    return (
        <div>
            <button onClick={props.inc}></button>
            <button onClick={props.dec}></button>
        </div>
    )
}