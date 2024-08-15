import React from 'react'

import "./Results.css"

import illustrationEmpty from "../assets/mortgage-repayment-calculator-main/assets/images/illustration-empty.svg"

function Results() {
    return (
        <div className='Results--container'>
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
        </div>
    )
}

export default Results