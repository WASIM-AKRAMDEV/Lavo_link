import { createContext, useState } from "react";

export const OrderContext=createContext({
    OrdersData:"",
    setOrdersData:()=>{
    },
   completeOrders:"",
   setCompleteOrdersData:()=>{

   }

})
export const ContextOrder=({children})=>{
    const [OrdersData,setOrdersData]=useState([])
    const [completeOrders,setCompleteOrdersData]=useState([])

    const value={OrdersData,setOrdersData,completeOrders,setCompleteOrdersData}
    return(
        <OrderContext.Provider value={value} >{children}</OrderContext.Provider>
    )
}