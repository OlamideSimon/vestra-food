'use client'

import React, { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface ButtonType extends HTMLAttributes<HTMLButtonElement> {
  className: string
}

const Button = ({ className, children }: ButtonType) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export default Button
