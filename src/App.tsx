
import "./App.css";
import FilterProductsDropDown from "./components/FilterProductsDropDown";
import ProductBox from "./components/ProductBox";
import {  useAppSelector } from "./store";
import Loader from "./components/Loader/Loader";

function App() {

  const { Data,isLoadingData ,err} = useAppSelector((state) => state.products);

 
  return (
    <div className="min-h-screen w-full bg-slate-800 px-4 md:px-16 lg:px-24 py-[5%]">
      <div className="flex justify-between">
        <div className="text-white text-2xl md:text-3xl lg:text-5xl">
          Products
        </div>
        <FilterProductsDropDown />
      </div>
      {
        err && <div className="text-red-600 text-lg md:text-2xl my-7">{err}</div>
      }
{
  isLoadingData? <Loader/>:(
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto my-14 gap-8  overflow-y-auto">
    {Data?.map((product) => (
      <ProductBox {...product} key={product.id} />
    ))}
  </div>
  )
}
     
    </div>
  );
}

export default App;
