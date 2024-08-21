import React from 'react'
import './Form.css'

import iconCalculator from "../assets/mortgage-repayment-calculator-main/assets/images/icon-calculator.svg"

function Form(props) {

    return (
        <div className='Form--container'>
            <div className='Form--header'>
                <div className='Form--title'>
                    <h1>
                        Mortgage Calculator
                    </h1>
                </div>
                <div className='Form--clearAll' onClick={props.clearAll}>
                    <p>
                        Clear All
                    </p>
                </div>
            </div>
            <div className='Form--fillOut'>
                <div className='Form--mortgageAmount'>
                    <label htmlFor="MortgageAmount">Mortgage Amount</label>
                    <div className='Form--mortgageAmountDIV'>
                        <div className='Form--mortgageAmountIcon'>
                            <p>
                                €
                            </p>
                        </div>
                        <div className='Form--mortgageAmountInput'>
                            <input 
                                type="number" 
                                name="MortgageAmount" 
                                id="MortgageAmount" 
                                value={props.mortgageAmount}
                                onChange={(e) => props.setMortgageAmount(parseFloat(e.target.value))}
                            />
                        </div>   
                    </div>
                </div>
                <div className='Form--term--rate'>
                    <div className='Form--term'>
                        <label htmlFor="MortgageTerm">Mortgage Term</label>
                        <div className='Form--termDIV'>
                            <div className='Form--termInput'>
                                <input 
                                    type="number" 
                                    name="MortgageTerm" 
                                    id="MortgageTerm" 
                                    value={props.mortgageTerm}
                                    onChange={(e) => props.setMortgageTerm(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className='Form--termIcon'>
                                <p>
                                    years
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='Form--rate'>
                        <label htmlFor="InterestRate">Interest Rate</label>
                        <div className='Form--rateDIV'>
                            <div className='Form--rateInput'>
                                <input 
                                    type="number" 
                                    name="InterestRate" 
                                    id="InterestRate" 
                                    value={props.interestRate}
                                    onChange={(e) => props.setInterestRate(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className='Form--rateIcon'>
                                <p>
                                    %
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Form--mortgageType'>
                    <div>
                        <p>
                            Mortgage Type
                        </p>  
                    </div>
                    <div className='Form--mortgageTypeRepayment'>
                        <input 
                            type="radio" 
                            name="mortgageType" 
                            id="Repayment" 
                            value="Repayment"
                            checked={props.mortgageType === "Repayment"}
                            onChange={(e) => props.setMortgageType(e.target.value)}
                        />
                        <label htmlFor="Repayment">Repayment</label>
                    </div>
                    <div className='Form--mortgageTypeInterestOnly'>
                        <input 
                            type="radio" 
                            name="mortgageType" 
                            id="InterestOnly" 
                            value="InterestOnly"
                            checked={props.mortgageType === "InterestOnly"}
                            onChange={(e) => props.setMortgageType(e.target.value)}
                        />
                        <label htmlFor="InterestOnly">Interest Only</label>
                    </div>
                </div>
                <button className='Form--calculateRepayments' onClick={props.calculate}>
                    <img src={iconCalculator} alt="iconCalculator" />
                    <p>Calculate Repayments</p>
                </button>
            </div>
        </div>
    )
}

export default Form
