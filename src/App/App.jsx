import React,{useState,useEffect} from "react";
//import "./index.css"
import {RenderFrame} from "../components";
import "./App.styled";
import "./index.css";
import {
  AppContainer,
  MenuBar,
  DocumentPanel,
  EditorPanel,
  StatusBar
} from "./App.styled";
import Preview from '../components/Preview'
import CodeEditor from '../components/CodeEditor'
import { PropertyPanel } from "./App.styled";
import HtmlTree from '../components/HtmlTree'
import Starter from '../presets/Starter.html'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  const [leftSide,collapseLeft] = useState(false)

  return (
    <AppContainer as={Layout}>
      <MenuBar as={Header}/>
      <DocumentPanel as={Sider} collapsible collapsed={leftSide} onCollapse={(evt)=>{collapseLeft(evt)}}><Preview/></DocumentPanel>
      <EditorPanel as={CodeEditor}/>
      <PropertyPanel as={Sider}><HtmlTree/></PropertyPanel>
      <StatusBar as={Footer}/>
    </AppContainer>
  );
}


//<EditorPanel as={Content}><RenderFrame content={Starter.content} stylesheets={Starter.styles} /></EditorPanel>
     
export default App;
