import React from "react";
import Typewriter from "typewriter-effect";
import Video from "../../videos/video3.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  Writter,
  NameText,
  GreetingText,
} from "./HeroElements";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Writter>
          <HeroH1>
            <GreetingText>Welcome, I am</GreetingText>
            <NameText>Christoforos</NameText>
          </HeroH1>
          <HeroP>
            <Typewriter
              options={{
                cursor: "_",
                strings: ["I am a Junior web developer Based in Germany"],
                autoStart: true,
                delay: 95,
                loop: true,
                pauseFor: 2500,
              }}
            />
          </HeroP>
        </Writter>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
