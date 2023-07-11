import {useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filter Expenses</label>
                <select value={filter}
                    onChange={e => setFilter(e.target.value)}>
                    <option value="">-- All --</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="pleasure">Pleasure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>
        </form>      
    </div>
  )
}

export default Filter
