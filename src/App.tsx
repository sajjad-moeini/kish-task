import "./App.css";
import FilterProductsDropDown from "./components/FilterProductsDropDown";
import ProductBox from "./components/ProductBox";
import { useAppDispatch, useAppSelector } from "./store";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { openModal, setModalType } from "./store/slices/Modal/ModalSlice";

function App() {
  const { Data, isLoadingData, err } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const showAddProductModal = () => {
    dispatch(setModalType({ type: "add" }));
    dispatch(openModal());
  };
  const products = [
    {
      id: "3",
      name: "Apple iPhone 12 Pro Max",
      data: {
        color: "Cloudy White",
        capacityGB: 512,
      },
    },
    {
      id: "5",
      name: "Samsung Galaxy Z Fold2",
      data: {
        price: 689.99,
        color: "Brown",
      },
    },
    {
      id: "10",
      name: "Apple iPad Mini 5th Gen",
      data: {
        capacity: "64 GB",
        screenSize: 7.9,
      },
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-800 px-4 md:px-16 lg:px-24 py-[5%] relative">
      <div className="flex justify-between">
        <div className="text-white text-2xl md:text-3xl lg:text-5xl">
          Products
        </div>
        <FilterProductsDropDown />
      </div>
      <div className="flex justify-end items-center my-5">
        <button
          className="text-lg text-white bg-blue-500 px-4 py-2 rounded-lg"
          onClick={showAddProductModal}
        >
          Add Product
        </button>
      </div>
      {err && (
        <div className="text-red-600 text-lg md:text-2xl my-7">{err}</div>
      )}
      {isLoadingData ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto my-14 gap-8  overflow-y-auto">
          {products?.map((product) => (
            <ProductBox {...product} key={product.id} />
          ))}
        </div>
      )}
      <Modal />
    </div>
  );
}

export default App;
