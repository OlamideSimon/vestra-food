'use client'

import React, { useState } from 'react'
import { Variants, motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import img1 from '@/public/img1.jpg'
import img2 from '@/public/img2.jpg'
import img3 from '@/public/img3.jpg'
import img4 from '@/public/img4.jpg'
import img5 from '@/public/img5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import Button from '../components/Buttons'

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

const detailVariants: Variants = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

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
          <SwiperSlide key={index} className="!w-[37rem] !h-[30rem]">
            {({ isActive }) => {
              isActive ? setActiveSlide(slide) : null
              return (
                <Image
                  draggable={false}
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md shadow"
                />
              )
            }}
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        variants={detailVariants}
        initial="enter"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="my-20 text-center space-y-5"
      >
        <motion.p className="text-4xl font-semibold">{activeSlide.title}</motion.p>
        <motion.p className="text-xl sm:px-20 lg:px-40 xl:px-80">
          {activeSlide.description}
        </motion.p>
        <div className="flex justify-center space-x-5">
          <Button className="bg-primary-500 py-4 px-8 text-white">Add To Cart</Button>
          <Button className="py-4 px-8 flex items-center space-x-4">
            <span>Read More</span> <FiArrowRight />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default SlideShow
