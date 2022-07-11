import styled from "styled-components";

export const ToolsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c090d;

  @media screen and (max-width: 980px) {
    height: 1300px;
  }
  @media screen and (max-width: 680px) {
    height: 1600px;
  }
`;

export const ToolsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 0;
  }
`;

export const ToolCard = styled.div`
  background: #e9ecef;
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
  }
`;

export const ToolIcon = styled.img`
  height: 180px;
  width: 160px;
  margin-bottom: 10px;
  @media screen and (max-width: 780px) {
    width: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

export const ToolsH1 = styled.h1`
  font-size: 2.5rem;
  color: #e9ecef;
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
