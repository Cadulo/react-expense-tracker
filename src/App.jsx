import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/Transactions/TransactionForm'
import TransactionList from './components/Transactions/TransactionList'

function App() {
  return (
    <>
    <GlobalProvider>
      <Header></Header>
      <Balance></Balance>
      <TransactionForm></TransactionForm>
      <TransactionList></TransactionList>
       <div>Hello World</div>
    </GlobalProvider>
    </>
   
  )
}

export default App