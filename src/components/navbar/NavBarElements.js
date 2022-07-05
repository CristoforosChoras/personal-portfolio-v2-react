import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import{Link as LinkS} from "react-scroll"

export const Nav = styled.nav`
  background: #000;
  height: 5rem;
  /* margin-top: -5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width: 960px) {
    transition: 0.8sec all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {

display: block;
position: absolute;
top:0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: white;

}`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavItem = styled.li` 
height: 5rem;
`

export const NavLinks = styled(LinkS)` 
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
  border-bottom:3px solid blue;
}
`
export const NavBtn = styled.nav`  
display: flex;
align-items: center;

@media screen and (max-width: 768px){
  display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px ;
background-color: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: black;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
  transition: all 0.2 ease-in-out;
  background-color: white;
  color: black;
}
`

