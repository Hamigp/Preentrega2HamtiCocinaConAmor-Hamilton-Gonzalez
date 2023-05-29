import { useState } from "react";

export const useCart = () => {
	const [cartOrder, setCart] = useState([])

  const isInCart = (itemId) => 
    cartOrder.some((item) => item.id === itemId);
   
  const addToCart = (item, quantity) => {
    
    if (isInCart(item.id)) {
      setCart((prev) => {
       return prev.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          }
          return cartItem;
       
        });
      });
      
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
   
      };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };


   
  return {addToCart, isInCart,removeFromCart, clearCart,cartOrder}
}

