import './Result.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore  
import { calculateInvestmentResults, formatter } from '../../../util/investment'
interface ResultInfo {
    inputResult: { initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number }
}

export default function Result({ inputResult }: ResultInfo) {

    const annualData = calculateInvestmentResults(inputResult);
    console.log(annualData);

    const initialInvestment =
        annualData[0].valueEndOfYear -
        annualData[0].interest -
        annualData[0].annualInvestment;


    // if (annualData[0]) {
    //     var initialInvestment = //this works if using 'var' but i guess vars are disallowed? help
    //         annualData[0].valueEndOfYear -
    //         annualData[0].interest -
    //         annualData[0].annualInvestment;
    // }


    return (
        <table id='result'>
            <tbody>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                {annualData.map((yearlyData: { valueEndOfYear: number; annualInvestment: number; year: number; interest: number; }) => {
                    const totalInterest = yearlyData.valueEndOfYear -
                        yearlyData.annualInvestment *
                        yearlyData.year -
                        initialInvestment;
                    const totalAmountInvested = yearlyData.valueEndOfYear - totalInterest;

                    return <tr key={yearlyData.year}>
                        <td>{yearlyData.year}</td>
                        <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearlyData.interest)}</td>
                        <td>{formatter.format(initialInvestment)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}