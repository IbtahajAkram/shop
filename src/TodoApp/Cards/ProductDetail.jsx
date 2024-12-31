import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import "./productdetail.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../store/creatSlicer";
import {ArrowLeft, ArrowUpAZIcon, Link,} from "lucide-react";
const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProductDetail(res?.data);
        console.log("ProductDetail", res?.data);
        //  toast.success(`Product Detail of ${res?.data?.title}`)
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  }, []);

  return (
    <div>
      {/* <h1 className="text-center mt-7 text-3xl font-medium">Product Detail</h1> */}
     
      <div
        style={{
          marginLeft: "89px",
          marginTop: "104px",
          display: "flex",
          fontWeight: "bold",
        }}
      >
        <div className="flex font-normal gap-2 mr-9 items-center ">
        <ArrowLeft/>
          <NavLink to={'/'} >
         Back
          </NavLink>
      </div> 
        Product Detail &nbsp;{" "}
        <h1 className="text-gray-900 text-[15px] mt-[2px] font-medium">
          {" "}
          {`  / ${productDetail.category}`} &nbsp;{`/ ${productDetail.title}`}
        </h1>
      </div>
     
      <div class="font-sans mt-[55px] -ml-[88px]">
        <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
            <div class="w-full lg:sticky top-0 sm:flex gap-8">
              <div class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                <img
                  src={productDetail.thumbnail}
                  alt="Product1"
                  class="w-full cursor-pointer rounded-md outline"
                />
                <img
                  src={productDetail.thumbnail}
                  alt="Product2"
                  class="w-full hover:outline cursor-pointer rounded-md"
                />
                <img
                  src={productDetail.thumbnail}
                  alt="Product3"
                  class="w-full hover:outline cursor-pointer rounded-md "
                />
                <img
                  src={productDetail.thumbnail}
                  alt="Product4"
                  class="w-full hover:outline cursor-pointer rounded-md"
                />
              </div>
              <div className="outline w-[88%]  h-[383px] rounded-md items-center justify-center flex">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={2}
                  src={productDetail.thumbnail}
                  zoomSrc={productDetail.thumbnail}
                  alt="Product"
                  class="w-full outline rounded-md object-cover"
                />
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-800">
                {productDetail.title}
              </h2>
              <div class="flex flex-wrap gap-4 mt-4">
                <p class="text-gray-800 text-xl font-bold">
                  {productDetail.price}
                </p>
                <p class="text-gray-400 text-xl">
                  <span class="text-sm ml-1.5">{productDetail.category}</span>
                </p>
              </div>

              <div class="flex space-x-2 mt-4">
                {[...Array(5)].map((_, index) => {
                  const filled = index < productDetail.rating;
                  return (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        filled ? "fill-blue-600" : "black"
                      }`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  );
                })}
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">Sizes</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
                onClick={()=>{
                  const items = {
                    title:productDetail.title,
                    price:productDetail.price,
                    productImage:productDetail.thumbnail,
                    catagory:productDetail.category,
                    id:productDetail.id
                  }
                  dispatch(AddToCart(items))
                }}
              >
                Add to cart
              </button>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">About the item</h3>
                <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  <li>{productDetail.description}</li>
                </ul>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">Reviews(5)</h3>
                <div class="space-y-3 mt-4">
                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">
                      {productDetail.rating}
                    </p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-2/3 h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>
                </div>
                <NavLink to={'/'} >
                 <button
                  type="button"
                  class="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md"
                  >
                  Continue Shoping ...
                </button>
                  </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
