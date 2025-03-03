'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between the two sets of images
      setShowImages((prevImages) =>
        !prevImages
      );
    }, 2000); // Change every 2 seconds (2000 ms)

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <section>
      <div className='max-h-[37.5rem] overflow-hidden relative'>
        <Image
          src={'/banner.jpeg'}
          sizes='100vw'
          alt='banner-tv'
          width={0}
          height={0}
          className='w-full h-auto bg-center bg-cover'
        />

        <div className='absolute w-full h-full z-10 top-0 '>

          <div className='border-b border-b-amber-50/10 relative'>
            <div className='max-w-[90rem] mx-auto flex flex-row items-center gap-4 justify-center h-full'>
              <div className='flex h-full justify-start items-start w-full'>
                <Image src={'/banner.svg'} alt='banner-svg' width={0} height={0} sizes='100vw' className='w-[12%] h-auto' />
              </div>
              <div className='absolute w-full h-full z-[10] max-w-[76rem] mx-auto flex flex-row justify-between px-3'>
                <div className='aspect-[3/1]'>
                  <Image src={'/trave-white.png'} alt='banner-svg-trave-white' width={135} height={43} sizes='100vw' />
                </div>
                <div className='flex flex-row items-center gap-1'>
                  {[
                    "EN | USD",
                    "Deals",
                    "Support",
                    "Partnership",
                    "Bookings",
                  ].map((a, b) => {
                    return b <= 2 ? (
                      <button key={b} className='p-2 min-w-[5.5rem] text-center justify-center rounded-lg text-white hover:bg-gray-900/30 flex flex-row gap-2 items-center'>
                        {b <= 1 && (
                          <div>
                            <Image src={b == 0 ? "/subtitle.svg" : '/deals.png'} alt={`deals-svg-${b}`} width={100} height={100} className={b == 0 ? "w-4 h-4" : 'w-6 h-6'} />
                          </div>
                        )}
                        <p className='font-mono font-medium text-sm'>{a}</p>
                        {(b == 0 || b == 2) && (
                          <div>
                            <Image src={'/arrow-down.svg'} alt={`arrow-down-${b}`} width={100} height={100} className='w-3 h-3' />
                          </div>
                        )}
                      </button>
                    ) : (
                      <button key={b} className='p-2 rounded-lg text-white hover:bg-gray-900/30'>
                        <p className='font-mono font-medium text-sm'>{a}</p>
                      </button>
                    )
                  })}
                  <div className='flex flex-row items-center gap-1'>
                    <button className='p-2 min-w-[5.5rem] text-center justify-center rounded-lg text-white hover:bg-gray-900/30 border border-white flex flex-row gap-2 items-center'>
                      <div>
                        <Image src={'/icon/user.svg'} alt='user-svg' width={100} height={100} className='w-4 h-4' />
                      </div>
                      <p className='font-mono font-medium text-sm'>Log In</p>
                    </button>
                    <button className='p-2 min-w-[5.5rem] text-center justify-center rounded-lg text-white hover:bg-secondary flex flex-row items-center bg-primary border border-primary'>
                      <p className='font-mono font-semibold text-sm '>Register</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute w-full h-full top-0 bg-gradient-to-b from-gray-900/50 to-gray-900/10 z-[9]' />
          </div>
          <div className='border-b border-b-amber-50/10'>
            <div className='max-w-[76rem] mx-auto flex flex-row items-center gap-4 p-1'>
              {["Hotels",
                "Flights",
                "Airport Transfer",
                "Car Rental",
                "Things to Do",
                "More",
              ].map((a, b) => {
                return (
                  <button key={b} className='p-2 text-center justify-center rounded-lg text-white hover:bg-gray-900/30 flex flex-row gap-2 items-center'>
                    <p className='font-mono font-extrabold text-sm'>{a}</p>
                    {a == 'More' && (
                      <div>
                        <Image src={'/arrow-down.svg'} alt={`arrow-down-${b}`} width={100} height={100} className='w-3 h-3' />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className='max-w-[76rem] mx-auto flex flex-col gap-10 justify-center py-12 w-full text-center'>
            <p className='font-mono text-[32px] font-semibold text-white'>Your One Stop Gateway to Southeast Asia</p>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row items-center gap-1 pb-2 border-b border-b-white '>
                {["Hotels",
                  "Flights",
                ].map((a, b) => {
                  const active = b == 0
                  return (
                    <button key={b} className={cn('px-4 py-2 min-w-[5.5rem] text-center justify-center rounded-full text-[#CDD0D1]   border  border-transparent flex flex-row gap-2 items-center', active ? "bg-white text-black" : "hover:border-white hover:text-white")}>
                      <div>
                        <Image src={b == 0 ? active ? '/icon/hotels.active.svg' : '/icon/hotels.svg' : active ? '/icon/flights.active.svg' : '/icon/flights.svg'} alt={`hotels-svg-${b}`} width={100} height={100} className='w-6 h-6 ' />
                      </div>
                      <p className='font-mono font-semibold text-md'>{a}</p>
                    </button>
                  )
                })}
              </div>
              <div className='flex flex-col gap-4 p-2 pb-4'>
                <div className='flex flex-row items-center gap-2'>
                  {["Hotels",
                    "Apartment",
                    "Villa",
                  ].map((a, b) => {
                    const active = b == 0
                    return (
                      <button key={b} className={cn('px-3 py-1.5 text-center justify-center rounded-full text-white flex flex-row items-center gap-1 ', active ? 'bg-primary' : 'bg-gray-900/30')}>
                        <div>
                          <Image src={'/icon/hotels.svg'} alt={`hotels-svg-${b}`} width={100} height={100} className='w-4 h-4 ' />
                        </div>
                        <p className='font-mono font-semibold text-sm'>{a}</p>
                      </button>
                    )
                  })}
                </div>
                <div className='flex flex-row w-full'>
                  <div className='grid grid-cols-3 w-full'>
                    <div className='flex flex-col gap-3 w-full'>
                      <p className='font-mono text-sm font-medium text-white text-left'>City, destination, or hotel name</p>
                      <div className='p-3 bg-white border-y-3 border-l-3 border-gray-500/50 rounded-l-2xl flex flex-row gap-2 items-center'>
                        <div>
                          <Image src={'/icon/map.svg'} alt={`map`} width={100} height={100} className='w-6 h-6' />
                        </div>
                        <input type="text" className='font-sans' defaultValue={'Bali'} disabled />
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                      <p className='font-mono text-sm font-medium text-white text-left'>Check-in & Check-out Dates</p>
                      <div className='p-3 bg-white border-x-2 border-y-3 border-y-gray-500/50 border-x-gray-400/50 flex flex-row gap-2 items-center'>
                        <div>
                          <Image src={'/icon/date.svg'} alt={`date`} width={100} height={100} className='w-6 h-6' />
                        </div>
                        <input type="text" className='font-sans' defaultValue={'04 Mar 2025 - 05 Mar 2025'} disabled />
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                      <p className='font-mono text-sm font-medium text-white text-left'>Guests and Rooms</p>
                      <div className='p-3 bg-white border-y-3  border-gray-500/50 flex flex-row gap-2 items-center'>
                        <div>
                          <Image src={'/icon/guest.svg'} alt={`guest`} width={100} height={100} className='w-6 h-6' />
                        </div>
                        <input type="text" className='font-sans' defaultValue={'1 Adult(s), 0 Child, 1 Room'} disabled />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 w-fit'>
                    <p className='font-mono text-sm font-medium text-white text-left opacity-0'>-</p>
                    <div className='p-3 bg-[#ff5e1f] border-y-3 border-r-3 border-gray-500/50 rounded-r-2xl flex flex-row gap-2 items-center'>
                      <div>
                        <Image src={'/icon/search.svg'} alt={`search`} width={100} height={100} className='w-6 h-6' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <p className='font-medium text-[14px] italic text-white'>Trusted by</p>
                <div className='flex flex-row items-center gap-2 relative overflow-hidden'>
                  {Array.from({ length: 3 }).map((a, b) => {
                    return (
                      <div key={b} className={cn("transition-all duration-500 object-fill group relative hover:bg-white p-1 rounded-xs aspect-[2/1] justify-center flex items-center", showImages ? "opacity-100" : "opacity-0 absolute top-48")}>
                        <Image
                          src={`/trust/${b + 1}.png`}
                          alt={`${b}`}
                          width={80}
                          height={80}
                          className="w-auto h-auto invert group-hover:invert-0 bg-cover bg-center"
                        />
                        <div className="bg-white " />
                      </div>
                    )
                  })}
                  {Array.from({ length: 2 }).map((a, b) => {
                    return (
                      <div key={b} className={cn("transition-all duration-500 object-fill group relative hover:bg-white p-1 rounded-xs aspect-[2/1] justify-center flex items-center", showImages ? "opacity-0 absolute top-48" : "opacity-100")}>
                        <Image
                          src={`/trust/${b + 3 + 1}.png`}
                          alt={`${b}`}
                          width={80}
                          height={80}
                          className="w-auto h-auto invert group-hover:invert-0 bg-cover bg-center"
                        />
                        <div className="bg-white " />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[76rem] mx-auto flex flex-col gap-8 p-5'>
        <div className='flex flex-row items-center gap-4 justify-center w-full'>
          <Image src={'/icon/hotels.active.svg'} alt='hotels-active-svg' width={100} height={100} className='w-6 h-6' />
          <p className='font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]'>Rediscover yourself in Asia and beyond</p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='relative flex w-full h-full'>
            <Image src={'/cover/id.png'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-auto bg-center bg-cover' />
            <div className='absolute py-8 px-6 w-full h-full flex flex-col gap-1 text-white'>
              <p className='font-bold text-2xl'>Indonesia</p>
              <p className='font-medium text-xs'>53,405 accommodations</p>
            </div>
          </div>
          <div className='relative flex w-full h-full'>
            <Image src={'/cover/th.jpeg'} alt='th-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-auto bg-center bg-cover' />
            <div className='absolute py-8 px-6 w-full h-full flex flex-col gap-1 text-white'>
              <p className='font-bold text-2xl'>Thailand</p>
              <p className='font-medium text-xs'>53,405 accommodations</p>
            </div>
          </div>
          <div className='relative flex w-full h-full'>
            <Image src={'/cover/viet.jpeg'} alt='viet-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-auto bg-center bg-cover' />
            <div className='absolute py-8 px-6 w-full h-full flex flex-col gap-1 text-white'>
              <p className='font-bold text-2xl'>Vietnam</p>
              <p className='font-medium text-xs'>53,405 accommodations</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center gap-2 text-center justify-center'>
          <p className='font-mono text-lg font-semibold text-primary'>Search More Hotels</p>
          <div>
            <Image src={'/arrow-right.svg'} alt={`arrow-right`} width={100} height={100} className='w-4 h-4' />
          </div>
        </div>
        <div className='flex flex-row items-center gap-4 w-full'>
          <Image src={'/icon/hotels.active.svg'} alt='hotels-active-svg' width={100} height={100} className='w-6 h-6' />
          <p className='font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]'>Stay cozy in these most-loved cities</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row items-center gap-2'>
            {["Bali",
              "Kuala Lumpur",
              "Manila",
              "Singapore",
            ].map((a, b) => {
              const active = b == 0
              return (
                <button key={b} className={cn('px-3 py-2 text-center justify-center rounded-full flex flex-row items-center gap-1 ', active ? 'bg-[rgba(7,112,205,1.00)] text-white' : 'bg-transparent text-[rgba(7,112,205,1.00)]')}>
                  <p className='font-mono font-semibold text-sm'>{a}</p>
                </button>
              )
            })}
          </div>
          <div className='grid grid-cols-4 gap-2'>
            <div className='relative flex flex-col w-full h-full'>
              <div className='aspect-[3/2]'>
                <Image src={'/hotel/1.jpeg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
              </div>
              <div className='px-2 py-3 w-full h-full flex flex-col gap-1 '>
                <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The Alea Hotel Seminyak</p>
                <div className='flex flex-row items-center'>
                  {Array.from({ length: 3 }).map((a, b) => {
                    return (
                      <div key={b}>
                        <Image src={'/star.svg'} alt='hotels-active-svg' width={100} height={100} className='w-4 h-4' />
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div>
                    <Image src={'/burung.svg'} alt='hotels-active-svg' width={100} height={100} className='w-5 h-5' />
                  </div>
                  <p className='font-medium text-[16px] text-primary'>8.2/10 <span className='text-[rgba(3,18,26,1.00)]'>(5922)</span></p>
                </div>
                <p className='font-bold text-xs text-[rgba(143,143,143,1.00)] line-through'>USD 18.39</p>
                <p className='font-bold text-xs text-[rgba(249,109,1,1.00)]'>USD 13.39</p>
              </div>
            </div>
            <div className='relative flex flex-col w-full h-full'>
              <div className='aspect-[3/2]'>
                <Image src={'/hotel/2.jpeg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
              </div>
              <div className='px-2 py-3 w-full h-full flex flex-col gap-1 '>
                <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>Atanaya Kuta Bali</p>
                <div className='flex flex-row items-center'>
                  {Array.from({ length: 3 }).map((a, b) => {
                    return (
                      <div key={b}>
                        <Image src={'/star.svg'} alt='hotels-active-svg' width={100} height={100} className='w-4 h-4' />
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div>
                    <Image src={'/burung.svg'} alt='hotels-active-svg' width={100} height={100} className='w-5 h-5' />
                  </div>
                  <p className='font-medium text-[16px] text-primary'>8.2/10 <span className='text-[rgba(3,18,26,1.00)]'>(5922)</span></p>
                </div>
                <p className='font-bold text-xs text-[rgba(143,143,143,1.00)] line-through'>USD 18.39</p>
                <p className='font-bold text-xs text-[rgba(249,109,1,1.00)]'>USD 13.39</p>
              </div>
            </div>
            <div className='relative flex flex-col w-full h-full'>
              <div className='aspect-[3/2]'>
                <Image src={'/hotel/3.jpeg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
              </div>
              <div className='px-2 py-3 w-full h-full flex flex-col gap-1 '>
                <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The ONE Legian</p>
                <div className='flex flex-row items-center'>
                  {Array.from({ length: 3 }).map((a, b) => {
                    return (
                      <div key={b}>
                        <Image src={'/star.svg'} alt='hotels-active-svg' width={100} height={100} className='w-4 h-4' />
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div>
                    <Image src={'/burung.svg'} alt='hotels-active-svg' width={100} height={100} className='w-5 h-5' />
                  </div>
                  <p className='font-medium text-[16px] text-primary'>8.2/10 <span className='text-[rgba(3,18,26,1.00)]'>(5922)</span></p>
                </div>
                <p className='font-bold text-xs text-[rgba(143,143,143,1.00)] line-through'>USD 18.39</p>
                <p className='font-bold text-xs text-[rgba(249,109,1,1.00)]'>USD 13.39</p>
              </div>
            </div>
            <div className='relative flex flex-col w-full h-full'>
              <div className='aspect-[3/2]'>
                <Image src={'/hotel/4.jpeg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
              </div>
              <div className='px-2 py-3 w-full h-full flex flex-col gap-1 '>
                <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>Hadi Poetra Hotel</p>
                <div className='flex flex-row items-center'>
                  {Array.from({ length: 3 }).map((a, b) => {
                    return (
                      <div key={b}>
                        <Image src={'/star.svg'} alt='hotels-active-svg' width={100} height={100} className='w-4 h-4' />
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div>
                    <Image src={'/burung.svg'} alt='hotels-active-svg' width={100} height={100} className='w-5 h-5' />
                  </div>
                  <p className='font-medium text-[16px] text-primary'>8.2/10 <span className='text-[rgba(3,18,26,1.00)]'>(5922)</span></p>
                </div>
                <p className='font-bold text-xs text-[rgba(143,143,143,1.00)] line-through'>USD 18.39</p>
                <p className='font-bold text-xs text-[rgba(249,109,1,1.00)]'>USD 13.39</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center gap-2 text-center justify-center'>
          <p className='font-mono text-lg font-semibold text-primary'>See All Hotels</p>
          <div>
            <Image src={'/arrow-right.svg'} alt={`arrow-right`} width={100} height={100} className='w-4 h-4' />
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center gap-4 w-full'>
              <Image src={'/teropong.png'} alt='hotels-active-svg' width={100} height={100} className='w-6 h-6' />
              <p className='font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]'>International escapes: get the guides</p>
            </div>
            <div className='grid grid-cols-5 gap-2'>
              {['bali', 'bangkok', 'seoul', 'istanbul', 'liverpool']?.map((a, b) => {
                return (
                  <div key={b} className='relative flex flex-col w-full h-full'>
                    <div className='aspect-[3/2]'>
                      <Image src={`/inter/${a}.jpeg`} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
                    </div>
                    <div className='absolute px-6 py-8 w-full h-full justify-end flex flex-col gap-1 text-white'>
                      <p className='font-bold text-sm capitalize'>{a}</p>
                      <p className='font-normal text-xs '>Indonesia</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center gap-4 w-full'>
              <Image src={'/buku.png'} alt='hotels-active-svg' width={100} height={100} className='w-6 h-6' />
              <p className='font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]'>Read on and kickstart your adventure</p>
            </div>

            <div className='grid grid-cols-4 gap-2'>
              <div className='relative flex flex-col w-full h-full'>
                <div className='aspect-[3/2] overflow-hidden'>
                  <Image src={'/reason/1.jpg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
                </div>
                <div className='px-2 py-3 w-full  flex flex-col gap-2 '>
                  <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The Excitement of Exploring World of Lego in Malaysia</p>
                  <div className='flex flex-col gap-1'>
                    <p className='font-normal text-xs text-gray-500'>Xperience Team</p>
                    <p className='font-normal text-xs text-gray-500'>Less than 1 min read</p>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col w-full h-full'>
                <div className='aspect-[3/2] overflow-hidden'>
                  <Image src={'/reason/2.jpg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
                </div>
                <div className='px-2 py-3 w-full  flex flex-col gap-2 '>
                  <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The Excitement of Exploring World of Lego in Malaysia</p>
                  <div className='flex flex-col gap-1'>
                    <p className='font-normal text-xs text-gray-500'>Xperience Team</p>
                    <p className='font-normal text-xs text-gray-500'>Less than 1 min read</p>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col w-full h-full'>
                <div className='aspect-[3/2] overflow-hidden'>
                  <Image src={'/reason/3.jpg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
                </div>
                <div className='px-2 py-3 w-full  flex flex-col gap-2 '>
                  <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The Excitement of Exploring World of Lego in Malaysia</p>
                  <div className='flex flex-col gap-1'>
                    <p className='font-normal text-xs text-gray-500'>Xperience Team</p>
                    <p className='font-normal text-xs text-gray-500'>Less than 1 min read</p>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col w-full h-full'>
                <div className='aspect-[3/2] overflow-hidden'>
                  <Image src={'/reason/4.jpg'} alt='id-svg' width={0} height={0} sizes='100vw' className='w-full rounded-md h-full bg-center bg-cover' />
                </div>
                <div className='px-2 py-3 w-full  flex flex-col gap-2 '>
                  <p className='font-bold text-sm text-[rgba(67,67,67,1.00)]'>The Excitement of Exploring World of Lego in Malaysia</p>
                  <div className='flex flex-col gap-1'>
                    <p className='font-normal text-xs text-gray-500'>Xperience Team</p>
                    <p className='font-normal text-xs text-gray-500'>Less than 1 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-2 text-center justify-center'>
              <p className='font-mono text-lg font-semibold text-primary'>Read Inspiring Articles</p>
              <div>
                <Image src={'/arrow-right.svg'} alt={`arrow-right`} width={100} height={100} className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
