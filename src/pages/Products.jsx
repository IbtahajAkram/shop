import React, { useState, useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import "../assets/styles/Products.css";
import api from "../Axios/AxiosInterceptor";
import { TailSpin } from "react-loader-spinner";
const Products = () => {
  const [allproducts, setallproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
try {
  api.get("/products").then((res) => {
    setallproducts(res.data);
    console.log("products", res.data);
  });
} catch (error) {
  setError(true);
  setError(error)
}
     
      setloading(false)
    }, 5000);
  }, []);
  if (loading){
    return (
      <div style={{justifyContent:"center",display:"flex",alignContent:"center",marginTop:"270px",alignItems:"center"}} className="loading-spinner">
        <TailSpin strokeWidth={36} height="90" width="90" color="#4fa94d" ariaLabel="loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="products-grid">
        {allproducts?.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-inner">
              <span className="badge">{item.category}</span>
              <img className="product-image" src={item.image} alt={item.title} />
              <h2 className="product-title">{item.title}</h2>
              <div className="rating">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    fill={
                      idx < Math.floor(item.rating.rate) ? "currentColor" : "none"
                    }
                  />
                ))}
                <span className="text-white ml-2">{item.rating.rate}</span>
              </div>
              <p className="product-price">${item.price}</p>
              <div className="product-description">{item.description}</div>
              <button className="buy-button">
                <span className="flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
