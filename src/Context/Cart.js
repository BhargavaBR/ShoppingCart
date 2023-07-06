import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cart,setCart] = useState({});

    const addToCart = (product) =>{
        setCart((prevState) => {
            const newCart = {...prevState};
            if(!prevState[product.id]){
                newCart[product.id]={
                        id:product.id,
                        quantity : 1
                }
            }
            else{
                const newProduct = {...prevState[product.id]}
                newProduct.quantity += 1;
                newCart[product.id] = newProduct;
            }
            return newCart;
        });
    }

    const subtractFromCart =(product) => {
        setCart((prevState) => {
            const newCart = {...prevState};
            if(!prevState[product.id]) return newCart;
            else if(prevState[product.id].quantity === 1) {
                delete newCart[product.id];
            }
            else{
                const newProduct = {...prevState[product.id]};
                newProduct.quantity -= 1;
                newCart[product.id] = newProduct;
            }
            return newCart
        })
    }
    return (
        <CartContext.Provider value={{ cart,addToCart, subtractFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider