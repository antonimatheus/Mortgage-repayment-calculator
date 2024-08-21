import React, { useState } from 'react'
import './App.css'
import Results from './Main/Results'
import Form from './Main/Form'

function App() {
  
  const [res, setRes] = useState(0) // Estado para o valor da mensalidade
  const [totalRepayment, setTotalRepayment] = useState(0) // Estado para o total a ser pago
  const [mortgageAmount, setMortgageAmount] = useState(0) // Estado para o valor do empréstimo
  const [mortgageTerm, setMortgageTerm] = useState(0) // Estado para o prazo do empréstimo
  const [interestRate, setInterestRate] = useState(0) // Estado para a taxa de juros
  const [mortgageType, setMortgageType] = useState("Repayment") // Tipo de hipoteca, padrão é "Repayment"

  const calculate = () => {
    const monthlyRate = interestRate / 100 / 12; // Calcula a taxa de juros mensal
    let repayment;
    let total;

    if (mortgageType === "Repayment") { // Se o tipo de hipoteca for "Repayment"
      const numberOfPayments = mortgageTerm * 12; // Total de pagamentos
      repayment = mortgageAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)); // Calcula o valor da mensalidade
      total = repayment * numberOfPayments; // Calcula o total a ser pago
    } else if (mortgageType === "InterestOnly") { // Se o tipo de hipoteca for "InterestOnly"
      repayment = mortgageAmount * monthlyRate; // Calcula o valor da mensalidade (só juros)
      total = repayment * mortgageTerm * 12 + mortgageAmount; // Total a ser pago (juros + principal)
    }

    setRes(repayment.toFixed(2)); // Atualiza o estado da mensalidade
    setTotalRepayment(total.toFixed(2)); // Atualiza o estado do total a ser pago
  }

  const clearAll = () => {
    setMortgageAmount(0); // Limpa o valor do empréstimo
    setMortgageTerm(0); // Limpa o prazo do empréstimo
    setInterestRate(0); // Limpa a taxa de juros
    setMortgageType("Repayment"); // Reseta o tipo de hipoteca para "Repayment"
    setRes(0); // Limpa o valor da mensalidade
    setTotalRepayment(0); // Limpa o total a ser pago
  }

  return (
    <div className='container'>
      <div>
        <Form
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          calculate={calculate}
          clearAll={clearAll}  // Passa a função clearAll para o componente Form
        />
        <Results 
          res={res}
          totalRepayment={totalRepayment} // Passa o total a ser pago para o componente Results
        />
      </div>
    </div>
  )
}

export default App
