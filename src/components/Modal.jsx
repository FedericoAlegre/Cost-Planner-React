import { useState, useEffect } from 'react'
import CloseBtn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({saveExpense, setModal, animateModal, setAnimateModal, editExpense, setEditExpense}) => {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState("")
    const [msg, setMsg] = useState("")
    const [id, setId] = useState("")
    const [date, setDate] = useState("")

    const closeModal = () => {
        setModal(false)
        setAnimateModal(false)
        setEditExpense({})
    }

    useEffect(()=>{
        if(Object.keys(editExpense).length>0) {
            setName(editExpense.name)
            setQuantity(editExpense.quantity)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()

        if([name, quantity, category].includes('')){
            setMsg("All fields are required")
            setTimeout(() => {
                setMsg("")
            }, 1500);
            return
        }

        saveExpense({name, quantity, category , id, date})
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn}
                    alt='Close modal'
                    onClick={closeModal}/>
            </div>

            <form 
            onSubmit={handleSubmit}
            className={`formulario ${animateModal ? "animar": "cerrar"}`}>
                <legend>{editExpense.name ? 'Edit Expense': 'New Expense'}</legend>
                {msg && <Message type="error">{msg}</Message>}

                <div className='campo'>
                    <label htmlFor='name'>Expense Name</label>
                    <input
                        id="name"
                        type='text'
                        placeholder='Expense Name'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='quantity'>Quantity</label>
                    <input
                        id="quantity"
                        type='number'
                        placeholder='Expense Quantity'
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}  
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='category'>Category</label>
                    <select id='category'
                            value={category}
                            onChange={e => setCategory(e.target.value)} >
                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="pleasure">Pleasure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input type="submit"
                    value={editExpense.name ? 'Save Changes': 'Add Expense'}/>
            </form>
        </div>
    )
}

export default Modal
