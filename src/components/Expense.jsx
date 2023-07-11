import { useState } from "react"
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from "../helpers"


const Expense = ({expense, setEditExpense, deleteExpense}) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() =>setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions= () =>(
        <TrailingActions>
            <SwipeAction onClick={() => deleteExpense(expense.id)}
            destructive={true}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className="gasto sombra">
                
            <div className="contenido-gasto">
                <img src={`src/img/icono_${expense.category}.svg`}
                alt="icon-expense"></img>
                <div className="descripcion-gasto">
                    <p className="categoria">{expense.category}</p>
                    <p className="nombre-gasto">{expense.name}</p>
                    <p className="fecha-gasto">
                        <span>{formatDate(expense.date)}</span>
                    </p>
                </div>        
            </div>
            <p className="cantidad-gasto">${expense.quantity}</p>
            </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
