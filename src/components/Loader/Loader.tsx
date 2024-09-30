import React from 'react'

function Loader() {
  return (
       <div className="flex items-center justify-center min-h-screen">
       <div className="w-16 h-16 border-8 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
     </div>
  )
}

export default Loader