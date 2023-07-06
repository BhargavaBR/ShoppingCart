
import Product from "./Product";
import useApi from "../Hooks/useApi";
import { useParams } from "react-router-dom";

const ProductList = ({ defaultCategory }) => {
  const {category} = useParams();
  const selectedCategory =  category || defaultCategory ;
  const {data,loading} = useApi(`https://fakestoreapi.com/products/category/${selectedCategory}`);
  if (loading) return <div className="loader"></div>;
  else
    return (
      <div className="products">
        {data.map((product) => (
          <Product product={product}/>
        ))}
      </div>
    );
};

export default ProductList;
