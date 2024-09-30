import React, { useState } from "react";
import ChevDownIcon from "./Icons/ChevDownIcon";
import ChevUpIcon from "./Icons/ChevUpIcon";

function FilterProductsDropDown() {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const showDropDownHandler = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  return (
    <div
      className="px-4 py-2 bg-blue-600 rounded-lg text-white flex justify-around items-center gap-2 cursor-pointer relative"
      onClick={showDropDownHandler}
    >
      <div className="mb-1 text-lg">Filter Products</div>
      {
       isOpenDropDown ? <ChevUpIcon/> : <ChevDownIcon />
      }
      <div
        className={`absolute left-0 top-[90%] ${
          isOpenDropDown ? "h-fit opacity-100" : "h-[1px] opacity-0"
        } transition-all t05 !overflow-hidden w-full py-3 bg-stone-500 rounded-b-lg`}
      >
        {isOpenDropDown && (
          <>
            <div className="flex justify-around rounded-b-lg items-center text-white px-1 checkContainer">
              <div className="w-5/6 truncate">All Products</div>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
              />
            </div>
            <div className="flex justify-around rounded-b-lg items-center text-white px-1 checkContainer my-3">
              <div className="w-5/6 truncate">test1</div>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FilterProductsDropDown;
