import React, { useEffect, useState } from "react";
import ChevDownIcon from "./Icons/ChevDownIcon";
import ChevUpIcon from "./Icons/ChevUpIcon";
import { useAppDispatch, useAppSelector } from "../store";
import { filterProductsById, getAllProducts } from "../store/slices/Products/Products.extraReducer";
import { QueryGenerator } from "../Utils/queryGenerator";

function FilterProductsDropDown() {
  

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isShowAllProducts, setIsShowAllProducts] = useState(true);
  const [selectedProductsId, setSelectedProductsId] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { categoryData} = useAppSelector((state) => state.products);
  useEffect(() => {
    if (selectedProductsId.length === 0) dispatch(getAllProducts());
    else dispatch(filterProductsById({query:QueryGenerator(selectedProductsId)}))
    
  }, [selectedProductsId]);

  const showDropDownHandler = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  const selectShowAllProductsHandler = () => {
    setSelectedProductsId([]);
    setIsShowAllProducts(true);
    dispatch(getAllProducts());
  };

  const selectProductHandler = (id: string) => {
       setIsShowAllProducts(false);
       if(!selectedProductsId.includes(id)){
              setSelectedProductsId(prev => [...prev, id]);
       }else{
              const filteredIds = selectedProductsId.filter(number => number !== id)
              setSelectedProductsId(filteredIds)
       }
  };

  return (
    <div
      className="px-4 py-1 md:py-2 bg-blue-600 rounded-lg text-white flex justify-around items-center gap-2 cursor-pointer relative"
      onClick={showDropDownHandler}
    >
      <div className="mb-1 text-lg">Filter Products</div>
      {isOpenDropDown ? <ChevUpIcon /> : <ChevDownIcon />}
      <div
        className={`absolute left-0 top-[90%] ${
          isOpenDropDown ? "h-fit opacity-100" : "h-[1px] opacity-0"
        } transition-all t05 !overflow-hidden w-full py-3 bg-stone-500 rounded-b-lg`}
        onClick={(e) => e.stopPropagation()} 
      >
        {isOpenDropDown  && (
          <>
            <div className="flex justify-around rounded-b-lg items-center text-white px-1 ">
              <div className="w-5/6 truncate">All Products</div>
              <input
                type="checkbox"
                checked={isShowAllProducts}
                onChange={selectShowAllProductsHandler}
              />
            </div>
            {categoryData.map((product) => (
              <div
                className="flex justify-around rounded-b-lg items-center text-white px-1  my-3"
                key={product.id}
              >
                <div className="w-5/6 truncate">{product.name}</div>
                <input
                  type="checkbox"
                  checked={selectedProductsId.includes(product.id)}
                  onChange={(e) => selectProductHandler(product.id)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FilterProductsDropDown;
