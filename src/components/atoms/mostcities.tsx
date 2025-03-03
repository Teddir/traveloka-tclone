import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Hotel {
  name: string;
  imageSrc: string;
  rating: string;
  oldPrice: string;
  newPrice: string;
  reviews: number;
}

const hotels: Hotel[] = [
  {
    name: "The Alea Hotel Seminyak",
    imageSrc: "/hotel/1.jpeg",
    rating: "8.2/10",
    oldPrice: "USD 18.39",
    newPrice: "USD 13.39",
    reviews: 5922,
  },
  {
    name: "Atanaya Kuta Bali",
    imageSrc: "/hotel/2.jpeg",
    rating: "8.2/10",
    oldPrice: "USD 18.39",
    newPrice: "USD 13.39",
    reviews: 5922,
  },
  {
    name: "The ONE Legian",
    imageSrc: "/hotel/3.jpeg",
    rating: "8.2/10",
    oldPrice: "USD 18.39",
    newPrice: "USD 13.39",
    reviews: 5922,
  },
  {
    name: "Hadi Poetra Hotel",
    imageSrc: "/hotel/4.jpeg",
    rating: "8.2/10",
    oldPrice: "USD 18.39",
    newPrice: "USD 13.39",
    reviews: 5922,
  },
];

const Mostcities = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-4 w-full">
        <Image
          src={"/icon/hotels.active.svg"}
          alt="hotels-active-svg"
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <p className="font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]">
          Stay cozy in these most-loved cities
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          {["Bali", "Kuala Lumpur", "Manila", "Singapore"].map((city, index) => {
            const active = index === 0;
            return (
              <button
                key={index}
                className={cn(
                  "px-3 py-2 text-center justify-center rounded-full flex flex-row items-center gap-1",
                  active
                    ? "bg-[rgba(7,112,205,1.00)] text-white"
                    : "bg-transparent text-[rgba(7,112,205,1.00)]"
                )}
              >
                <p className="font-mono font-semibold text-sm">{city}</p>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {hotels.map((hotel, index) => (
            <div key={index} className="relative flex flex-col w-full h-full">
              <div className="aspect-[3/2]">
                <Image
                  src={hotel.imageSrc}
                  alt="hotel-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full rounded-md h-full bg-center bg-cover"
                />
              </div>
              <div className="px-2 py-3 w-full h-full flex flex-col gap-1">
                <p className="font-bold text-sm text-[rgba(67,67,67,1.00)]">
                  {hotel.name}
                </p>
                <div className="flex flex-row items-center">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx}>
                      <Image
                        src={"/star.svg"}
                        alt="star-icon"
                        width={100}
                        height={100}
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div>
                    <Image
                      src={"/burung.svg"}
                      alt="bird-icon"
                      width={100}
                      height={100}
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="font-medium text-[16px] text-primary">
                    {hotel.rating}{" "}
                    <span className="text-[rgba(3,18,26,1.00)]">({hotel.reviews})</span>
                  </p>
                </div>
                <p className="font-bold text-xs text-[rgba(143,143,143,1.00)] line-through">
                  {hotel.oldPrice}
                </p>
                <p className="font-bold text-xs text-[rgba(249,109,1,1.00)]">
                  {hotel.newPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 text-center justify-center cursor-pointer">
        <div className="flex flex-row items-center bg-primary/5 w-fit gap-2 p-2 rounded-sm min-w-xs justify-center">
          <p className="font-mono text-lg font-semibold text-primary">
            See All Hotels
          </p>
          <div>
            <Image
              src={"/arrow-right.svg"}
              alt="arrow-right"
              width={100}
              height={100}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mostcities;
