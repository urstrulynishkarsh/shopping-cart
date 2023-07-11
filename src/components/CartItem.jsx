import {  FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {  toast } from 'react-hot-toast';
import {remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Removed Successfully")
  }
 
  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
            </div>
          </div>
         

        </div>

      </div>
    </div>
  );
};

export default CartItem;
