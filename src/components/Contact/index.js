import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2, ImPhone } from "react-icons/im";

import {
  ContactContainer,
  ContactSubH,
  ContactH1,
  ContactWrapper,
  ContactInfo,
  MailWrapper,
  MailIcon,
  MailText,
  LocationWrapper,
  LocationIcon,
  LocationText,
  ContactFormWrapper,
  TelWrapper,
  TelIcon,
  TelText,
  LineDisplay,
  HomeIcon,
} from "./ContactElements";

function Contact() {
  return (
    <ContactContainer>
      <ContactSubH>Get in touch</ContactSubH>
      <ContactH1>CONTACT</ContactH1>
      <ContactWrapper>
        <ContactInfo>
          <MailWrapper>
            <MailIcon>
              <AiOutlineMail color="black" size={35}></AiOutlineMail>:
            </MailIcon>
            <MailText>Chrisotpher.choras@yahoo.com</MailText>
          </MailWrapper>
          <TelWrapper>
            <TelIcon>
              <ImPhone color="black" size={35}></ImPhone>:
            </TelIcon>
            <TelText>+49 1795349367</TelText>
          </TelWrapper>
          <LocationWrapper>
            <LocationIcon>
              <ImLocation2 color="black" size={35}></ImLocation2>:
            </LocationIcon>
            <LocationText>Bitterfeld-Wolfen 06766</LocationText>
          </LocationWrapper>
        </ContactInfo>
        <LineDisplay></LineDisplay>
        <ContactFormWrapper></ContactFormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
