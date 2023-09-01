import Faq from '@/sections/Faq'
import Services from '@/sections/Services'
import SlideShow from '@/sections/SlideShow'
import Testimonials from '@/sections/Testimonials'

export default function Home() {
  return (
    <>
      <SlideShow />
      <Services />
      <Testimonials />
      <Faq />
    </>
  )
}
