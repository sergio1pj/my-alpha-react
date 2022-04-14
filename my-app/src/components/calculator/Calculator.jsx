import React, { useState } from 'react'
import './style.css'

import Display from '../display/display'
import Buttons from '../btn/buttons'

function Calculator(){
    const [numeroDisplay1, setNumeroDisplay1] = useState('')
    const [numeroDisplay2, setNumeroDisplay2] = useState('')
    const [operadorClicado, setOperadorClicado] = useState('') 
    const [resultado, setResultado] = useState('')

    const [operador, setOperador] = useState(false)
    const [operador2, setOperador2] = useState(true)
    const [primeiroClique, setPrimeiroClique] = useState(false)
    const [primeiroCalculo, setPrimeiroCalculo] = useState(false)

   
    const [calculo, setCalculo] = useState({
        'primeiroNum': '',
        'operador': '',
        'segundoNum': '',
        'ultimoNumero': ''
    })

    
    const recebeValores = (num) => {
        if(operador === false){
           
            if(primeiroCalculo){
                limpaValores(num, true)
                setPrimeiroCalculo(false)
            }if( num === '.'){
             
                calculo.primeiroNum += num
                setNumeroDisplay1(numeroDisplay1 + num)
                calculo.ultimoNumero = ''
                }else if (num === 'DEL'){
               
                setCalculo({ 
                    'primeiroNum': calculo.primeiroNum.slice(0, -1),
                    'operador': '',
                    'segundoNum': ''
                })
                setNumeroDisplay1(numeroDisplay1)   
            }else{ 
                
                calculo.primeiroNum += num
                setNumeroDisplay1(numeroDisplay1 + num)
                calculo.ultimoNumero = ''
            }
        }else{
            if (num === '.'){
              
                calculo.segundoNum += num
                setNumeroDisplay2(numeroDisplay2 + num)
            }else if(num === 'DEL'){
               
                setCalculo({
                    'primeiroNum': calculo.primeiroNum,
                    'operador': calculo.operador,
                    'segundoNum': calculo.segundoNum.slice(0, -1),
                })
            }else{
              
                calculo.segundoNum += num
                setNumeroDisplay2(numeroDisplay2 + num)
            }
        }
    }

   
    const recebeOperador = (num) => {
        calculo['operador'] = num
        setOperadorClicado(num)
        setOperador(true)
        setOperador2(false)

      
        if(primeiroClique){
            setCalculo({
            'primeiroNum': calculo.ultimoNumero,
            'operador': calculo.operador,
            'segundoNum': '',
            })
            setNumeroDisplay1(calculo.ultimoNumero)
            setNumeroDisplay2('')   
        }

        setPrimeiroClique(true)
    }

  
    const fazOperacao = (num) => {
      
        const operacoes = {
            '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
            '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
            '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
            '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
        }
        
     
        let result = operacoes[calculo['operador']](calculo.primeiroNum, calculo.segundoNum)
        calculo.ultimoNumero = result
        setResultado(result)

       
        setOperador2(true)
        setOperador(false)
        setPrimeiroCalculo(true)
    }

    
    const limpaValores = (num, calculaDnv) => {
        
        if(calculaDnv){ 
            setCalculo({
                'primeiroNum': num,
                'operador': calculo.operador,
                'segundoNum': '',  
            })

            setPrimeiroClique(false)
            setResultado('')
            setNumeroDisplay1('')
            setNumeroDisplay2('')
            setOperadorClicado('')
        }else{
            setCalculo({
                'primeiroNum': '',
                'operador': calculo.operador,
                'segundoNum': '',  
            })

            setPrimeiroClique(false)
            setResultado('')
            setNumeroDisplay1('')
            setNumeroDisplay2('')
            setOperadorClicado('')
        }
    }
    
    
    const mostraError = () => {
        setResultado('Error')
    }
 
    
    const calcula = (num) => {
        if (!isNaN(num) || num === '.' || num === 'DEL'){
            recebeValores(num)
        }else if ((num === '+' || num === '-' || num === '/' || num === '*' ) & operador2){
            recebeOperador(num)
        }else if(num === 'AC'){
            limpaValores()
        }else if(num === '='){
            if(calculo.segundoNum !== ''){
                fazOperacao(num)
            }else{
                mostraError()
            }
        }
    }

return(
    <section className = 'calculator'>
        <Display
            resultado = {resultado} 
            numero1 = {calculo.primeiroNum}
            numero2 = {calculo.segundoNum}
            operador = {operadorClicado}
        />
        <Buttons calcula = {calcula} />
  </section>
)
}

export default Calculator