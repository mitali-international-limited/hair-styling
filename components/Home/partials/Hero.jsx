import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[2px]">
      <div className="relative w-full h-[40vh] md:h-[80vh]">
        <Image
          src="/images/HAIR-CARE_BANNER_2023-CONSUMER_3.webp"
          fill
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
