import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // console.log(cartItems);
    

    const handalCartItem = ( item ) => {        
        setCartItems((Items) => {
            if (Items.some((cartItem) => cartItem.product_id === item.product_id)) {
                return Items; 
            }
            return [...Items, item];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, handalCartItem }}>
            {children}
        </CartContext.Provider>
    );
};