import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function AddToCartBtn({product}){
const [added,setAdded] = useState(false)
const {addToCart} = useContext(CartContext)

function handleAdd(){
  addToCart(product)
  setAdded(true)
}

return(
  <>
  <button 
  className="btn btn-outline-dark rounded-pill px-4"
  onClick={handleAdd}
  >
    أضف للعربة
  </button>
  {added && (
        <h4 className="text-success mt-2">
          🛒 تمت إضافة المنتج إلى العربة بنجاح
        </h4>
      )}
  </>
)
}