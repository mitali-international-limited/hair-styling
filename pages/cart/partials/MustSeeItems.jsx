import React from "react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CartCard from "../../../components/Card";

const MustSeeItems = ({ data }) => {
  const slideWidth = `${100 / 5}%`;
  return (
    <div className="relative mx-[5rem]">
      <h2 className="font-MyFont tracking-[2px]  text-center my-10 font-bold text-[24px]">
        Don&apos;t Forget This!
      </h2>

      <div className="w-full px-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={true}
          slideWidth={slideWidth}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
        >
          {data[3].items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CartCard item={item} className={""} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MustSeeItems;
