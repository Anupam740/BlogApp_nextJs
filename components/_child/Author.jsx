import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Author({ name, img, designation }) {
  if (!name && !img) return null;
  return (
    <Link href='/' passHref>
      <div className='author flex py-5 cursor-pointer'>
        <Image src={img || '/images/anupSelf.png'} width={60} height={60} className='rounded-full' alt='Author' />
        <div className='flex flex-col justify-center px-4'>
          <span className='text-md font-bold text-gray-800 hover:text-gray-600'>{name || 'No Name'}</span>
          <span className='text-sm text-gray-500'>{designation || 'CEO and Founder'}</span>
        </div>
      </div>
    </Link>
  );
}

export default Author;
