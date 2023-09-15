import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'


function App() {
  return (
    <>
    <GlobalProvider>
      <Header></Header>
      <Balance></Balance>
      <TransactionForm></TransactionForm>
       <div>Hello World</div>
    </GlobalProvider>
    </>
   
  )
}

export default App