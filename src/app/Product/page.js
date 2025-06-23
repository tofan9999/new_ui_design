import React from 'react'
import HeroSection from '@/components/productSection/heroSection'
import Template from '../layout/Template'
import AboutSection from '@/components/productSection/aboutSection'
import ReatingSection from '@/components/productSection/reatingSection'
function page() {
  return (
    <Template>
        {/* product hero section */}
        <HeroSection/>
        {/* about section */}
        <AboutSection />

        {/* ratting section */}

        <ReatingSection/>


    </Template>
  )
}

export default page