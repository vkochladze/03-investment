import { useState, ChangeEvent } from 'react';
import './UserInputArea.css'

interface UserInputInfo {
    onChangeInput: (inputName: string, input: number) => void,
    inputText: { initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number }
}

export default function UserInputArea({ onChangeInput }: UserInputInfo) {

    const [input, setInput] = useState(0);

    function getInput(e: ChangeEvent<HTMLInputElement>, inputName: string) {
        // console.log(onChangeInput);

        setInput(parseInt(e.target.value));
        onChangeInput(inputName, input);
    }

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="text" name='InitialInvestment' onBlur={(e) => getInput(e, 'initialInvestment')} />
                </p>


                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="text" name='AnnualInvestment' onBlur={(e) => getInput(e, 'annualInvestment')} />
                </p>
            </div >

            {/* <p>InitialInvestment: {inputText.initialInvestment}</p>
            <p>AnnualInvestment: {inputText.annualInvestment}</p> */}

            <div className='input-group'>
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" name='ExpectedReturn' onBlur={(e) => getInput(e, 'expectedReturn')} />
                </p>

                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name='Duration' onBlur={(e) => getInput(e, 'duration')} />
                </p>


            </div >
            {/* <p>ExpectedReturn: {inputText.expectedReturn}</p>
            <p>Duration: {inputText.duration}</p> */}
        </section>
    )
}