import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">blabla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="project">Projects</NavLinks>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contacme">Contact me</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
