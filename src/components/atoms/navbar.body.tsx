'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function NavbarBody() {
  const [showImages, setShowImages] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [hotels, setHotels] = useState([
    { name: 'Bali Beach Resort', location: 'Bali, Indonesia', count: 12000 },
    { name: 'Bali Villa Stay', location: 'Bali, Indonesia', count: 10000 },
    { name: 'Bali Luxury Hotel', location: 'Bali, Indonesia', count: 8000 },
    { name: 'Bali Jungle Resort', location: 'Bali, Indonesia', count: 7000 },
    { name: 'Bali Ocean View', location: 'Bali, Indonesia', count: 15000 },
  ]); 

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 3); 

  useEffect(() => {
    const interval = setInterval(() => {
      
      setShowImages((prevImages) =>
        !prevImages
      );
    }, 2000); 

    
    return () => clearInterval(interval);
  }, []);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  
  const handleIncrement = (type: string) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'rooms') {
      setRooms(rooms + 1);
    }
  };

  const handleDecrement = (type: string) => {
    if (type === 'adults' && adults > 1) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'rooms' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };
  return (
    <div className='max-w-[76rem] mt-28 mx-auto flex flex-col gap-10 justify-center py-12 w-full text-center'>
      <p className='font-mono text-[32px] font-semibold text-white'>Your One Stop Gateway to Southeast Asia</p>
      <div className='flex flex-col gap-4 px-2'>
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
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col gap-3 w-full">
                    <p className="font-mono text-sm font-medium text-white text-left">City, destination, or hotel name</p>
                    <div className="p-3 bg-white border-y-3 border-l-3 border-gray-500/50 rounded-l-2xl flex flex-row gap-2 items-center">
                      <div>
                        <Image src={"/icon/map.svg"} alt={`map`} width={100} height={100} className="w-6 h-6" />
                      </div>
                      <input
                        type="text"
                        className="font-sans w-full focus:outline-none outline-0"
                        value={searchQuery}
                        placeholder='City, hotel, place to go'
                        onChange={(e) => setSearchQuery(e.target.value)} 
                      />
                    </div>
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-96 p-4 bg-white rounded-xl shadow-lg">
                  {/* Display filtered hotels (up to 3) */}
                  <div>
                    {filteredHotels.map((hotel, index) => (
                      <div onClick={() => setSearchQuery(hotel.name)} key={index} className="flex flex-row justify-between items-center gap-1 mb-3">
                        <div className="flex flex-col">
                          <p className="font-semibold text-primary">{hotel.name}</p>
                          <p className="text-sm text-[#707577]">{hotel.location}</p>
                        </div>
                        <div className="justify-end flex flex-col items-end gap-1">
                          <p className="bg-primary/5 text-primary px-2 py-1 rounded-full text-xs font-semibold w-fit">
                            Region
                          </p>
                          <p className="text-xs text-[#707577]">{hotel.count} hotels</p>
                        </div>
                      </div>
                    ))}

                    {/* Message if no hotels found */}
                    {filteredHotels.length === 0 && (
                      <p className="text-sm text-[#707577]">No hotels found for your search.</p>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='flex flex-col gap-3 w-full'>
                    <p className='font-mono text-sm font-medium text-white text-left'>Check-in & Check-out Dates</p>
                    <div className='p-3 bg-white border-x-2 border-y-3 border-y-gray-500/50 border-x-gray-400/50 flex flex-row gap-2 items-center'>
                      <div>
                        <Image src={'/icon/date.svg'} alt={`date`} width={100} height={100} className='w-6 h-6' />
                      </div>
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className='flex flex-col gap-2'>
                    <p className="text-xl font-bold text-gray-700 p-4">Stay Date</p>
                    <div className='flex flex-row items-center justify-between border-y border-y-border/30 py-2 '>
                      <div className='flex flex-col gap-1 w-full px-4'>
                        <p className='text-xs text-[#687176]'>Check-In</p>
                        <p className='text-sm font-bold'>{!date?.from ? "-" : format(date.from, "LLL dd, y")}</p>
                      </div>
                      <div className='flex flex-col gap-1 justify-start items-start w-full px-4'>
                        <p className='text-xs text-[#687176]'>Check-Out</p>
                        <p className='text-sm font-bold'>{!date?.to ? "-" : format(date.to, "LLL dd, y")}</p>
                      </div>
                    </div>
                  </div>
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex flex-col gap-3 w-full cursor-pointer">
                    <p className="font-mono text-sm font-medium text-white text-left">Guests and Rooms</p>
                    <div className="p-3 bg-white border-y-3 border-gray-500/50 flex flex-row gap-2 items-center">
                      <div>
                        <Image
                          src={'/icon/guest.svg'}
                          alt={`guest`}
                          width={100}
                          height={100}
                          className="w-6 h-6"
                        />
                      </div>
                      {`${adults} Adult(s), ${children} Child(ren), ${rooms} Room(s)`}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-96 p-4 bg-white rounded-xl shadow-lg">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src={'/user.besar.svg'}
                        alt={`adult`}
                        width={100}
                        height={100}
                        className="w-6 h-6"
                      />
                      <p className="text-lg font-semibold">Adult</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div
                        className={cn("px-3 py-2 bg-primary/5 text-black cursor-pointer", adults <= 0 ? "text-black" : "text-primary")}
                        onClick={() => handleDecrement('adults')}
                      >
                        <MinusIcon size={16} />
                      </div>
                      <p className="px-3 py-2 border-b border-b-border font-medium text-sm text-[#687176] min-w-[3rem] text-center">
                        {adults}
                      </p>
                      <div
                        className="px-3 py-2 bg-primary/5 text-primary cursor-pointer"
                        onClick={() => handleIncrement('adults')}
                      >
                        <PlusIcon size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src={'/user.kecil.svg'}
                        alt={`adult`}
                        width={100}
                        height={100}
                        className="w-6 h-6"
                      />
                      <p className="text-lg font-semibold">Children</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div
                        className={cn("px-3 py-2 bg-primary/5 text-black cursor-pointer", children <= 0 ? "text-black" : "text-primary")}
                        onClick={() => handleDecrement('children')}
                      >
                        <MinusIcon size={16} />
                      </div>
                      <p className="px-3 py-2 border-b border-b-border font-medium text-sm text-[#687176] min-w-[3rem] text-center">
                        {children}
                      </p>
                      <div
                        className="px-3 py-2 bg-primary/5 text-primary cursor-pointer"
                        onClick={() => handleIncrement('children')}
                      >
                        <PlusIcon size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between pb-4">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src={'/room.svg'}
                        alt={`adult`}
                        width={100}
                        height={100}
                        className="w-6 h-6"
                      />
                      <p className="text-lg font-semibold">Room</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div
                        className={cn("px-3 py-2 bg-primary/5 text-black cursor-pointer", rooms <= 0 ? "text-black" : "text-primary")}
                        onClick={() => handleDecrement('rooms')}
                      >
                        <MinusIcon size={16} />
                      </div>
                      <p className="px-3 py-2 border-b border-b-border font-medium text-sm text-[#687176] min-w-[3rem] text-center">
                        {rooms}
                      </p>
                      <div
                        className="px-3 py-2 bg-primary/5 text-primary cursor-pointer"
                        onClick={() => handleIncrement('rooms')}
                      >
                        <PlusIcon size={16} />
                      </div>
                    </div>
                  </div>
                  {children > 0 && (
                    <div className='flex flex-col gap-4 pb-4'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-sm'>Enter Children’s Ages</p>
                        <p className='text-sm text-[#687176]'>Knowing your children’s ages will help us find you suitable accommodations</p>
                      </div>
                      <div className='grid grid-cols-3 gap-2'>
                        {Array.from({ length: children }).map((_, index) => (
                          <div key={index} className='flex flex-col gap-2'>
                            <p className="text-sm font-medium">Child {index + 1}</p>
                            <select
                              name={`child-age-${index}`}
                              id={`child-age-${index}`}
                              className="w-full p-2 border border-gray-300 rounded"
                            >
                              <option value="">Age</option>
                              {/* Example age range, you can adjust the range as needed */}
                              {Array.from({ length: 18 }, (_, i) => i + 1).map(age => (
                                <option key={age} value={age}>
                                  {age} years
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className='flex justify-end'>
                    <button className={`p-2 text-center justify-center rounded-lg text-white hover:bg-secondary flex flex-row items-center bg-primary border border-primary`}>
                      <p className='font-mono font-semibold text-md '>Done</p>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
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
  )
}
