import React from "react";
import Icon1 from "../../images/html.svg";
import Icon2 from "../../images/css.svg";
import Icon3 from "../../images/javaScript.svg";
import Icon4 from "../../images/reactjs.svg";
import Icon5 from "../../images/tailwind.svg";
import Icon6 from "../../images/bootstrap.svg";
import Icon7 from "../../images/material-ui.svg";
import Icon8 from "../../images/git.svg";
import {
  ToolsContainer,
  ToolsH1,
  ToolsWrapper,
  ToolCard,
  ToolIcon,
  ToolsH2,
} from "./ToolsElements";

function Tools() {
  return (
    <ToolsContainer id="tools">
      <ToolsH1>My tech stack</ToolsH1>
      <ToolsWrapper>
        <ToolCard >
          <ToolIcon src={Icon1}></ToolIcon>
          <ToolsH2>HTML</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon2}></ToolIcon>
          <ToolsH2>CSS</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon3}></ToolIcon>
          <ToolsH2>javaScript</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon4}></ToolIcon>
          <ToolsH2>react</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon5}></ToolIcon>
          <ToolsH2>Tailwind</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon6}></ToolIcon>
          <ToolsH2>Bootstrap</ToolsH2>
        </ToolCard>{" "}
        <ToolCard>
          <ToolIcon src={Icon7}></ToolIcon>
          <ToolsH2>Material-ui</ToolsH2>
        </ToolCard>
        <ToolCard>
          <ToolIcon src={Icon8}></ToolIcon>
          <ToolsH2>Git</ToolsH2>
        </ToolCard>
      </ToolsWrapper>
    </ToolsContainer>
  );
}

export default Tools;
