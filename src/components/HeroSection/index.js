import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from "./HeroElements";

function HeroSection() {
const [hover,setHover] = useState(false)

const onHover =()=>{
    setHover(!hover)
} 
     
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>My name is Chri</HeroH1>
        <HeroP>
          I am a web developer living germany,Berlin.currently i am studying in
          DCI,in this course i am trying to gain more knowledge to achieve my
          goals
        </HeroP>
        <HeroBtnWrapper>
            <Button to="contactme" onMouseEnter={onHover} onMouseLeave={onHover}>
                    contactme{hover? <ArrowForward/>:<ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
