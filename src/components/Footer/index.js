import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTittle,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTittle>Home</FooterLinkTittle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTittle>About</FooterLinkTittle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTittle>Projects</FooterLinkTittle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTittle>Contact</FooterLinkTittle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
