import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './Author';

function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
      </div>
    </section>
  );
}

function RelatedPost() {
  return (
    <Link href={"/"}> 
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <Image src={"/images/pexels-kaboompics-com-6469.jpg"} className="rounded" width={350} height={250} />
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel -</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">August 19, 2023</Link>
          </div>
          <div className="title">
            <Link href={"/"} className="text-xl font-bold text-gray-800 transition hover:text-gray-600">
              Crafting Ideas, Sharing Stories: Your Destination for Inspiring Blogs. Explore, Engage, Evolve.
            </Link>
          </div>
          <Author />
        </div>
      </div>
    </Link>
  );
}

export default Related;
