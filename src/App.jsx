import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewExpense from './img/nuevo-gasto.svg'
import Filter from './components/Filter'






function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget'))?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ?
     JSON.parse(localStorage.getItem('expenses')): [] 
  )

  const [editExpense, setEditExpense] = useState({})
  const [filter, setFilter] = useState('')
  const [filtratedExpenses, setFiltratedExpenses] = useState([])

  useEffect(() => {
    if(Object.keys(editExpense).length>0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }

  }, [editExpense])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])
  
  useEffect(() => {
    const LSBudget = localStorage.getItem('budget') ?? 0
    if(LSBudget > 0){
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    if(filter){
      const filtratedExpenses = expenses.filter(exp => exp.category === filter)
      setFiltratedExpenses(filtratedExpenses)
    }
  }, [filter])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = expense => {
    if(expense.id){
      const updatedExpenses = expenses.map(expenseState => (
        expenseState.id === expense.id ? expense : expenseState
      ))
      console.log(expenses)
      setExpenses(updatedExpenses)
      setEditExpense({})
    }else{
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }
    console.log(expenses)
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteExpense = id =>{
    const updatedExpenses = expenses.filter(exp => exp.id !== id)
    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'fijar':''}>
      <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      expenses={expenses}
      setExpenses= {setExpenses}/>

      {isValidBudget && (
        <>
          <main>
            <Filter
              filter={filter}
              setFilter={setFilter}/>
            <ExpensesList 
              filtratedExpenses={filtratedExpenses}
              filter={filter}
              expenses= {expenses}
              setEditExpense= {setEditExpense}
              deleteExpense = {deleteExpense}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconNewExpense}
            alt='IconNewExpense'
            onClick={handleNewExpense}
            />
          </div>
        </>)
      }

      {modal && <Modal setModal = {setModal}
      animateModal={animateModal}
      setAnimateModal={setAnimateModal}
      saveExpense={saveExpense}
      editExpense= {editExpense}
      setEditExpense={setEditExpense}/>}
      
    </div>
  )
}

export default App
