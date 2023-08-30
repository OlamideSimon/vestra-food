'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { SwiperSlide } from 'swiper/react'

type SlideType = {
  slide: {
    image: StaticImageData
  }
}

const Slide = ({ slide: { image } }: SlideType) => {
  return (
    <SwiperSlide className="!w-[37rem] !h-[42rem]">
      <Image
        draggable={false}
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  )
}

export default Slide
