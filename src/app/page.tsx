import { FeaturesSection } from "./Modules/Home/FeaturesSection";
import { DMCaptain } from "./Modules/Home/DMCaptain";
import { Plans } from "./Modules/Home/Plans";
import { StraightForward } from "./Modules/Home/StraightForward";
import { Faq } from "./Modules/Home/Faq";
import { Cleintele } from "./Modules/Home/Cleintele";
import { DmCockpit_Integrated_With } from "./Modules/Home/DmCockpit_Integrated_With";
import { StillhaveaQuery } from "./Modules/Home/StillhaveaQuery";
import { BannerSection24_7 } from "./Modules/Home/BannerSection24_7";
import { Support } from "./Modules/Home/Support";
import Testimonial from "./Modules/Home/Tesimonials";
import ContactUsBanner from "./Modules/Home/ContactUsBanner";
import NewHomeBanner from "./Modules/Home/NewBanner";
import ContactUsHorizontalBanner from "./Modules/Home/ContactUsHorizonalBanner";

const page = () => {
  return (
    <>
      {/* //home banner  */}
      <NewHomeBanner />


      {/* //contact us banner */}
      <ContactUsHorizontalBanner />

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

      {/* //query section  */}
      <StillhaveaQuery />

      {/* //Testimonial */}
      <Testimonial />

      {/* //clientele  */}
      <Cleintele />

      {/* //integrated with  */}
      <DmCockpit_Integrated_With />

      {/* //contact us banner  */}
      <ContactUsBanner />

      {/* //24/7 banner  */}
      <BannerSection24_7 />

      {/* //suport section  */}
      <Support />
    </>
  );
};

export default page;
