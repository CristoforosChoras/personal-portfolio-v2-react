import React from "react";
import projectInfoData from "./data";

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
    <ProjectContainer id="project">
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        {projectInfoData.map((item, idx) => {
          return (
            <ProjectCard href={item.link} target={item.target}>
              <ProjectIcon src={item.img}></ProjectIcon>
              <ProjectH2>{item.heading}</ProjectH2>
              <ProjectDescription>{item.description}</ProjectDescription>
              <ProjectP>Technologies</ProjectP>
              <TechWrapper>
                <Techs>{item.tech1}</Techs>
                <Techs>{item.tech2}</Techs>
                {item.display && <Techs>{item.tech3}</Techs>}
              </TechWrapper>
            </ProjectCard>
          );
        })}
      </ProjectWrapper>
    </ProjectContainer>
  );
}

export default ProjectSection;
