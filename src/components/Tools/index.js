import React from "react";
import frontEndTools from "./data";
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
        {frontEndTools.map((item, idx) => {
          return (
            <ToolCard>
              <ToolIcon src={item.img}></ToolIcon>
              <ToolsH2>{item.tittle}</ToolsH2>
            </ToolCard>
          );
        })}
      </ToolsWrapper>
    </ToolsContainer>
  );
}

export default Tools;
