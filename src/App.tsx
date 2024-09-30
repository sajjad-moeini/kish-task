import "./App.css";
import FilterProductsDropDown from "./components/FilterProductsDropDown";


function App() {



  return (
    <div className="h-screen w-full bg-slate-800 px-4 md:px-16 lg:px-24 py-[5%]">
      <div className="flex justify-between">
        <div className="text-white text-xl md:text-3xl lg:text-5xl">
          Products
        </div>
        <FilterProductsDropDown/>
      </div>
    </div>
  );
}

export default App;
