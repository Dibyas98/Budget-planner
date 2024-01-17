import React, { useContext } from 'react'
import './displayexpan.css'
import { X } from 'lucide-react';
import { Data } from '../StoreData/StoreData';
export default function DisplayExpen({item}) {
  const {handelDelete} =useContext(Data)
  return (
    <div className='displayexpans'>
      <p>{item.Name}</p>
      <div>
      <p>Rs.{item.Price} </p>
      <X className='cancel' onClick={()=>{handelDelete(item.id,item.Price)}}></X>
      </div>
    </div>
  )
}
