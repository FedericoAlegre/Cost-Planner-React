import { useState } from "react"
import Message from "./Message"

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

  const [message, setMessage] = useState('')

  const handleBudget = e => {
    e.preventDefault()

    if(!budget || budget<0){
      setMessage("'"+ budget+"' is not a valid budget")
      setIsValidBudget(false)
      return
    }
    
    setMessage('')
    setIsValidBudget(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
            <label>Define budget</label>
            <input className="nuevo-presupuesto"
            type="number"
            placeholder="Add your budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}/>
            <input type="submit" value="Add"/>
        </div>
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  )
}

export default NewBudget
