import React from "react";
import { FaBars } from "react-icons/fa";
import Icon1 from "../../images/logo.png";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ImgLogo
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            Chris
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tools">Tools</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="project">Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact me</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
