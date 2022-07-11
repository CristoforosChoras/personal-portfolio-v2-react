import { Link as LinkR } from "react-scroll";
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0c090d;
  color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  
`;
export const HomeIcon = styled(LinkR)`
  font-family: "Nothing You Could Do", cursive;
  background-color: black;
  color: #e9ecef;
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: bold;
  text-decoration: none;
`;
export const ContactSubH = styled.h4`
  font-size: 12px;
 
`;
export const ContactH1 = styled.h1`
  font-size: 45px;
  margin-bottom: 50px;
  
`;

export const ContactWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactInfo = styled.div`
  width: 350px;
  height: 350px;
  border: 3px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;
export const MailWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 2px red solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MailText = styled.div`
  width: 320px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const MailIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LocationWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 2px green solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const LocationText = styled.p`
  width: 320px;
  text-align: start;
  margin: 20px;
`;

export const TelWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 2px green solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TelIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const TelText = styled.p`
  width: 320px;
  text-align: start;
  margin: 20px;
`;
export const LineDisplay = styled.div`
  height: 350px;
  border-left: 2px black solid;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ContactFormWrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 3px blue solid;
  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;
export const LogoContainer = styled.div`
width: 100vw;
background-color: black;

`