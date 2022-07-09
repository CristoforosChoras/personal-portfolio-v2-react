import React from "react";
import { SocialIcon } from 'react-social-icons';

import {
  FooterContainer,
  FooterWrap,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
      <SocialIcon url="https://twitter.com/c_choras" />
      <SocialIcon bgColor="white" fgColor="#0a66c2" url="https://www.linkedin.com/in/christoforos-choras-213220223/" />
      <SocialIcon url="https://instagram.com/christophchoras" />
      <SocialIcon bgColor="white" url="https://github.com/CristoforosChoras" />
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
