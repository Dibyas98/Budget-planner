import React, { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Data = createContext(); //creating context
export default function StoreData({ children }) {
  // const [data , setData] =useState([])
  const [data, setData] = useState(() => {
    const locData = localStorage.getItem("data");
    return locData ? JSON.parse(locData) : [];
  });





  //initializing data in the
  const [total, settotal] = useState(() => {
    let sum = localStorage.getItem("total");
    return sum ? JSON.parse(sum) : 0;
  });




  const [budget, setBudget] = useState(()=>{
    let storbhud=localStorage.getItem('budget');
    return storbhud ? JSON.parse(storbhud):2000;
  });
  const handelBudget=(arg)=>{
    setBudget(arg)
    localStorage.setItem('budget',JSON.stringify(arg))
  }
  const handelSave = (arg) => {
    settotal((prev) => parseInt(prev) + parseInt(arg.Price));
    setData((prev) => [...prev, arg]);
    localStorage.setItem("data", JSON.stringify([...data, arg]));
    localStorage.setItem("total", JSON.stringify(total + parseInt(arg.Price)));
  };




  const handelDelete = (arg, price) => {
    setData(data.filter((item) => item.id !== arg));
    settotal((prev) => parseInt(prev) - parseInt(price));
    localStorage.setItem(
      "data",
      JSON.stringify(data.filter((item) => item.id !== arg))
    );
    localStorage.setItem("total", JSON.stringify(total - parseInt(price)));
  };



  const [vali, setval] = useState({check:false,Nam:''})
  const[error,seterror]=useState('')
  const checkvalidation = (arg1, arg2, arg3) => {

    if (arg1.length == 0) {
      setval((prev) => ({ ...prev, check: true, Nam: 'name' }));

    }
    else if (arg3.length == 0) {
      
      setval((prev) => ({ ...prev, check: true, Nam: 'price' }));

    }
    else if(arg3 > budget){
      setval((prev) => ({ ...prev, check: true, Nam: 'Moreprice' }));
    }
    else {
      handelSave(arg2)
    }
  };




  return (
    <Data.Provider
      value={{ data, setData, handelDelete, total, budget, checkvalidation, vali,setval,handelBudget }}
    >
      {children}
    </Data.Provider>
  );
}
