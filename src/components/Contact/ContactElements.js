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
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;
export const MailWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #3c3a3d;
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
  height: 50px;
  background-color: #3c3a3d;
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
  height: 50px;
  background-color: #3c3a3d;
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
  height: 300px;
  border-left: 1px #e9ecef solid;

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
  background-color: #3c3a3d;
  height: 35px;
  width: 280px;
  border-radius: 10px;
`;
export const Email = styled.input`
  background-color: #3c3a3d;
  height: 35px;
  width: 280px;
  border-radius: 10px;
`;
export const Subject = styled.input`
  background-color: #3c3a3d;
  height: 35px;
  width: 280px;
  border-radius: 10px;
`;
export const TextArea = styled.textarea`
  background-color: #3c3a3d;
  border-radius: 10px;
`;
export const SubmitBtnForm = styled.button`
  background-color: #3c3a3d;
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
    color: #3c3a3d;
    
  }
`;
