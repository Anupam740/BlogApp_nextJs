import React from 'react';
import Link from 'next/link';
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';

function Header() {
  return (
    <header className='bg-gray-500'>
      <div className='container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
          <input
            type='text'
            className='input-text'
            placeholder='Search...'
            style={{ color: 'gray' }} 
          />
        </div>

        <div className='shrink w-80 sm:order-2'>
          <Link href='/'>
            <span className='font-bold uppercase text-3xl'>WebSkitters</span>
          </Link>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <ImFacebook color='#888888' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <ImTwitter color='#888888' />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
              <ImYoutube color='#888888' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
