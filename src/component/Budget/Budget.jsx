import React, { useContext } from 'react'
import './budget.css'
import { Data } from '../StoreData/StoreData'
export default function Budget() {
  const {total,budget,handelBudget} =useContext(Data)
  return (
    <div className='budget'>
      <div>
      <p>Budget: </p>
      <input type="number" value={budget} onChange={(e)=>{handelBudget(e.target.value)}}/>
      </div>
      <p>Remaining: <span>{budget-total}</span></p>
      <p>Spent so far: <span>{total}</span></p>
    </div>
  )
}
