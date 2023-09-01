'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRightShort } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { BiLogoFacebook, BiLogoGoogle, BiLogoInstagram } from 'react-icons/bi'
import Button from '@/components/Buttons'

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid justify-center text-center space-y-5 mb-10 px-5">
        <p className="text-5xl font-bold">Join Us</p>
        <p className="text-4xl">Signup to receive update and discounts for all food.</p>
        <div className="bg-slate-200 rounded-3xl flex items-center p-2">
          <input
            placeholder="johndoe@gmail.com"
            className="outline-none bg-transparent p-5 text-left w-full"
          />
          <BsArrowRightShort className="text-3xl text-slate-700 cursor-pointer" />
        </div>
      </div>

      <div className="border-t flex flex-col md:flex-row justify-around p-10 tracking-widest text-center gap-5 items-center">
        <div>
          <p className="text-6xl">Vestra</p>
          <p className="text-2xl">Food Delivery site</p>
        </div>

        <div className="flex space-x-5 justify-center">
          <FooterIcon Icon={BiLogoFacebook} />
          <FooterIcon Icon={BiLogoInstagram} />
          <FooterIcon Icon={BiLogoGoogle} />
        </div>
      </div>
      <p className="text-center text-xl">
        Inspiration from{' '}
        <a
          target="_blank"
          href="https://www.behance.net/gallery/174967181/Food-website?tracking_source=search_projects|restaurant+ui+design"
        >
          Sameer Khanml♡
        </a>
      </p>
    </motion.div>
  )
}

const FooterIcon = ({ Icon }: { Icon: IconType }) => (
  <Button className="w-16 h-16 bg-primary-500 rounded-full grid place-content-center">
    <Icon className="text-4xl text-slate-700" />
  </Button>
)

export default Footer
