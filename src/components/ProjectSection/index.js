import React from "react";
import Icon1 from "../../images/weather-app.png";
import Icon2 from "../../images/to-do-list.png";
import Icon3 from "../../images/portfolio.png";

import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
  TechWrapper,
  Techs,
  ProjectDescription,
} from "./ProjectSectionElements";

function ProjectSection() {
  return (
    <ProjectContainer>
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard to="/https://github.com/CristoforosChoras/weather-web-app-react">
          <ProjectIcon src={Icon1}></ProjectIcon>
          <ProjectH2>Weather App</ProjectH2>
          <ProjectDescription>
            Weather Forecast App Development enables the user to add numerous
            locations to the list to verify the weather data accordingly.
          </ProjectDescription>
          <ProjectP>Technologies</ProjectP>
          <TechWrapper>
            <Techs>React.js</Techs>
            <Techs>Tailwind</Techs>
          </TechWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}></ProjectIcon>
          <ProjectH2>To do list</ProjectH2>
          <ProjectDescription>
            a to do list of things that one wants to get done or that need to get done
          </ProjectDescription>
          <ProjectP>Technologies</ProjectP>
          <TechWrapper>
            <Techs>React.js</Techs>
            <Techs>CSS</Techs>
            <Techs>MaterialUI</Techs>
          </TechWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3}></ProjectIcon>
          <ProjectH2>Portfolio Project</ProjectH2>
          <ProjectDescription>
            Elegant portfolio website to showcase my career, skills and projects
            to the public
          </ProjectDescription>
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
