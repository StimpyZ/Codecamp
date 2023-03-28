import './App.css'
import freeCodeCampIMG from './assets/freecodecamp-img-logo.svg'
import ButtonClear from './components/container/buttonClear'
import Buttons from './components/container/buttons'
import Input from './components/container/input'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App () {
  const [input, setInput] = useState('')
  const isOperator = (char) => /[+*-/]/.test(char)

  const addInput = (val) => {
    const lastChar = input.slice(-1)
    if (val === '.' && lastChar === '.') return val
    if (isOperator(val) && isOperator(lastChar)) {
      setInput(input.slice(0, -1) + val)
    } else {
      setInput(input + val)
    }
  }

  const calculateResult = () => {
    try {
      const lastChar = input.slice(-1)
      if (isOperator(lastChar)) {
        return setInput(input.slice(0, -1))
      }
      const result = evaluate(input)
      if (isNaN(result)) {
        return ''
      } else {
        setInput(result.toString())
      }
    } catch (error) {
      console.error(error)
      setInput('Error!')
      setTimeout(() => {
        setInput('')
      }, 1000)
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-img-container'>
        <img
          src={freeCodeCampIMG}
          className='freecodecamp-img'
          alt='freecodecamp logo'
        />
      </div>
      <div className='calculator-container'>
        <Input input={input} />
        <div className='row'>
          <Buttons driveClick={addInput}>1</Buttons>
          <Buttons driveClick={addInput}>2</Buttons>
          <Buttons driveClick={addInput}>3</Buttons>
          <Buttons driveClick={addInput}>+</Buttons>
        </div>
        <div className='row'>
          <Buttons driveClick={addInput}>4</Buttons>
          <Buttons driveClick={addInput}>5</Buttons>
          <Buttons driveClick={addInput}>6</Buttons>
          <Buttons driveClick={addInput}>-</Buttons>
        </div>
        <div className='row'>
          <Buttons driveClick={addInput}>7</Buttons>
          <Buttons driveClick={addInput}>8</Buttons>
          <Buttons driveClick={addInput}>9</Buttons>
          <Buttons driveClick={addInput}>*</Buttons>
        </div>
        <div className='row'>
          <Buttons driveClick={calculateResult}>=</Buttons>
          <Buttons driveClick={addInput}>0</Buttons>
          <Buttons driveClick={addInput}>.</Buttons>
          <Buttons driveClick={addInput}>/</Buttons>
        </div>
        <div className='row'>
          <ButtonClear driveClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
