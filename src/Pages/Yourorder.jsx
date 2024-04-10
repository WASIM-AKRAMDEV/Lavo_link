import { useContext } from "react"
import { OrderContext } from "../Context/Order"

const YourOrders=()=>{
    const {OrdersData}=useContext(OrderContext)
    console.log("Orders Data",OrdersData)
    return(
        <div className="all-orders">
          <h2>Hi There</h2>
          
        </div>
    )
}
export default YourOrders