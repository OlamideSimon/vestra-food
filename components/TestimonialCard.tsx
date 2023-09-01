import React from 'react'

type CardType = {
  name: string
  job: string
  comment: string
}

const TestimonialCard = ({ comment, job, name }: CardType) => {
  return (
    <div className="max-w-[450px] shadow-2xl py-10 px-5 border border-slate-500 rounded-xl mx-auto first:col-span-12 col-span-12 lg:col-span-6 tracking-wider">
      <p className="text-4xl">{name}</p>
      <p className="text-xl">{job}</p>
      <p className="mt-5 text-xl">"{comment}"</p>
    </div>
  )
}

export default TestimonialCard
