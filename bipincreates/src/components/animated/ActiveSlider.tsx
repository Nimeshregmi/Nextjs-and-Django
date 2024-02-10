'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { SwiperS } from "@/components/constants";
import TeamsProfile from "../pages/TeamsProfile";

interface Props{
  children:JSX.Element;
}
const ActiveSlider = () => {
  console.log(typeof(Swiper))
  console.log(Swiper)
  return (
    <div className="flex items-center justify-center flex-col ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {SwiperS.map((item,i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col gap-6  group relative shadow-lg text-white rounded-xl   overflow-hidden cursor-pointer">
              
              <TeamsProfile img={item.img} name={item.name} skills={item.skills} facebookLink={item.facebookLink} gitHubLink={item.gitHubLink} linkedinLink={item.linkedinLink}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

