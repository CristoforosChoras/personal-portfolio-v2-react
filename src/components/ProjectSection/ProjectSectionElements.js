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
