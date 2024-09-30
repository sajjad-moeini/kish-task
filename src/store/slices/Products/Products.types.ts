export type ProductsData ={
 color?:string
 capacity?:string
 capacity_GB?:string
 price?:number
 generation?:string
 year?:number
 CPU_model?:string
 Hard_disk_size?:string
 Strap_Colour?:string
 Case_Size?:string
 Description?:string
 Screen_size?:string

}| null

export type Product = {
       id:string,
       name:string,
       data:ProductsData
}

export type AllProducts =Product[]

export type productSliceInitialState = {
       isLoadingData:boolean
       Data:AllProducts,
       err:string,
       singleProduct:Product
       singleProductLoading:boolean
       categoryData:AllProducts
}

export type errMessage ={
       message:string
}

export type newProduct={
       name:string
       data:{
              year:number
              price:number
              CPU_model:string
              Hard_disk_size:string
       }
}

export type editProductReqest = {
       name:string
       data:{ name: string; data: { [key: string]: string | number; }; }
}