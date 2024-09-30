import { productSliceInitialState } from "./Products.types";

const initialState: productSliceInitialState = {
  Data: [],
  isLoadingData: false,
  err: "",
  singleProduct: {
    id: "",
    name: "",
    data: {
      color: "",
      capacity: "",
      capacity_GB: "",
      price: 0,
      generation: "",
      year: 0,
      CPU_model: "",
      Hard_disk_size: "",
      Strap_Colour: "",
      Case_Size: "",
      Description: "",
      Screen_size: "",
    },
  },
};
export default initialState;
