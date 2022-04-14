import React from 'react'
import './style.css'

function Display(props){
    return (
        <div className = 'containerDisplay'>
            <p className = 'numbers'>{props.numero1} {props.operador} {props.numero2}</p>
            <p className = 'result'>{props.resultado}</p>
        </div>
    )
}

export default Display