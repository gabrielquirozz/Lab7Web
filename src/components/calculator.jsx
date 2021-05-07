/* eslint-disable no-use-before-define */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-assignment */
/* eslint-disable react/button-has-type */
import React from 'react'

let operandoa = 0
let operandob = 0
const Calculator = () => {
  const style = {
    width: '30%',
    height: '80%',
    backgroundColor: 'black',
    marginTop: '5%',
    marginLeft: '35%',
    border: '5px solid',
  }
  const botones = {
    width: '100%',
    height: '70%',
    marginTop: '8%',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: '25% 25% 25% 25%',
  }
  const resultados = {
    width: '90%',
    height: '20%',
    backgroundColor: '2C2C2C',
    marginTop: '5%',
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'row',
  }
  const operaciones = {
    backgroundColor: 'F3AB24',
    border: '1px solid black',
  }
  const borrar = {
    backgroundColor: 'C2C0BD',
    border: '1px solid black',
  }
  const numeros = {
    backgroundColor: '595857',
    border: '1px solid black',
    color: 'white',
  }
  const display = {
    color: 'white',
    fontSize: '50px',
    textAlign: 'right',
    width: '80%',
    marginLeft: '15%',
  }
  const [actual, setActual] = React.useState('0')
  const [bandera, setBandera] = React.useState(false)
  const funcion = (numero) => {
    if (actual.length < 9 && bandera === true) {
      setActual((oldvalue) => {
        const newvalue = oldvalue + numero
        return newvalue
      })
    } else if (actual.length < 9 && bandera === false) {
      setActual((oldvalue) => {
        const newvalue = numero
        return newvalue
      })
      setBandera(true)
    }
  }
  // const [operandoa, setOperandoa] = React.useState(0)
  // const [operandob, setOperandob] = React.useState(0)
  const [operacion, setOperacion] = React.useState()

  const resolver = (signo) => {
    if (signo === '+') {
      setOperacion('+')
      // setOperandoa(parseFloat(actual))
      operandoa = parseFloat(actual)
    } else if (signo === '-') {
      setOperacion('-')
      // setOperandoa(parseFloat(actual))
      operandoa = parseFloat(actual)
    } else if (signo === '*') {
      setOperacion('*')
      // setOperandoa(parseFloat(actual))
      operandoa = parseFloat(actual)
    } else if (signo === '/') {
      setOperacion('/')
      // setOperandoa(parseFloat(actual))
      operandoa = parseFloat(actual)
    }
    setBandera(false)
  }
  const mandar = () => {
    // setOperandob(actual)
    operandob = parseFloat(actual)
    igual()
    setBandera(false)
  }
  const igual = () => {
    let res = 0
    if (operacion === '+') {
      res = parseFloat(operandoa) + parseFloat(operandob)
    }
    if (operacion === '-') {
      res = parseFloat(operandoa) - parseFloat(operandob)
    }
    if (operacion === '*') {
      res = parseFloat(operandoa) * parseFloat(operandob)
    }
    if (operacion === '/') {
      res = parseFloat(operandoa) / parseFloat(operandob)
    }
    const res2 = String(res)
    if (res2.length < 9) {
      setActual(String(res))
    } else if (res2.length > 9) {
      const len = res2.length
      const res3 = res2.substring(0, 9)
      setActual(res3)
    }
  }
  const limpiar = () => {
    setActual('0')
    // setOperandoa('0')
    // setOperandob('0')
    operandoa = 0
    operandob = 0
    setBandera(false)
  }
  return (
    <div style={style}>
      <div style={resultados}>
        <h1 style={display} id="resultado">{actual}</h1>
      </div>
      <div style={botones}>
        <button onClick={() => { funcion('1') }} style={numeros}>1</button>
        <button onClick={() => { funcion('2') }} style={numeros}>2</button>
        <button onClick={() => { funcion('3') }} style={numeros}>3</button>
        <button onClick={() => { resolver('+') }} style={operaciones}>+</button>
        <button onClick={() => { funcion('4') }} style={numeros}>4</button>
        <button onClick={() => { funcion('5') }} style={numeros}>5</button>
        <button onClick={() => { funcion('6') }} style={numeros}>6</button>
        <button onClick={() => { resolver('-') }} style={operaciones}>-</button>
        <button onClick={() => { funcion('7') }} style={numeros}>7</button>
        <button onClick={() => { funcion('8') }} style={numeros}>8</button>
        <button onClick={() => { funcion('9') }} style={numeros}>9</button>
        <button onClick={() => { resolver('*') }} style={operaciones}>*</button>
        <button onClick={() => { limpiar() }} style={borrar}>AC</button>
        <button onClick={() => { funcion('0') }} style={numeros}>0</button>
        <button onClick={() => { mandar() }} style={operaciones}>=</button>
        <button onClick={() => { resolver('/') }} style={operaciones}>/</button>
      </div>
    </div>
  )
}

export default Calculator
