import React, { useContext } from 'react'
import { Data } from '../StoreData/StoreData'
import DisplayExpen from './DisplayExpen'
import './expanditure.css'

export default function Expenditure() {
    const{data} = useContext(Data)
    return (
        <div className='expanditure'>
            <h1>Expenditure</h1>
            <div className='list-expan'>
            {data.length==0?<h1>Add Data To List . . . . .</h1>:
            data.map((item)=>{
                return <DisplayExpen key={item.id} item={item}/>
            })}
            </div>
        </div>
    )
}
