import Header from './Components/Header/Header'
import Result from './Components/Result/Result'
import UserInputArea from './Components/UserInputArea/UserInputArea'
import { useState } from 'react'


function App() {

  const [input, setInput] = useState({
    'initialInvestment': 1000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10
  });

  function handleInput(inputName: string, inputText: number) {
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
      <Result inputResult={input} />
    </>
  )
}

export default App
