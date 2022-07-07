import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Video from "../../videos/video3.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Writter,
  NameText,
  GreetingText,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Writter>
          <HeroH1>
            <GreetingText>Welcome, I'am</GreetingText>
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
        <HeroBtnWrapper>
          <Button
            to="contactme"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Me{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
