'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '@/components/TestimonialCard'

const testimonials = [
  {
    name: 'Shege Banza',
    job: 'Hausa Master',
    comment:
      'Walai-talai I enjoy the food way me deliver for me. E sweet am for my belle.',
  },
  {
    name: 'Waim Soul',
    job: 'A weakling',
    comment:
      'I was to lazy to go pick my ordered meal up but guess what, they delivered it within 30mins and all in good shape, looking so enticing.',
  },
  {
    name: 'Itachi Uchiha',
    job: 'Anime Character',
    comment:
      'Had to take some time to refill my belly before I go torture my little brother(Sasuke) and Vestra did the job.',
  },
]

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="lg:px-40"
    >
      <div className="text-center mt-20 max-w-xl lg:max-w-5xl mx-auto space-y-5">
        <p className="text-3xl lg:text-4xl text-slate-400">Testimonials</p>
        <h4 className="text-4xl lg:text-5xl font-semibold">
          What our customers have to say about our food
        </h4>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-10 overflow-hidden">
        {testimonials.map(({ comment, job, name }, index) => (
          <TestimonialCard comment={comment} job={job} name={name} key={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
