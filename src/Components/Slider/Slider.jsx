import React from "react";
import "../Slider/slider.css";
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
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[url(/public/assets/images/1.png)] bg-cover bg-no-repeat w-full py-40  relative text-white">
          <div className="absolute top-20 left-10 w-[49%]">
            <h5 className="text-lg my-2 font-light">Wellcome to Lavo link</h5>
            <p className=" text-2xl font-semibold">
              Unlock Your Project Potential: Connect with top-tier freelancers
              to transform your ideas into reality.
            </p>
            <button className="bg-white text-sm font-normal text-[#151D48] py-[6px] px-4 rounded-2xl mt-8">
              Learn More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(/public/assets/images/2.png)] bg-cover bg-no-repeat w-full py-40  relative text-white">
          <div className="absolute top-20 left-10 w-[49%]">
            <h5 className="text-lg my-2 font-light">Wellcome to Lavolink</h5>
            <p className=" text-2xl font-semibold">
              Transform Your Freelance Journey with Lavolink: A Revolutionary
              Platform Built on Blockchain Technology
            </p>
            <button className="bg-white text-sm font-normal text-[#151D48] py-[6px] px-4 rounded-2xl mt-8">
              Learn More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(/public/assets/images/3.png)]  bg-cover bg-no-repeat w-full py-40  relative text-white">
          <div className="absolute top-20 left-10 w-[49%]">
            <h5 className="text-lg my-2 font-light">Wellcome to Lavolink</h5>
            <p className=" text-2xl font-semibold">
              Earn While Doing What You Love: Turn your passion into profit by
              offering your services on{" "}
              <a href="#" className="block w-20">
                <img src="/assets/images/tr.png" alt="" className="w-full" />
              </a>
            </p>
            <button className="bg-white text-sm font-normal text-[#151D48] py-[6px] px-4 rounded-2xl mt-8">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination mt-4 flex justify-center ">
        <span className="swiper-pagination-bullet w-5 h-2"></span>
      </div>
    </div>
  );
};

export default Slider;
