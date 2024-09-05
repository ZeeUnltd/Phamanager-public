import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const testCartData = Array.from({ length: 10 }, () => {
  return {
  drugName:'Penicillin Ointment',
  pharmacy: 'Rx Pharmacy, Oshodi',
  details:'200mg l 1 Tube l 2 drops per use',
  description: 'Penicillin is used to treat and prevent minor skin infections caused by small cuts or burns.',
  price: 1000,
  id: Math.random()* 10 ,
  quantity : 5,
}
});

// function initialCart() { return JSON.parse(localStorage.getItem("Cart Item"))}
const initialState = {
  cart: testCartData,
  totalPrice: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/added":
      return { ...state, cart: [...state.cart, action.payload] };
    case "cart/deleted":
      return {
        ...state,
        cart: state.cart.filter((drug) => drug.id !== action.payload),
      };
    case 'cart/drug/increase-quantity':
      return {...state, cart: state.cart.map(function(drug)  {
        // drug.id === action.payload ?
        if(drug.id === action.payload) return drug.quantity + 1
      })};
    default:
      return "Action type not found";
  }
}

export function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem('Cart Item', JSON.stringify(cart))
  },[cart])


  //Adding drug to cart
  function addToCart(drug) {
    dispatch({ type: "cart/added", payload: drug });
  }

  //Deleting drug from cart
  function deleteFromCart(id) {
    dispatch({ type: "cart/deleted", payload: id });
  }
  function increaseQuantity(id){
    dispatch({type:'cart/drug/increase-quantity', payload:id})
  }


  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, increaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("useCart is used outside CartProvider");
  return context;
}
