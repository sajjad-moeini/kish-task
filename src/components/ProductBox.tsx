import React from 'react'

function ProductBox() {
  return (
       <div className="w-full mx-auto flex justify-center items-center">
          <div className="bg-white w-64 h-64 mx-auto rounded-lg p-2 flex flex-col justify-between items-center">
            <div className="text-center text-black text-lg md:text-xl lg:text-2xl font-semibold">
              title
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <button className="text-white px-4 py-2 bg-blue-600 rounded-lg">
                  More ...
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-white px-4 py-2 bg-orange-600 rounded-lg">
                  Edit
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-white px-4 py-2 bg-red-600 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductBox