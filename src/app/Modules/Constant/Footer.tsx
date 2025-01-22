const FooterData = [
  {
    title: "DM Cockpit",
    pages: [
      {
        name: "Download",
        route: "#",
      },
      {
        name: "Careers",
        route: "#",
      },
      {
        name: "About Us",
        route: "#",
      },
      {
        name: "Clients",
        route: "#",
      },
      {
        name: "Community",
        route: "#",
      },
      {
        name: "Reviews",
        route: "#",
      },
    ],
  },
  {
    title: "Resouces",
    pages: [
      {
        name: "parteners",
        route: "#",
      },
      {
        name: "On demand demo",
        route: "#",
      },
      {
        name: "webinars",
        route: "#",
      },
      {
        name: "contact us",
        route: "#",
      },
    ],
  },
  {
    title: "Learn More",
    pages: [
      {
        name: "About Us",
        route: "#",
      },
      {
        name: "Plan And Pricing",
        route: "#",
      },
      {
        name: "Features",
        route: "#",
      },
      {
        name: "Suppport",
        route: "#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="Footer_Container ">
      <div className="Company_details_Conatiner">
        <img src={"/logo2.png"} alt="logo" className="footer_logo" />
        <p className="footer_desc">
          {`It's an Ultimate SERP Rank Tracking & Analytics Platform for SEO
          Professionals, here you experience the Power of Real-Time Insights and
          Effortless SEO Project Management`}
        </p>
        <img
          src={"/footer/footer-authorized-img.png"}
          alt="AuthorizedImage"
          className="authorizedImage"
        />
      </div>

      <div className="middle_Links_Container">
        {/* //all links  */}
        {FooterData?.map((links, index) => {
          return (
            <div className="Links_Container" key={index}>
              <p className="LinkHeading text-xs sm:text-[17px] w-max">{links?.title}</p>
              <div className="Links_pages sm:text-base text-xs">
                {links?.pages?.map((pages, idx) => {
                  return (
                    <a
                      key={idx}
                      style={{ color: "var(--primary-color)" }}
                      href={pages?.route}
                    >
                      {pages?.name}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* //contact us detaisl */}
      <div className="Contact_Link_Container">
        <p className="LinkHeading">Contact us</p>
        <div className="socialMedia_links flex">
          <img src={"/footer/insta.png"} alt="instaImage" />
          <img src={"/footer/indeed.png"} alt="facebookImage" />
          <img src={"/footer/indeed.png"} alt="indeedImage" />
        </div>
        <img
          src={"/footer/dmca_protected_sml_120aa.png"}
          alt="DMCALockedImage"
        />
      </div>
    </div>
  );
};
