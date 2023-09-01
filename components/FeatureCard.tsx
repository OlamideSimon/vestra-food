import React from 'react'
import { IconType } from 'react-icons'

type CardType = {
  className?: string
  title: string
  Icon: IconType
  description: string
}

const FeatureCard = ({ Icon, description, title, className }: CardType) => {
  return (
    <div className={`rounded-3xl p-10 tracking-wider ${className}`}>
      <Icon size={50} className="mb-16" />
      <p className="text-2xl lg:text-4xl my-5 font-bold">{title}</p>
      <p className="text-lg lg:text-2xl">{description}</p>
    </div>
  )
}

export default FeatureCard
