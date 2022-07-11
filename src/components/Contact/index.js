import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
  FullName,
  Email,
  TextArea,
  Subject,
  SubmitBtnForm,
} from "./ContactElements";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pap46jm",
        "template_3yju9vt",
        form.current,
        "mZEvW8o6nKvNq_BrM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
   
  };
  return (
    <ContactContainer>
      <HomeIcon to="/">Chris</HomeIcon>
      <ContactSubH>Get in touch</ContactSubH>
      <ContactH1>CONTACT</ContactH1>
      <ContactWrapper>
        <ContactInfo>
          <MailWrapper>
            <MailIcon>
              <AiOutlineMail color="white" size={36}></AiOutlineMail>:
            </MailIcon>
            <MailText>Christoforos.choras1@gmail.com</MailText>
          </MailWrapper>
          <TelWrapper>
            <TelIcon>
              <ImPhone color="white" size={36}></ImPhone>:
            </TelIcon>
            <TelText>+49 1795349367</TelText>
          </TelWrapper>
          <LocationWrapper>
            <LocationIcon>
              <ImLocation2 color="white" size={36}></ImLocation2>:
            </LocationIcon>
            <LocationText>Bitterfeld-Wolfen 06766</LocationText>
          </LocationWrapper>
        </ContactInfo>
        <LineDisplay></LineDisplay>
        <ContactFormWrapper ref={form}>
          <FullName
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          ></FullName>
          <Email
            type="email"
            name="user_email"
            placeholder="Your E-mail"
            required
          ></Email>
          <Subject
            type="text"
            name="Subject"
            placeholder="Subject"
            required
          ></Subject>
          <TextArea
            type="text"
            name="message"
            placeholder="  Your message"
            cols={30}
            rows={10}
          ></TextArea>
          <SubmitBtnForm type="submit" onSubmit={sendEmail}  >
            Send Message
          </SubmitBtnForm>
        </ContactFormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
