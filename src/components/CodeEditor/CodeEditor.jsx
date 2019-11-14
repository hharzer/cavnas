import React, { useRef, useEffect, useState } from "react";
import Styled from "./styled";
import Editor from "@monaco-editor/react";
import { Menu, Dropdown, Icon } from "antd";
import { useDebounce } from "use-debounce";
import parse from "rehype-parse";
import stringify from 'rehype-stringify'
import unified from "unified";
import {connect} from 'react-redux'
import {setTree,resetTree} from '../../store/actions'

const CodeEditor = props => {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();
  const processor = unified().use(parse)//.use(stringify);
  const [value, setValue] = useState("// write your code here");
  const [ast, setAst] = useState(null);
  // Debounce callback
  const [debouncedCallback] = useDebounce(valueGetter, 1000);

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (valueGetter.current() !== value) {
        const _ast = processor.parse(valueGetter.current())//then((_ast)=>setAst({..._ast}))
        setAst(_ast)
        setValue(valueGetter.current())
        console.log(value)
        console.log( valueGetter.current())
        console.log( value!=valueGetter.current())
        props.dispatch(setTree(_ast))
        setValue(valueGetter.current());
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  function handleShowValue() {
    alert(valueGetter.current());
  }

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        width: "100%",
        overflow: "auto"
      }}
    >
      <Menu mode="horizontal">
        <Menu.Item key={"File-New"}>
          <Icon type="file-add" />
          New
        </Menu.Item>
        <Menu.Item key={"File-Show"}>
          <Icon type="eye" />
          Show
        </Menu.Item>
      </Menu>
      <Editor
        language="html"
        value={value}
        editorDidMount={handleEditorDidMount}
        options={{}}
      />
    </div>
  );
};




export default connect()(CodeEditor)
