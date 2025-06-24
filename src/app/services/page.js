import React from 'react'
import HeroSection from '@/components/services/heroSection'
import Template from '../layout/Template'
import AboutSection from '@/components/services/aboutSection'
import Maps from '@/components/services/maps'
import FaqSection from '@/components/productSection/faqSection'


function page() {
  return (
    <Template>
    {/* // services herosectin  */}
    <HeroSection/>
    {/* about of services  */}
    <AboutSection/>

    {/* google map */}
    <Maps/>

     {/* faq Section */}

        <FaqSection/>

    </Template>
  )
}

export default page