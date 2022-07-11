import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background-color: #0c090d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 40rem;
  position: relative;
  z-index: 1;


  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  flex-direction: column;
`;
export const Writter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.div`
  color: #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const GreetingText = styled.h2`
  font-size: 23px;
`;

export const NameText = styled.h1`
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.div`
  margin-top: 24px;
  color: #e9ecef;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

