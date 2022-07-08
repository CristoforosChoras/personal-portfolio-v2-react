import React from "react";
import { ToolCard, ToolIcon, ToolsH2, ToolsWrapper } from "../Tools/ToolsElements";
import { ProjectContainer ,Projecth1, } from "./ProjectSectionElements";
import Icon1 from "../../images/Weather-app.png";

function ProjectSection() {
  return (
    <ProjectContainer>
    <Projecth1>My Projects</Projecth1>
    <ToolsWrapper>
      <ToolCard>
        <ToolIcon src={Icon1}></ToolIcon>
        <ToolsH2>HTML</ToolsH2>
      </ToolCard>
      <ToolCard>
        <ToolIcon src={Icon1}></ToolIcon>
        <ToolsH2>HTML</ToolsH2>
      </ToolCard>
      <ToolCard>
        <ToolIcon src={Icon1}></ToolIcon>
        <ToolsH2>HTML</ToolsH2>
      </ToolCard>
      <ToolCard>
        <ToolIcon src={Icon1}></ToolIcon>
        <ToolsH2>HTML</ToolsH2>
      </ToolCard>
      </ToolsWrapper>
    </ProjectContainer>
  );
}

export default ProjectSection;
