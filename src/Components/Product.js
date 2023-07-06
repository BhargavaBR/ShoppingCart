
import { useNavigate } from "react-router-dom";
import AddTCart from "./AddToCart";

const Product = ({product}) => {
    const navigate = useNavigate()
    const HandleClick = () =>{
        navigate(`/products/${product.id}`)
    } 
        return (
        <div onClick={HandleClick} key={product.id} className="product">
            <img className="image" src={product.image} alt={product.title} />
            <div className="product-title">{product.title}</div>
            <div className="product-body">
              <span> $ {product.price}</span>
              <AddTCart product ={product}/>
            </div>
        </div>
    )
        
}

export default Product;