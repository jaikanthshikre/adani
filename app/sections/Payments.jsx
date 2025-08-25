"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export const Payment = () => {
  const images = [
    "/images/pone.png",
    "/images/ptwo.png",
    "/images/pthree.png",
    "/images/pfour.png",
    "/images/pfive.png",
    "/images/psix.png",
    "/images/pseven.png",
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-5">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Payments Method Accepted
        </h1>

        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {images.map((src, index) => (
            <div
              key={index}
              className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center px-3 py-2 bg-white rounded-lg shadow-md mx-5"
            >
              <Image
                src={src}
                alt={`Payment ₹{index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
