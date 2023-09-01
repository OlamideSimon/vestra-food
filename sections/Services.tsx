'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { MdDiscount } from 'react-icons/md'

import img1 from '@/public/img1.jpg'
import img2 from '@/public/img2.jpg'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'

const services = [
  {
    image: img1,
    title: 'Buy Food',
    description:
      'Now our online platforms where you can browse and purchase groceries. You can typically choose from a variety of categories like fresh produce, pantry staples, dairy products, meant and more.',
  },
  {
    image: img2,
    title: 'Your Cart',
    description:
      'The cart section allows you to see a list of the food items you have added. You can review the name, quantities, sizes and prices of each item.',
  },
]

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="lg:px-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="text-center mt-20 max-w-xl lg:max-w-5xl mx-auto space-y-5">
        <p className="text-3xl lg:text-4xl text-slate-400">More Features</p>
        <h4 className="text-4xl lg:text-5xl font-semibold">
          We provide different type of services
        </h4>
        <p className="text-2xl tracking-wider">
          Food website services offer convenience and variety, allowing users to browse
          and purchase groceries, meal kits and restaurant meals online
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 my-10">
        <FeatureCard
          title="Fresh Ingredients"
          Icon={GiOpenedFoodCan}
          description={`"It's simple. Great ingredients make great food"`}
          className="bg-yellow-50/90 col-span-12 md:col-span-6"
        />
        <FeatureCard
          title="Discount & Sale"
          Icon={MdDiscount}
          description="Unlock incredible savings with our exclusive discounts and sales. Shop now and enjoy great deals on your favorite products."
          className="bg-blue-50 col-span-12 md:col-span-6"
        />
        <FeatureCard
          title="Discount & Sale"
          Icon={MdDiscount}
          description="Unlock incredible savings with our exclusive discounts and sales. Shop now and enjoy great deals on your favorite products."
          className="bg-yellow-100/50 col-span-12 sm:col-span-7 md:col-span-8"
        />
        <div className="bg-slate-900 col-span-12 sm:col-span-5 md:col-span-4 text-white rounded-3xl grid place-content-center text-center tracking-wider py-10">
          <p className="text-3xl lg:text-5xl font-semibold">
            +5 <br />
            Services Available
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Services
