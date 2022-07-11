import React from "react";
import { SocialIcon } from "react-social-icons";

import {
  FooterContainer,
  FooterWrap,
  SocialWrapper,
  WebSiteRigths as WebSiteRights,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialWrapper>
          <SocialIcon target="_blank" url="https://twitter.com/c_choras" />

          <SocialIcon
            target="_blank"
            bgColor="white"
            fgColor="#0a66c2"
            url="https://www.linkedin.com/in/christoforos-choras-213220223/"
          />
          <SocialIcon
            target="_blank"
            url="https://instagram.com/christophchoras"
          />
          <SocialIcon
            target="_blank"
            bgColor="white"
            url="https://github.com/CristoforosChoras"
          />
        </SocialWrapper>
        <WebSiteRights>
          Chris © {new Date().getFullYear()} all icons by unDraw & SVGrepo
        </WebSiteRights>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
