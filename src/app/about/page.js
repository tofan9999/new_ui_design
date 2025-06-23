import React from 'react'
import Template from '../layout/Template'
import HeroSection from '@/components/about/heroSection'
import AboutSection from '@/components/about/aboutSection'
import ServicesSection from '@/components/about/servicesSection'
import TestimonialSection  from '@/components/about/testimonialSection'
import FaqSection from '@/components/about/faqSection'

const page = () => {
  return (
    <Template>
      {/* home section */}
    <HeroSection />
    {/* about section */}
    < AboutSection/>
     {/* Services section */}
     < ServicesSection/>

     {/* testimonial section */}
     <TestimonialSection/>

     {/* faq section */}
     < FaqSection/>

    </Template>
  )
}

export default page