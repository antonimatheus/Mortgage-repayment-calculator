import React from 'react'
import "./Results.css"
import illustrationEmpty from "../assets/mortgage-repayment-calculator-main/assets/images/illustration-empty.svg"

function Results(props) {
    return (
        <div className='Results--container'>
            {props.res ? 
            <div className='Results--res'>
                <div className='Results--res--h1'>
                    <h1>
                        Your results
                    </h1>
                </div>
                <div className='Results--res--text'>
                    <p>
                        Your results are shown below based on the information you provided. 
                        To adjust the results, edit the form and click “calculate repayments” again.
                    </p>
                </div>
                <div className='Results--res--form'>
                    <div className='Results--res--monthlyRepayment'>
                        <div>
                            <p>
                                Your monthly repayments
                            </p>
                        </div>
                        <div>
                            <h1>
                                €{props.res}
                            </h1>
                        </div>
                    </div>

                    <div className='Results--res--formLine'>

                    </div>

                    <div className='Results--res--totalRepayment'>
                        <div>
                            <p>
                                Total You'll Repay Over the Term
                            </p>
                        </div>
                        <div>
                            <h3>
                                €{props.totalRepayment}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            :

            <div className='Results--containerDIV'>
                <div className='Results--img'>
                    <img src={illustrationEmpty} alt="" />
                </div>
                <div className='Results--title'>
                    <h1>
                        Results shown here
                    </h1>
                </div>
                <div className='Results--text'>
                    <p>
                        Complete the form and click “calculate repayments” to see what
                        your monthly repayments would be.
                    </p>
                </div>
            </div>
        }
        </div>
    )
}

export default Results
