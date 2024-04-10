import { createContext, useState } from "react";

export const OrderContext=createContext({
    OrdersData:"",
    setOrdersData:()=>{

    }
})
export const ContextOrder=({children})=>{
    const [Orders,setOrdersData]=useState([])
    const value={Orders,setOrdersData}
    return(
        <OrderContext.Provider value={value} >{children}</OrderContext.Provider>
    )
}