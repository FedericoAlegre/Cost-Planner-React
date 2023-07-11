import {useEffect, useState} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({setIsValidBudget, setExpenses, setBudget, expenses, budget}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0)
        const totalAvailable = budget - totalSpent

        const newPercentage = (((budget-totalAvailable)/budget)*100).toFixed(2)
        
        setAvailable(totalAvailable)
        setSpent(totalSpent) 
        setTimeout(() => {
          setPercentage(newPercentage)  
        }, 1000);
    }, [expenses])

    const formatToCurrency = number => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () =>{
        const result = confirm('Are you sure you want to reset the App?')
        if(result){
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)            
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage > 100 ? 'red' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? 'red' : '#3B82F6'
                })}
                text={`${percentage}% spent `}/>
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app'
            type='button'
            onClick={handleResetApp}>Reset App</button>
            <p>
                <span>Budget:{" "}</span> {formatToCurrency(Number(budget))}
            </p>
            <p className={`${available < 0 ? 'negativo':''}`}>
                <span>Available:{" "}</span> {formatToCurrency(available)}
            </p>
            <p>
                <span>Spent:{" "}</span> {formatToCurrency(spent)}
            </p>
        </div>
      
    </div>
  )
}

export default BudgetControl
