import BudgetControl from "./BudgetControl"
import NewBudget from "./NewBudget"

const Header = ({setExpenses, expenses, budget, setBudget, isValidBudget, setIsValidBudget}) => {
  return (
    <header>
      <h1>Cost planner</h1>
      {isValidBudget ? (
        <BudgetControl
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}/>
      ):(
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
      
    </header>
  )
}

export default Header
