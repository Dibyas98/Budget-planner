import React, { useContext, useRef } from "react";
import "./addExpenditure.css";
import { Data } from "../StoreData/StoreData";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddExpendiute() {
  const { handelSave,checkvalidation,vali ,setval,budget} = useContext(Data);
  const notifyName = () => toast.warning("Enter Name");
  const notifyPrice = () => toast.warning("Enter Price");
  const notifyPricemore = () => toast.warning("Spent is more than Budget");
  if(vali.check){
    if(vali.Nam == 'name'){
      notifyName();
    }else if(vali.check == 'price'){
      notifyPrice();
    }else{
      notifyPricemore();
    }
    setval((prev) => ({ ...prev, check: false, Nam: '' }));

    
  }

  const nameRef = useRef();
  const priceRef = useRef();
  return (
    <div className="add-expanses">
      <h1>Add Expenditure</h1>
      <div className="add-expanses-input">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" ref={nameRef} max={budget} required/>
        </div>
        <div>
          <label htmlFor="">Cost</label>
          <input type="number" ref={priceRef} />
        </div>
      </div>
      <ToastContainer />
      <button
        className="button-7"
        onClick={() => {
          checkvalidation(nameRef.current.value,{
            Name: nameRef.current.value,
            Price: priceRef.current.value,
            id:nanoid()
          },priceRef.current.value );
          nameRef.current.value = "";
          priceRef.current.value = "";
        }}
      >
        Save
      </button>
      
    </div>
  );
}
