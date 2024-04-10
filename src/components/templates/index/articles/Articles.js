"use client";
import styles from "./article.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "../card/Card";
const Articles = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>مقالات ما</p>
      <span className={styles.description}>دانستنی های جذاب دنیای قهوه</span>
      <main>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          rewind={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper articles_slider"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
};

export default Articles;
