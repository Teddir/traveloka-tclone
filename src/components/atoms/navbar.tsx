'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { DialogAuth } from './login';

const NavbarButton = ({ label, index, isScrollActive }: { label: string, index: number, isScrollActive: boolean }) => {
  const isDropdown = index === 0 || index === 2;  
  const icon = index === 0 ? "/subtitle.svg" : (index === 1 ? '/deals.png' : null);
  const buttonClass = isScrollActive
    ? 'text-[rgb(104, 113, 118)] hover:bg-gray-200'
    : 'text-white hover:bg-gray-900/30';

  return (
    <button className={`p-2 min-w-[5.5rem] text-center justify-center rounded-lg ${buttonClass} flex flex-row gap-2 items-center`}>
      {icon && <Image src={icon} alt={`icon-${index}`} width={100} height={100} className={index === 0 ? "w-4 h-4" : 'w-6 h-6'} />}
      <p className='font-mono font-medium text-sm'>{label}</p>
      {isDropdown && <ChevronDown size={12} />}
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);

      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={`z-50 flex flex-col fixed w-full ${scrolled ? 'bg-white text-[rgb(104, 113, 118)]' : ''}`}>
      <div className={`border-b border-b-amber-50/10 relative ${scrolled ? 'bg-white' : ''}`}>
        <div className='max-w-[90rem] mx-auto flex flex-row items-center gap-4 justify-center h-full'>
          <div className={cn('flex h-full justify-start items-start w-full', scrolled ? "opacity-0" : "opacity-100")}>
            <Image src={'/banner.svg'} alt='banner-svg' width={0} height={0} sizes='100vw' className={cn('w-[12%] h-auto',)} />
          </div>
          <div className='absolute w-full h-full z-[10] max-w-[76rem] mx-auto flex flex-row justify-between px-3'>
            <div className='aspect-[3/1]'>
              <Image src={scrolled ? '/trave-primary.svg' : '/trave-white.png'} alt='banner-svg-trave-white' width={135} height={43} sizes='100vw' />
            </div>
            <div className='flex flex-row items-center gap-1'>
              {["EN | USD", "Deals", "Support", "Partnership", "Bookings"].map((label, index) => {
                return index <= 2 ? (
                  <NavbarButton key={index} label={label} index={index} isScrollActive={scrolled} />
                ) : (
                  <button key={index} className={`p-2 rounded-lg ${scrolled ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-gray-900/30'}`}>
                    <p className='font-mono font-medium text-sm'>{label}</p>
                  </button>
                );
              })}
              <div className='flex flex-row items-center gap-1'>
                <DialogAuth scrolled={scrolled} />
                <DialogAuth scrolled={scrolled} isRegister />
              </div>
            </div>
          </div>
        </div>
        {!scrolled && (
          <div className='absolute w-full h-full top-0 bg-gradient-to-b from-gray-900/50 to-gray-900/10 z-[9]' />
        )}
      </div>
      <div className='border-b border-b-amber-50/10'>
        <div className='max-w-[76rem] mx-auto flex flex-row items-center gap-4 p-1'>
          {["Hotels", "Flights", "Airport Transfer", "Car Rental", "Things to Do", "More"].map((label, index) => (
            <button key={index} className={cn(`p-2 text-center justify-center rounded-lg text-white hover:bg-gray-900/30 flex flex-row gap-2 items-center`, scrolled ? "text-[#687175] hover:bg-gray-200" : "")}>
              <p className='font-mono font-extrabold text-sm'>{label}</p>
              {label === 'More' && <ChevronDown size={12} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
