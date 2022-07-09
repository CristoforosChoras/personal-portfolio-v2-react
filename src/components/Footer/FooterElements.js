import styled from "styled-components";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;

  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  align-items: center;
  border: 3px white solid;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTittle = styled.h1`
font-size: 18px;

`;
