import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: #e9ecef;
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 2200px;
  }
  @media screen and (max-width: 780px) {
    height: 1900px;
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

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 650px;
  padding: 30px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 780px) {
    height: 500px;
  }
`;

export const ProjectIcon = styled.img`
  height: 480px;
  width: 460px;
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
  font-size: 1rem;
  margin-bottom: 20px;
`;
export const ProjectP = styled.p``;

export const TechWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 10px;
`;

export const Techs = styled.div`
  color: #e9ecef;
  background-color: #0d47a1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 25px;
  margin-top: 10px;
`;
