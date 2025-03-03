import Image from 'next/image'
import React from 'react'

const DestinationCard = ({ imageSrc, title, accommodations }: { imageSrc: string, title: string, accommodations: string }) => {
  return (
    <div className='relative flex w-full h-full'>
      <Image src={imageSrc} alt={title} width={500} height={300} sizes='100vw' className='w-full rounded-md h-auto bg-center bg-cover' />
      <div className='absolute py-8 px-6 w-full h-full flex flex-col gap-1 text-white'>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='font-medium text-xs'>{accommodations}</p>
      </div>
    </div>
  )
}

export default function Rediscover() {
  const destinations = [
    { imageSrc: '/cover/id.png', title: 'Indonesia', accommodations: '53,405 accommodations' },
    { imageSrc: '/cover/th.jpeg', title: 'Thailand', accommodations: '53,405 accommodations' },
    { imageSrc: '/cover/viet.jpeg', title: 'Vietnam', accommodations: '53,405 accommodations' },
  ]

  return (
    <>
      <div className='flex flex-row items-center gap-4 justify-center w-full'>
        <Image src={'/icon/hotels.active.svg'} alt='hotels-active-svg' width={100} height={100} className='w-6 h-6' />
        <p className='font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]'>Rediscover yourself in Asia and beyond</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            imageSrc={destination.imageSrc}
            title={destination.title}
            accommodations={destination.accommodations}
          />
        ))}
      </div>

      <div className='flex flex-row items-center gap-2 text-center justify-center'>
        <div className='flex flex-row items-center bg-primary/5 w-fit gap-2 p-2 rounded-sm min-w-xs justify-center'>
          <p className='font-mono text-lg font-semibold text-primary'>Search More Hotels</p>
          <div>
            <Image src={'/arrow-right.svg'} alt='arrow-right' width={100} height={100} className='w-4 h-4' />
          </div>
        </div>
      </div>
    </>
  )
}
