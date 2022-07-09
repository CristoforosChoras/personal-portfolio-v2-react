import React from "react";
import Icon1 from "../../images/weather-app.png";
import Icon2 from "../../images/to-do-list.png"

import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./ProjectSectionElements";

function ProjectSection() {
  return (
    <ProjectContainer>
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1}></ProjectIcon>
          <ProjectH2>Weather App</ProjectH2>
          <ProjectP>React.js Tailwind</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}></ProjectIcon>
          <ProjectH2>To do list</ProjectH2>
          <ProjectP>React.js Tailwind</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon1}></ProjectIcon>
          <ProjectH2>Weather App</ProjectH2>
          <ProjectP>React.js Tailwind</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
}

export default ProjectSection;

