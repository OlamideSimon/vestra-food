import Image, { StaticImageData } from 'next/image'
import React from 'react'

type CardType = {
  image: StaticImageData
  title: string
  description: string
}

const ServiceCard = ({ description, image, title }: CardType) => {
  return (
    <div className="w-full bg-slate-200/70 px-10 py-10 lg:py-20 rounded-3xl tracking-wider">
      <div className="h-60 lg:h-80">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-2xl lg:text-4xl my-5 font-bold">{title}</p>
      <p className="text-lg lg:text-2xl">{description}</p>
    </div>
  )
}

export default ServiceCard
