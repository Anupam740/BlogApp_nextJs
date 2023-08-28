import React from 'react'
import Image from "next/image";
import Link from  "next/link";
import Author from "../components/_child/Author"
import Spinner from "./_child/spinner"
import getPost from "../lib/helper";
import Error from "./_child/Error"
import fetcher from "../lib/fetcher"
function Section2() {
  const {data,isLoading,isError}=fetcher("api/posts")
  if(isLoading) return <Spinner/>
  if(isError) return <Error/>
  return (
    <div className='container mx-auto md:px-20 py-10'>
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value,index)=>(
            <Post data={value} key={index}></Post>
          ))
        }
      </div>
    </div>
  )
}

export default Section2;


function Post({data}){
  const {id,title, category, img,published,subtitle, author}=data;
    return(
        <div className="item">
            <div className="images">
            <Link href={`/posts/${id}`}><Image src={img || "/"} alt="img not found" className='rounded' width={500} height={350}/></Link>

            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href={`/posts/${id}`} className='text-orange-600 hover:text-orange-800'>{category}  -</Link>
                <Link href={`/posts/${id}`} className='text-gray-800 hover:text-gray-600'>{published}  </Link>
            </div>
            <div className="title">
                <Link href={`/posts/${id}`} className='text-xl font-bold text-gray-800 transition hover:text-gray-600'>{title}</Link>
                

            </div>
            <p className="text-gray-500 py-3">{subtitle}</p>
            {author ?<Author/> :<></> }

            </div>

        </div>
    )
}
