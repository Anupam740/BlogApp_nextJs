import React from 'react'
import Image from "next/image";

function Error() {
  return (
    <div className="text-center  justify-center items-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
      <div className="item flex justify-center items-center">
      <Image src={"/images/errorImage.png"} width={400} height={400} className='  px-30' />
      </div>
      
    </div>
  )
}

export default Error
