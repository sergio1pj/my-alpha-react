import React from "react"
import './style.css'

function Buttons(props){

    return(
        <div className = 'buttons'>
            <button value = {'AC'} onClick = {(e) => props.calcula(e.target.value)}>AC</button>
            <button value = {'DEL'} onClick = {(e) => props.calcula(e.target.value)}> DEL </button>
            <button value = {'/'} onClick = {(e) => props.calcula(e.target.value)} className = "btn-operation"> / </button>
            <button value = {'*'} onClick = {(e) => props.calcula(e.target.value)} className = "btn-operation">*</button>
            
            <button value = {'7'} onClick = {(e) => props.calcula(e.target.value)}> 7 </button>
            <button value = {'8'} onClick = {(e) => props.calcula(e.target.value)}> 8 </button>
            <button value = {'9'} onClick = {(e) => props.calcula(e.target.value)}> 9 </button>
            <button value = {'-'} onClick = {(e) => props.calcula(e.target.value)} className = "btn-operation">-</button>

            <button value = {'4'} onClick = {(e) => props.calcula(e.target.value)}>4</button>
            <button value = {'5'} onClick = {(e) => props.calcula(e.target.value)}>5</button>
            <button value = {'6'} onClick = {(e) => props.calcula(e.target.value)}>6</button>
            <button value = {'+'} onClick = {(e) => props.calcula(e.target.value)} className = "btn-operation">+</button>

            <button value = {'1'} onClick = {(e) => props.calcula(e.target.value)}>1</button>
            <button value = {'2'} onClick = {(e) => props.calcula(e.target.value)}>2</button>
            <button value = {'3'} onClick = {(e) => props.calcula(e.target.value)}>3</button>
            <button value = {'='} onClick = {(e) => props.calcula(e.target.value)}>=</button>

            <button value = {'0'} onClick = {(e) => props.calcula(e.target.value)}>0</button>
            <button value = {'.'} onClick = {(e) => props.calcula(e.target.value)}>.</button>
            
        </div>
    )
}

export default Buttons