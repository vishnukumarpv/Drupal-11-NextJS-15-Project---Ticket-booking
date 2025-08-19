'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import HeroSlide from '@/components/molecules/carousel/HeroSlide';


const HeroCarousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true} 
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><HeroSlide/></SwiperSlide>
        <SwiperSlide><HeroSlide/></SwiperSlide>
        <SwiperSlide><HeroSlide/></SwiperSlide>
      </Swiper>
    </>
  );
};



export default HeroCarousel;
