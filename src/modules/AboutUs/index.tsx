import MeetTheFounder from "./components/MeetTheFounder";
import OurMission from "./components/OurMission";
import WhoWeAre from "./components/WhoWeAre";
import CompanyValues from "./components/CompanyValues";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import OurTeam from "./components/OurTeam";
import HomeTestimonials from "../Home/components/HomeTestimonials";
import { testimonialArray } from '../Home/testimonialsData';

const AboutUs = () => {
  const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])
    return (
        <div>
          <OurMission />
          <WhoWeAre />
          <MeetTheFounder />
          <OurTeam />
          <CompanyValues />
          <HomeTestimonials data={testimonialArray} type="textVideo"/>
        </div>
    )
}

export default AboutUs
