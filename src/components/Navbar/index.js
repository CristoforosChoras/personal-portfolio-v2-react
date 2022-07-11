import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

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
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
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
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                offset={-80}
              >
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                offset={-80}
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="tools"
                smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                offset={-80}
              >
                Tools
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="project" smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                offset={-80}>Projects</NavLinks>
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
