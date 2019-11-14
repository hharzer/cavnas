import React from "react";
import styled, { css } from "styled-components";

const sharedBase = ({ showBorder }) => css`
  border: 1px solid red;
`;
const shared = sharedBase({ showBorder: true });

const AppContainer = styled.div`
   {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: min-content 3fr min-content;
    grid-template-rows: minmax(20px, min-content) 1fr min-content;
    grid-template-areas: "MenuBar MenuBar MenuBar" "DocumentPanel EditorPanel PropertyPanel" "StatusBar StatusBar StatusBar";
  }
`;

const MenuBar = styled.div`
   {

    grid-area: MenuBar;
  }
`;

const StatusBar = styled.div`
   {

    grid-area: StatusBar;
  }
`;

const DocumentPanel = styled.div`
   {

    //grid-area: DocumentPanel;
    display: grid;
    //grid-template-rows: 50% 50%;
    height:100%;
    overflow:auto;
  }
`;

const EditorPanel = styled.div`
   {

	grid-area: EditorPanel;
  width:100%;
    height:100%;
  }
`;

const PropertyPanel = styled.div`
   {

    grid-area: PropertyPanel;
  }
`;

export {
  AppContainer,
  MenuBar,
  StatusBar,
  DocumentPanel,
  EditorPanel,
  PropertyPanel
};
