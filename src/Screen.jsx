import React from 'react'
import Header from './component/header/Header'
import Budget from './component/Budget/Budget'
import Expenditure from './component/Expenditure/Expenditure'
import AddExpendiute from './component/Expenditure/AddExpendiute'
import StoreData from './component/StoreData/StoreData'

export default function Screen() {
  return (
    <StoreData>
    <div className='screen'>
      <Header></Header>
      <Budget></Budget>
      <Expenditure></Expenditure>
      <AddExpendiute></AddExpendiute>
    </div>
    </StoreData>
  )
}
