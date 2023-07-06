import { useCartContext } from "../Context/Cart";

const AddToCart = ({product}) => {
    const {cart,addToCart, subtractFromCart} = useCartContext()
    console.log("cart ",cart);
    const productInCart = cart[product.id];
    const handleAdd = (event) =>{
        addToCart(product);
        event.stopPropagation();
    }
    const handleSubtract = (event) => {
        subtractFromCart(product);
        event.stopPropagation();
    } 
    if(!productInCart){
        return (
            <button onClick={handleAdd} className="add-to-cart">Add To Cart</button>
        )
    }
    return (
        <div className="add-to-cart-container"> 
            <button onClick={handleSubtract} className="add">-</button>
            <span>{cart[product.id].quantity}</span>
            <button onClick={handleAdd} className="add">+</button>
        </div>
    )
}

export default AddToCart;