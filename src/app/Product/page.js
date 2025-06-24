import React from 'react'
import HeroSection from '@/components/productSection/heroSection'
import Template from '../layout/Template'
import AboutSection from '@/components/productSection/aboutSection'
import ReatingSection from '@/components/productSection/reatingSection'
import TeamSection from '@/components/productSection/teamSection'
import MissionvissionSection from '@/components/productSection/missionvissionSection'

function page() {
  return (
    <Template>
        {/* product hero section */}
        <HeroSection/>
        {/* about section */}
        <AboutSection />

        {/* ratting section */}

        <ReatingSection/>

        {/* our teams section */}

        <TeamSection/>

        {/* mission vission section */}

        <MissionvissionSection/>

       


    </Template>
  )
}

export default page