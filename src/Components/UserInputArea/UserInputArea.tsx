import { useState, ChangeEvent } from 'react';
import './UserInputArea.css'

interface UserInputInfo {
    onChangeInput: (inputName: string, input: string) => void,
    inputText: { initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number }
}

export default function UserInputArea({ inputText, onChangeInput }: UserInputInfo) {

    const [input, setInput] = useState('');

    function getInput(e: ChangeEvent<HTMLInputElement>, inputName: string) {
        setInput(e.target.value);
        onChangeInput(inputName, input);
    }

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="text" name='InitialInvestment' onChange={(e) => getInput(e, 'initialInvestment')} />
                </p>


                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="text" name='AnnualInvestment' onChange={(e) => getInput(e, 'annualInvestment')} />
                </p>
            </div >

            <p>InitialInvestment: {inputText.initialInvestment}</p>
            <p>AnnualInvestment: {inputText.annualInvestment}</p>

            <div className='input-group'>
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" name='ExpectedReturn' onChange={(e) => getInput(e, 'expectedReturn')} />
                </p>

                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name='Duration' onChange={(e) => getInput(e, 'duration')} />
                </p>


            </div >
            {/* <p>ExpectedReturn: {inputText.expectedReturn}</p>
            <p>Duration: {inputText.duration}</p> */}
        </section>
    )
}