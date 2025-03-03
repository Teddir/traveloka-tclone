import Navbar from '@/components/atoms/navbar';
import Image from 'next/image'
import React from 'react'
import NavbarBody from '@/components/atoms/navbar.body';
import Rediscover from '@/components/atoms/rediscover';
import Mostcities from '@/components/atoms/mostcities';
import Guides from '@/components/atoms/guides';
import Kickstart from '@/components/atoms/kickstart';

export default function page() {
  return (
    <>
      <section className='lg:flex hidden w-full flex-col'>
        <div className='max-h-[37.5rem] overflow-hidden relative'>
          <Image
            src={'/banner.jpeg'}
            sizes='100vw'
            alt='banner-tv'
            width={0}
            height={0}
            className='w-full h-auto bg-center bg-cover'
          />
        </div>
        <div className='absolute w-full h-full z-10 top-0 '>
          <Navbar />
          <NavbarBody />
        </div>
        <div className='max-w-[76rem] mx-auto flex flex-col gap-8 p-5'>
          <Rediscover />
          <Mostcities />
          <div className='flex flex-col gap-12'>
            <Guides />
            <Kickstart />
          </div>
        </div>
      </section>
      <section className='lg:hidden flex justify-center items-center w-full min-h-screen'>
        <p className='text-[#CDD0D1]'><span className='text-gray-800'>(only PC / Laptop)</span> | responsive on process...  </p>
      </section>
    </>
  )
}
