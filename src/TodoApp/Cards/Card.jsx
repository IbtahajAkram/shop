import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import {AddToCart, AddToWhishList} from '../../store/creatSlicer'
const Card = ({ Card }) => {
  const [filProducts, setFiltProduct] = useState("All");
  const [brand, setBrand] = useState();
  console.log("brand:", brand);
  console.log(filProducts);
  const categories = [...new Set(Card?.map((catagory) => catagory.category))];
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handlePriceFilter = (range) => {
    setSelectedPriceRange(range);
  };

  const dispatch = useDispatch();
  
  const [searchname, setSachName] = useState("");
  const filtProducts = Card?.filter((item) => {
    const isInCategory = filProducts === "All" || item.category === filProducts;
    const isInBrand = !brand || item.brand === brand;
    const searchName = !searchname || item.title === searchname;
    const isInPriceRange =
      !selectedPriceRange ||
      (selectedPriceRange === "0-100" &&
        item.price >= 0 &&
        item.price <= 100) ||
      (selectedPriceRange === "101-500" &&
        item.price > 100 &&
        item.price <= 500) ||
      (selectedPriceRange === "501-1000" &&
        item.price > 500 &&
        item.price <= 1000);

    return isInCategory && isInBrand && searchName && isInPriceRange;
  });

  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [isPriceMenuOpen, setPriceMenuOpen] = useState(false);
  const [isSortMenuOpen, setSortMenuOpen] = useState(false);
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the number of pages
  
  const totalPages = Math.ceil(filtProducts?.length / productsPerPage);
  // Slice products to show only the current page
  const currentProducts = filtProducts?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "62px",
          fontSize: "37px",
          fontFamily: "Arial, sans-serif",
          marginBottom: "33px",
        }}
      >
        {/* Our Products */}
      </h1>
      <aside className="w-64 hidden lg:block absolute h-auto rounded-sm bg-white border border-black/5 p-4">
        {/* Search Bar */}
        <div className="mb-6 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSachName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <SearchIcon style={{ marginLeft: "-32px" }} />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left text-gray-600 hover:text-gray-900 hover:font-medium">
                <ul className="space-y-2">
                  <button onClick={() => setFiltProduct("All")}>All</button>

                  {categories?.map((category, index) => (
                    <li key={index}>
                      <button
                        className="w-full text-left text-gray-600 hover:text-gray-900 hover:font-medium"
                        onClick={() => setFiltProduct(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </button>
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div
          style={{ lineHeight: "33px" }}
          className="mb-6 flex-col items-start "
        >
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Price:</h3>
          <div className="flex items-center">
            <input
              type="radio"
              name="priceRange"
              value="0-100"
              checked={selectedPriceRange === "0-100"}
              onChange={() => handlePriceFilter("0-100")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">0 to 100$</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="priceRange"
              value="101-500"
              checked={selectedPriceRange === "101-500"}
              onChange={() => handlePriceFilter("101-500")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">101 to 500$</span>
          </div>
          <input
            type="radio"
            name="priceRange"
            value="501-1000"
            checked={selectedPriceRange === "501-1000"}
            onChange={() => handlePriceFilter("501-1000")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">501 to 1000$</span>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Brands</h3>
          <div className=" text-left space-y-2">
            <label className="flex text-left  flex-col">
              <div className="mb-6">
                <div className="space-y-2">
                  {Card?.map((brand, index) => {
                    return (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        {brand?.brand ? (
                          <input
                            type="radio"
                            name="radio"
                            onChange={() => setBrand(brand.brand)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                        ) : (
                          ""
                        )}
                        <span className="text-gray-600">{brand.brand}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </label>
          </div>
        </div>
      </aside>
      <div className=" bg-slate-50 px-2 md:px-4 py-5 text-black">
      <div className="lg:hidden">
        <div className="flex flex-col gap-4 p-4">
          <button
            onClick={() => setCategoryMenuOpen(!isCategoryMenuOpen)}
            className="bg-[#007bff] text-white px-8 py-2 rounded-md"
          >
            Category
          </button>
          {isCategoryMenuOpen && (
            <ul className="space-y-2">
              {categories?.map((category) => (
                <li
                  key={category}
                  onClick={() => setFiltProduct(category)}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setPriceMenuOpen(!isPriceMenuOpen)}
            className="bg-[#007bff] text-white px-8 py-2 rounded-md"
          >
            Price Range
          </button>
          {isPriceMenuOpen && (
            <ul className="space-y-2">
              <li
                onClick={() => handlePriceFilter("0-100")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                0 to 100$
              </li>
              <li
                onClick={() => handlePriceFilter("101-500")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                101 to 500$
              </li>
              <li
                onClick={() => handlePriceFilter("501-1000")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                501 to 1000$
              </li>
            </ul>
          )}

          <button
            onClick={() => setSortMenuOpen(!isSortMenuOpen)}
            className="bg-[#007bff] text-white px-8 py-2 rounded-md"
          >
            Sort By
          </button>
          {isSortMenuOpen && (
            <ul className="space-y-2">
              <li
                onClick={() => handlePriceFilter("0-100")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Price: Low to High
              </li>
              <li
                onClick={() => handlePriceFilter("101-500")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Price: High to Low
              </li>
            </ul>
          )}

          {/* Search Bar */}
         
        </div>
      </div>
</div>

            {/* Filters and Search Bar */}
      

            {/* Price Range Filter */}
          

            {/* Sort By Filter */}
            <div className= " hidden md:block lg:block sm:block bg-slate-50 ml-6 text-white">
        <div className="max-w-7xl mx-auto px-3 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl none font-semibold">
              <a href="#" className="text-black hover:text-gray-300">
              </a>
            </div>

            {/* Filters and Search Bar */}
            <div className="flex items-center md:-ml-10 md:space-x-4">
              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setCategoryMenuOpen(!isCategoryMenuOpen)}
                  className="bg-[#007bff] text-white px-9 py-2 rounded-md focus:outline-none"
                >
                  Category
                </button>
                {isCategoryMenuOpen && (
                  <div className="absolute left-0 z-50 bg-white text-gray-800 shadow-lg rounded-md mt-1 w-48">
                    <ul>
                      {categories?.map((catagory) => {
                        return (
                          <li
                            onClick={() => setFiltProduct(catagory)}
                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {catagory}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <button
                  onClick={() => setPriceMenuOpen(!isPriceMenuOpen)}
                  className="bg-[#007bff] z-50 text-white px-8 py-2 rounded-md focus:outline-none"
                >
                  Price Range
                </button>
                {isPriceMenuOpen && (
                  <div className="absolute left-0 z-50 bg-white text-gray-800 shadow-lg rounded-md mt-1 w-48">
                    <ul>
                      <li
                        onClick={() => handlePriceFilter("0-100")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        0 to 100$
                      </li>
                      <li
                        onClick={() => handlePriceFilter("101-500")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        101 to 500$
                      </li>
                      <li
                        onClick={() => handlePriceFilter("501-1000")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        501 to 1000$
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Sort By Filter */}
              <div className="relative">
                <button
                  onClick={() => setSortMenuOpen(!isSortMenuOpen)}
                  className="bg-[#007bff] text-white px-11 py-2 rounded-md focus:outline-none"
                >
                  Sort By
                </button>
                {isSortMenuOpen && (
                  <div className="absolute z-50 left-0 bg-white text-gray-800 shadow-lg rounded-md mt-1 w-48">
                    <ul>
                      <li
                        onClick={() => handlePriceFilter("0-100")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Price: Low to High
                      </li>
                      <li
                        onClick={() => handlePriceFilter("101-500")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Price: High to Low
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex items-center">
                <input
                  type="text"
                  onChange={(e) => setSachName(e.target.value)}
                  placeholder="Search products..."
                  className="px-9 w-full py-2 rounded-md text-gray-800"
                />
                <SearchIcon style={{ marginLeft: "-32px", color: "black" }} />
              </div>
            </div>
          </div>
        </div>

      </div>
            {/* Search Bar */}
          


      <div className="font-sans mt-4  lg:ml-[193px] p-2 lg:max-w-6xl md:max-w-3xl">
        <div className="flex flex-row justify-center items-center flex-wrap md:ml-[74px] gap-5">
          {currentProducts?.map((Products, index) => (
            <div
              className="bg-white w-[288px] md:w-[310px]  flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all card"
              key={index}
            >
              <div className="w-full">
                <Link to={`/product-detail/${Products.id}`}>
                  <img
                    className="w-full object-cover object-top aspect-[230/307]"
                    src={Products.thumbnail}
                    alt={Products.title}
                  />
                </Link>
              </div>

              <div className="p-1 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                    {Products.title}
                  </h5>
                  <p className="mt-1 text-gray-500 truncate ">
                    {Products.description}
                  </p>
                  <div className="flex flex-wrap justify-between gap-2 mt-2">
                    <div className="flex gap-2">
                      <h6 className="text-sm sm:text-base font-bold text-gray-800">
                        ${Products.discountPercentage}
                      </h6>
                      <h6 className="text-sm sm:text-base text-gray-500">
                        <strike>${Products.price}</strike>
                      </h6>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)]?.map((_, i) => {
                          const filled = i < Products.rating; // Determine if the star should be filled
                          return (
                            <svg
                              key={i}
                              className={`w-[14px] h-[14px] ${
                                filled ? "fill-blue-600" : "fill-gray-300"
                              }`}
                              viewBox="0 0 14 13"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button  onClick={()=>{
                    const whishListItem = {
                      id:Products.id,
                      title:Products.title,
                      price:Products.price,
                      ProductImages:Products.thumbnail,
                      description:Products.catagory,
                    }
                    dispatch(AddToWhishList(whishListItem))
                  }}>
                  <div
                    className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                    title="Wishlist"
                  >
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      className="fill-pink-600 inline-block"
                      viewBox="0 0 64 64"
                      >
                      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                    </svg>
                  </div>
                      </button>
                  <button
                  onClick={()=>{
                    const items = {
                      title:Products.title,
                      price:Products.price,
                      productImage:Products.thumbnail,
                      catagory:Products.category,
                      id:Products.id
                    }
                    dispatch(AddToCart(items))
                }}
                    type="button"
                    className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-8 mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-2 mx-1  ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }  rounded-full`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-blue-500 text-white  rounded-full"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
        
            Next    </button>
      </div>
        </div>
    </>
  );
};

export default Card;
