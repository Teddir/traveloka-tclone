import Image from 'next/image';
import React from 'react';

type Destination = {
  name: string;
  country: string;
  imageUrl: string;
};

const destinations: Destination[] = [
  { name: 'bali', country: 'Indonesia', imageUrl: '/inter/bali.jpeg' },
  { name: 'bangkok', country: 'Thailand', imageUrl: '/inter/bangkok.jpeg' },
  { name: 'seoul', country: 'South Korea', imageUrl: '/inter/seoul.jpeg' },
  { name: 'istanbul', country: 'Turkey', imageUrl: '/inter/istanbul.jpeg' },
  { name: 'liverpool', country: 'United Kingdom', imageUrl: '/inter/liverpool.jpeg' },
];

const Guides: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4 w-full">
        <Image
          src="/teropong.png"
          alt="hotels-active-svg"
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <p className="font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]">
          International escapes: get the guides
        </p>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {destinations.map((destination, index) => (
          <div key={index} className="relative flex flex-col w-full h-full">
            <div className="aspect-[3/2]">
              <Image
                src={destination.imageUrl}
                alt={`${destination.name} image`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full rounded-md h-full bg-center bg-cover"
              />
            </div>
            <div className="absolute px-6 py-8 w-full h-full justify-end flex flex-col gap-1 text-white">
              <p className="font-bold text-sm capitalize">{destination.name}</p>
              <p className="font-normal text-xs">{destination.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
