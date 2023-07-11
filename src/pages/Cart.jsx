import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const [totalamount,settotalamount]=useState(0);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])




  return(
    <div>
    {
      cart.length>0?
      (<div>
       <div>
      {
      cart.map((item, index) => (
    <CartItem key={item.id} item={item} itemIndex={index} />
      ))
      }
      </div>
        <div>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>
          <div>
            <p>Total Amount : ${totalamount}</p>
            <button>Checkout Now</button>
          </div>
        </div>

      </div>):
      (<div>
        <h1>Your Cart is Empty</h1>
        <Link to={"/"}>
          <button>Shop Now</button>
        </Link>
      </div>)
    }  
    
  </div>);
};

export default Cart;
