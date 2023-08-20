import React from 'react'
import Image from "next/image"
import Link from  "next/link"

function Author({name,img,designation}) {
  if(!name && !img) return <></>
  return (
    <div className='author flex py-5'>
      <Image src='/images/anupSelf.png' width={60} height={20} className='rounded-full' alt='Author' />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600 ">{name || "No Name"}</Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>

      </div>
    </div>
  )
}

export default Author
