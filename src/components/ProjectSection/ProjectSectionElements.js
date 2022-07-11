
import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 2400px;
  }
  @media screen and (max-width: 780px) {
    height: 2200px;
  }
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #0c090d;
  margin-top: 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 40px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.a`
  background: #0c090d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  height: 720px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 1000px) {
    
    width: 600px;
  }
  @media screen and (max-width: 780px) {
    height: 600px;
    width: 500px;
  }
  @media screen and (max-width: 580px) {
    
    width: 350px;
  }
`;

export const ProjectIcon = styled.img`
align-self: center;
  height: 600px;
  width: 400px;
  border-radius: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 780px) {
    width: 280px;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 280px;
    height: 300px;
  }
`;

export const ProjectH2 = styled.h2`
  color: #e9ecef;
  font-size: 1rem;
  margin-bottom: 25px;
`;

export const ProjectDescription = styled.p`
  text-align: left;
  color: #e9ecef;
  font-size: 12px;
  margin-bottom: 25px;
`;
export const ProjectP = styled.p`
  color: #e9ecef;
  font-size: 25px;
  align-self: flex-start;
  margin-bottom: 25px;
`;

export const TechWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Techs = styled.div`
  width: fit-content;
 padding: 0 20px ;
  height: 35px;
  color: #e9ecef;
  background-color: #0d47a1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* padding: 10px 45px; */
  margin-top: 10px;
  @media screen and (max-width: 580px) {
    font-size: 14px;
    
  }
`;
