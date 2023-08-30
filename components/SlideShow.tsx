'use client'

import React, { useRef, useState } from 'react'
import { AnimatePresence, PanInfo, Variants, motion } from 'framer-motion'

import Slide from './Slide'
import img1 from '@/public/img1.jpg'
import img2 from '@/public/img2.jpg'
import img3 from '@/public/img3.jpg'
import img4 from '@/public/img4.jpg'
import img5 from '@/public/img5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'

const slides = [
  {
    title: 'Blah blah1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img1,
  },
  {
    title: 'Blah blah2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img2,
  },
  {
    title: 'Blah blah3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img3,
  },
  {
    title: 'Blah blah4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img4,
  },
  {
    title: 'Blah blah5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img5,
  },
  {
    title: 'Blah blah1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img1,
  },
  {
    title: 'Blah blah2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img2,
  },
  {
    title: 'Blah blah3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img3,
  },
  {
    title: 'Blah blah4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img4,
  },
  {
    title: 'Blah blah5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis vitae, esse natus repellat omnis autem ad voluptate deserunt quibusdam tenetur asperiores eos temporibus quos id numquam a, suscipit quam.',
    image: img5,
  },
]

const SlideShow = () => {
  const [activeSlide, setActiveSlide] = useState<{ title: string; description: string }>({
    description: '',
    title: '',
  })

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor
        centeredSlides
        loop
        slidesPerView={'auto'}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        modules={[EffectCoverflow]}
        spaceBetween={100}
        className="h-fit py-[2rem] relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="!w-[37rem] !h-[50rem] md:!h-[32rem]">
            {({ isActive }) => {
              isActive ? setActiveSlide(slide) : null
              return (
                <Image
                  draggable={false}
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              )
            }}
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div className="my-20 text-center">
        <motion.p className="text-4xl">{activeSlide.title}</motion.p>
        <motion.p className="">{activeSlide.description}</motion.p>
      </motion.div>
    </div>
  )
}

export default SlideShow
