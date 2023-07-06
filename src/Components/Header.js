
import { Link } from "react-router-dom";
import useApi from "../Hooks/useApi";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from "../Context/Cart";
const Header = ({ selectedCategory, setSelectedCategory }) => {
  const {data} = useApi("https://fakestoreapi.com/products/categories")
  const {cart} = useCartContext();

  const  totalCart = () =>{
    let total = 0;
    for(let obj in cart){
      total += cart[obj].quantity;
    }
    return total;
  }
  return (
    <div className="header-items">
      {data.map((category) => (
        <Link
          to={`categories/${category}`}
          key={category}
          className={
            "header-item " +
            (category === selectedCategory ? "header-item-selected" : "")
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Link>
      ))}
       <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon className="cart-length" />{totalCart()}
      </IconButton> 
    </div>
  );
};

export default Header;
