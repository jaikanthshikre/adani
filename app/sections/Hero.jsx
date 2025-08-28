import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <Image
          src="/images/banner.webp"
          alt="Banner"
          width={1920}  
          height={600}  
          priority    
          quality={90} 
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default Hero;
