import React from 'react'
import HomeBanner from './Modules/Home/Banner'
import { FeaturesSection } from './Modules/Home/FeaturesSection'
import { DMCaptain } from './Modules/Home/DMCaptain'
import { Plans } from './Modules/Home/Plans'
import { StraightForward } from './Modules/Home/StraightForward'
import { Faq } from './Modules/Home/Faq'
import { Cleintele } from './Modules/Home/Cleintele'
import { DmCockpit_Integrated_With } from './Modules/Home/DmCockpit_Integrated_With'
import { StillhaveaQuery } from './Modules/Home/StillhaveaQuery'
import { BannerSection24_7 } from './Modules/Home/BannerSection24_7'
import { Support } from './Modules/Home/Support'
import Testimonial from './Modules/Home/Tesimonials'

const page = () => {
  return (
    <>
    {/* //home banner  */}
    <HomeBanner />

    {/* //feature section  */}
    <FeaturesSection />

    {/* //dm captain section  */}
    <DMCaptain />

    {/* //Plans section  */}
    <Plans />


    {/* //straight forward section  */}
    <StraightForward />


    {/* //faq section  */}
    <Faq />

    {/* //Testimonial */}
    <Testimonial />


    {/* //clientele  */}
    <Cleintele />

    {/* //integrated with  */}
    <DmCockpit_Integrated_With />


    {/* //query section  */}
    <StillhaveaQuery />

    {/* //24/7 banner  */}
    <BannerSection24_7 />

    {/* //suport section  */}
    <Support />

    </>
  )
}

export default page