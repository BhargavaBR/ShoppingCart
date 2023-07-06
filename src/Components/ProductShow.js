import { useNavigate, useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import { useContext } from "react";
import CategoryContext from "../Context/CategoryContext";
import AddToCart from "./AddToCart";

const ProductShow = () => {
  const navigate = useNavigate();
  const {selectedCategory} = useContext(CategoryContext)
  const {productId} = useParams();
    const {data,loading} = useApi(`https://fakestoreapi.com/products/${productId}`);
    const handleBack = () =>{
      navigate(`/categories/${selectedCategory}`)
    }
    if(loading) return <div className="loader"></div>
    else {
      return (
        <div className="product-show" key={data.id}>
        <button className="product-show-btn" onClick={handleBack}>X</button>
        <img src={data.image} alt={data.title} className="image" />
        <div className="product-show-description">
          <div className="product-show-title">{data.title}</div>
          <div className="product-body product-show-body">
            <div className="product-show-price">$ {data.price}</div>
            <AddToCart  product = {data} />
          </div>
        </div>
      </div>
    )
      }
}

export default ProductShow;