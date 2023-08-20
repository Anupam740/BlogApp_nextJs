import React from 'react';
import Link from 'next/link';
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';

function Header() {
  return (
    <header className='bg-gray-500'>
      <div className='xl:container xl:xm-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
          <input type='text' className='input-text' placeholder='Search...' />
        </div>
        
        <div className='shrink w-80 sm:order-2'>
          <Link href='/'>
            <span className='font-bold uppercase text-3xl'>WebSkitters</span>
          </Link>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6'>
            
            <Link href='https://facebook.com'><span >
              <ImFacebook color='#888888' />
            </span></Link>
            <Link href='https://twitter.com'><span >
              <ImTwitter color='#888888' />
            </span></Link>
            <Link href='https://youtube.com'><span >
              <ImYoutube color='#888888' />
            </span></Link>
          </div>
          
        </div>
        
      </div>
      
    </header>
  );
}

export default Header;
