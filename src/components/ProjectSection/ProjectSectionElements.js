import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 980px) {
    height: 1000px;
  }
  @media screen and (max-width: 680px) {
    height: 1000px;
  }
`;

export const Projecth1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-top: 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
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
  }
`;
export const ToolIcon = styled.img`
  height: 180px;
  width: 260px;
  margin-bottom: 10px;
  @media screen and (max-width: 780px) {
    width: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;
