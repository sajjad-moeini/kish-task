import "./App.css";
import FilterProductsDropDown from "./components/FilterProductsDropDown";
import ProductBox from "./components/ProductBox";

function App() {
  return (
    <div className="h-screen w-full bg-slate-800 px-4 md:px-16 lg:px-24 py-[5%]">
      <div className="flex justify-between">
        <div className="text-white text-xl md:text-3xl lg:text-5xl">
          Products
        </div>
        <FilterProductsDropDown />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto my-14 gap-8">
     <ProductBox/>
      </div>
    </div>
  );
}

export default App;
