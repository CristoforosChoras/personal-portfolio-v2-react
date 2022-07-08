import styled from "styled-components";

export const ToolsContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: fit-content;
  }
  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const ToolsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    padding: 0 0;
  }
`;

export const ToolCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ToolIcon = styled.img`
  height: 180px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

export const ToolsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ToolsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 64px;
`;

export const ToolsP = styled.p`
  font-size: 1rem;
  margin-bottom: 64px;
`;
