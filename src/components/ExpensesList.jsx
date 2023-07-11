import {useState} from 'react'
import Expense from './Expense'

const ExpensesList = ({expenses,
    setEditExpense,
    deleteExpense,
    filter,
    filtratedExpenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        {
          filter ? (
            <>
                <h2>{filtratedExpenses.length ? 'Expenses' : `There are no ${filter} expenses`}</h2>
                {filtratedExpenses.map(expense =>(
                  <Expense key= {expense.id}
                  expense = {expense}
                  setEditExpense= {setEditExpense}
                  deleteExpense ={deleteExpense}
                  />
                ))}
            </>

          ):
        (
          <>
          <h2>{expenses.length ? 'Expenses' : 'There are no expenses'}</h2>
            {expenses.map(expense =>(
              <Expense key= {expense.id}
              expense = {expense}
              setEditExpense= {setEditExpense}
              deleteExpense ={deleteExpense}
              />
            ))}
          </>
        )
        }
    </div>
  )
}

export default ExpensesList
