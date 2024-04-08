import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./assets/images/1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/images/2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/images/3.png" alt="" />
      </SwiperSlide>
    </Swiper>
    <div className="swiper-pagination mt-4 flex justify-center ">
      <span className="swiper-pagination-bullet w-5 h-2"></span>
    </div>
  </div>
  )
}

export default Slider