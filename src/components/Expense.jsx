import { useState } from "react"
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from "../helpers"
import FoodIcon from "../img/icono_food.svg"
import HouseIcon from "../img/icono_house.svg"
import SavingsIcon from "../img/icono_savings.svg"
import PleasureIcon from "../img/icono_pleasure.svg"
import HealthIcon from "../img/icono_health.svg"
import SubsIcon from "../img/icono_subscription.svg"

const Icons = {
    savings: SavingsIcon,
    food: FoodIcon,
    house: HouseIcon,
    health: HealthIcon,
    subscription: SubsIcon,
    pleasure: PleasureIcon
}

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
                <img src={Icons[expense.category]}
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
