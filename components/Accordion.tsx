'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

type AccordionType = {
  sections: {
    title: string
    content: string
  }[]
}

const Accordion = ({ sections }: AccordionType) => {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  const toggleSection = (index: number): void => {
    if (index === activeSection) {
      setActiveSection(null)
    } else {
      setActiveSection(index)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence>
        {sections.map(({ content, title }, index) => (
          <motion.div key={index} className="border-b tracking-wider">
            <div
              className={`bg-gray-100 p-3 cursor-pointer flex justify-between items-center text-2xl ${
                index === activeSection ? 'bg-gray-200' : ''
              }`}
              onClick={() => toggleSection(index)}
            >
              {title}
              <span className="text-xl">
                {index === activeSection ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            {index === activeSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={index === activeSection ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="p-3 text-xl"
              >
                {content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
