'use client'
import Accordion from '@/components/Accordion'
import { motion } from 'framer-motion'
import React from 'react'

const sections = [
  {
    title: 'Who is Vestra',
    content: 'I am Vestra',
  },
  { title: 'What do I do for a living', content: 'Guess...' },
]

const Faq = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="lg:px-40 space-y-20"
    >
      <div className="text-center mt-20 max-w-xl lg:max-w-5xl mx-auto space-y-5">
        <p className="text-3xl lg:text-4xl text-slate-400">FAQ</p>
        <h4 className="text-4xl lg:text-5xl font-semibold">
          Here are the answers to the most frequently asked questions
        </h4>
      </div>

      <Accordion sections={sections} />
    </motion.div>
  )
}

export default Faq
