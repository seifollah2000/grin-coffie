"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      dir="rtl"
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper home-slider"
    >
      <SwiperSlide>
        <img
          src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/winter-slie.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://set-coffee.com/wp-content/uploads/2022/06/fall.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
