'use client';
import React, { useRef, useState } from 'react';
import { Club } from '@/lib/types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCardRounded from '@/components/molecules/match/TeamCardRounded';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';




const getDefaultClubs = (): Club[] => [
  {
    id: 1,
    name: "Manchester United",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop",
    link: "/clubs/manchester-united"
  },
  {
    id: 2,
    name: "Liverpool FC",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
    link: "/clubs/liverpool"
  },
  {
    id: 3,
    name: "Arsenal FC",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop",
    link: "/clubs/arsenal"
  },
  {
    id: 4,
    name: "Chelsea FC",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
    link: "/clubs/chelsea"
  },
  {
    id: 5,
    name: "Real Madrid",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    link: "/clubs/real-madrid"
  },
  {
    id: 6,
    name: "Barcelona FC",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=200&fit=crop",
    link: "/clubs/barcelona"
  },
  {
    id: 7,
    name: "Bayern Munich",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop",
    link: "/clubs/bayern-munich"
  },
  {
    id: 8,
    name: "Juventus",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
    link: "/clubs/juventus"
  },
  {
    id: 9,
    name: "PSG",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop",
    link: "/clubs/psg"
  },
  {
    id: 10,
    name: "AC Milan",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
    link: "/clubs/ac-milan"
  },
  {
    id: 11,
    name: "Inter Milan",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    link: "/clubs/inter-milan"
  },
  {
    id: 12,
    name: "Atletico Madrid",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=200&fit=crop",
    link: "/clubs/atletico-madrid"
  },
  {
    id: 13,
    name: "Borussia Dortmund",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop",
    link: "/clubs/borussia-dortmund"
  },
  {
    id: 14,
    name: "Tottenham",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
    link: "/clubs/tottenham"
  },
  {
    id: 15,
    name: "Manchester City",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop",
    link: "/clubs/manchester-city"
  }
];

export default function TeamsListCarousel() {
  const clubs = getDefaultClubs();
  function handleClick() {
    console.log("Extra function running!");
  }
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={5}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          '@0.75': {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          '@1.00': {
            slidesPerView: 9,
            spaceBetween: 5,
          },
          '@1.50': {
            slidesPerView: 10,
            spaceBetween: 5,
          },
        }} 
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {clubs.map((club: Club) => (
            <div key={club.id} className="swiper-slide">
              <SwiperSlide key={club.id}>
                <TeamCardRounded club={club} onClick={handleClick} />
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </>
  );
}
