import React from "react";
import { useSelector } from "react-redux";

const WhishLists = () => {
  const getWhishList_Items = useSelector(
    (state) => state?.cartProducts?.whishList
  );
  console.log("itemWhishList", getWhishList_Items);
  return (
    <div className="">
      <h1 class="text-3xl font-bold py-[62px] bg-gray-50 font-serif text-gray-800  text-center">
        WhishList Products
      </h1>
      <div class="font-sans bg-gray-50 px-4 pb-12">
        <div class="mx-auto lg:max-w-6xl md:max-w-4xl">
          <div class="grid text-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {!getWhishList_Items.length ? (
              <h1 class="text-xl text-center flex items-center justify-center">
                No WhishList Items
              </h1>
            ) : (
              ""
            )}
            {getWhishList_Items?.map((Items) => {
              return (
                <div class="bg-white p-5 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div class="w-full overflow-hidden mx-auto">
                    <img
                      src={Items?.ProductImages}
                      alt="product1"
                      class="aspect-[108/82] w-full object-contain"
                    />
                  </div>
                  <div class="text-center mt-4">
                    <h3 class="text-sm font-bold text-gray-800">
                      {Items?.title}
                    </h3>
                    <h4 class="text-sm text-blue-600 font-bold mt-2">
                      ${Items?.price}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhishLists;
