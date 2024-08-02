import Header from './Components/Header/Header'
import Result from './Components/Result/Result'
import UserInputArea from './Components/UserInputArea/UserInputArea'
import { useState } from 'react'


function App() {

  const [input, setInput] = useState({
    'initialInvestment': 0,
    'annualInvestment': 0,
    'expectedReturn': 0,
    'duration': 0
  });

  function handleInput(inputName: string, inputText: string) {
    setInput(prevInput => {
      return {
        ...prevInput,
        [inputName]: inputText
      }
    })
  }

  return (
    <>
      <Header />
      <UserInputArea onChangeInput={handleInput} inputText={input} />
      <Result />
    </>
  )
}

export default App
