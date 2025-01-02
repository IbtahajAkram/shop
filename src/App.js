import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Todoapp from "./TodoApp/Todoapp";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import persistStores, { store } from "./App/store";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./TodoApp/Cards/Card";
import ProductDetail from "./TodoApp/Cards/ProductDetail";
import { GridLoader } from "react-spinners";
import ShopingCard from "./TodoApp/Cards/ShopingCard";
import Navbar from "./pages/Navbar";
import { CartProvider } from "./context/Context";
import { Provider } from "react-redux";
import { store } from "./store/stores";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import WhishLists from "./WhishLists";
import NotFoundPage from "./TodoApp/Cards/NotFoundPage";

// import Todoos from "./TodoApp/todonew/todoss";
// import { StateInClass } from "./1/StateInClass";
// import { ClassComponents } from "./1/ClasssCompo";
const App = () => {
  // const location = useLocation();
  const [apiData, setApiData] = useState([]);
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          setLoading(false);
          setApiData(res?.data?.products);
          // toast.success("SuccessFully Data Fectch");
          // console.log(res.data.products);
        })
        .catch((err) => {
          setLoading(false);

          setError(err.message);
          // toast.error(Error);
          console.log("Error:", err.message);
        });
    });
  }, []);
  if (Loading) {
    return (
      <div className="flex justify-center items-center mt-[250px]">
        <GridLoader loading={Loading} size={20} color={"#007bff"} />
      </div>
    );
  }
  return (
    <Router>
<Navbar/>
          <ToastContainer />
            <Routes>
              <Route path="/allproducts" element={<Card Card={apiData} />} />
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/product-detail/:id" element={<ProductDetail/>}/>
              <Route path="/shopingcart" element={<ShopingCard />} />
              <Route path="/whishlist" element={<WhishLists/>}/>
              <Route path="*" element={<NotFoundPage />} />
                          </Routes>
            <Footer/>
    </Router>
  );
};

export default App;
