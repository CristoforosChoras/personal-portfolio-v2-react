import React from "react";
import Icon1 from "../../images/weather-app.png";
import Icon2 from "../../images/to-do-list.png"
import Icon3 from "../../images/portofolio.png"

import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
  TechWrapper,Techs
} from "./ProjectSectionElements";

function ProjectSection() {
  return (
    <ProjectContainer>
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1}></ProjectIcon>
          <ProjectH2>Weather App</ProjectH2>
          <ProjectP>Technologies</ProjectP>
          <TechWrapper>
            <Techs>React.js</Techs>
            <Techs>Tailwind</Techs>
          </TechWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}></ProjectIcon>
          <ProjectH2>To do list</ProjectH2>
          <ProjectP>Technologies</ProjectP>
          <TechWrapper>
            <Techs>React.js</Techs>
            <Techs>Css</Techs>
          </TechWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3}></ProjectIcon>
          <ProjectH2>Weather App</ProjectH2>
          <ProjectP>Technologies</ProjectP>
          <TechWrapper>
            <Techs>React.js</Techs>
            <Techs>Styled-Components</Techs>
          </TechWrapper>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
}

export default ProjectSection;

