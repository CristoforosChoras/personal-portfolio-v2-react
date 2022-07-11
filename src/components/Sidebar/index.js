import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="tools" onClick={toggle}>Tools</SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
          <SidebarLink to="project" onClick={toggle}>Project</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
