import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const ContactContainer = styled.div`
height: 100vh;
  background-color: #0c090d;
  color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  @media screen and (max-width: 1080px){
    height: 1000px;
  }
`;
export const HomeIcon = styled(LinkR)`
  font-family: "Nothing You Could Do", cursive;
  justify-self: flex-start;
  align-self: flex-start;
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
  display: flex;
  justify-content: space-evenly;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactInfo = styled.div`
  width: 350px;
  height: 350px;
  color:  #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;

  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;
export const MailWrapper = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
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
  height: 45px;
  background-color: #222831;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
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
  height: 45px;
  background-color: #222831;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
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
align-self: center;
  height: 280px;
  border-left: 1px #e9ecef solid;
  opacity: 0.5;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ContactFormWrapper = styled.form`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const FullName = styled.input`
  background-color: #222831;
  height: 35px;
  width: 280px;
  border-radius: 10px;
  border: none;
`;
export const Email = styled.input`
  background-color: #222831;
  height: 35px;
  width: 280px;
  border-radius: 10px;
  border: none;
`;
export const Subject = styled.input`
  background-color: #222831;
  height: 35px;
  width: 280px;
  border-radius: 10px;
  border: none;
  
`;
export const TextArea = styled.textarea`
  background-color: #222831;
  border-radius: 10px;
  border: none;
  color:  #e9ecef;
`;
export const SubmitBtnForm = styled.button`
  background-color: #222831;
  color:  #e9ecef;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  border: none;
  cursor: pointer;



  &:hover{
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    background-color:  #e9ecef;
    color: #222831;
    
  }
`;
