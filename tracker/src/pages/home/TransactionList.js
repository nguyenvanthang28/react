import React from 'react'
import './Home.css'
import useFirestore from '../../hooks/useFirestore'

const TransactionList = ({transactions}) => {
  const {response, deleteDocument} = useFirestore('transactions')

  console.log(response)
  return (
    <ul className="transactions">
        {transactions.map((transaction) =>(
            <li key={transaction.id}>
                <p className="name">{transaction.name}</p>
                <p className='amount'>${transaction.amount}</p>
                <button onClick={() => deleteDocument(transaction.id)}>X</button>
            </li>
        ))}
    </ul>
  )
}

export default TransactionList