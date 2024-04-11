import { useContext } from "react"
import { OrderContext } from "../Context/Order"
import { ethers } from "ethers"
import { useState } from "react"
import abi from '../Contract/abi/abi.json'
let a=[]
const YourOrders=()=>{
   const [data,setData]=useState([])
    const completeOrder=async(id)=>{
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract=new ethers.Contract("0xB5CACb6aC2A321710AeececC0Fb40625b404F646",abi,signer)
      const payment=ethers.parseEther("0.0085")
      await contract.completeOrder("0x3CF054dC8C404550d69af465c2eBcC1136a8AE6f",payment)
      a.push(id)
      console.log("A",a)
      setData(a)
      console.log("Datadfd",data)
    }
    const {OrdersData,completeOrders}=useContext(OrderContext)
    console.log(completeOrders)
    console.log("Orders Data",OrdersData)
    return(
        <div className="all-orders p-5">
          {
            OrdersData.map((item)=>{
              return(
                <div className="w-[100%]  border-2 shadow-md rounded-lg flex  overflow-hidden mt-4">
                <div className="w-[30%]">
                  <img src={item.image} alt="" className="w-full h-full" />
                </div>
               <div className="p-4 w-[70%]">
               <div className="title-price p-2">
               <h3 className="text-xl">{item.title}</h3>
               <h3 className=" font-semibold">Price:$30</h3>
               </div>
               <div className="description text-base ">
                <p>{item.description}</p>
               </div>
                 <div className="button flex justify-end p-2">
                 <button className="bg-sky-600 px-4 py-[6px] text[12px] text-white rounded-lg" onClick={()=>{
                    data.includes(item.title)?console.log(item.title):completeOrder(item.title)
                  }}>{data.includes(item.title)?"Completed":"Complete Order"}</button>
                 </div>
               </div>
              </div>
              )
            })
          }
        </div>
    )
}
export default YourOrders







