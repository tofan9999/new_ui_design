import React from 'react'
import HeroSection from '@/components/services/heroSection'
import Template from '../layout/Template'
import AboutSection from '@/components/services/aboutSection'
import Maps from '@/components/services/maps'


function page() {
  return (
    <Template>
    {/* // services herosectin  */}
    <HeroSection/>
    {/* about of services  */}
    <AboutSection/>

    {/* google map */}
    <Maps/>

    </Template>
  )
}

export default page