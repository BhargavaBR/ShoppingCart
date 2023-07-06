import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductShow from "./Components/ProductShow";
import NotFound from "./Components/NotFound";
import CategoryContext from "./Context/CategoryContext";
import CartContextProvider from "./Context/Cart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  return (
    <div className="App">
      <CartContextProvider>
      <CategoryContext.Provider value={{selectedCategory}}>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
          <Route
            path="/"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route
            path="/categories/:category"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route path="/products/:productId" element={<ProductShow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CategoryContext.Provider>
        </CartContextProvider>
    </div>
  );
}


