'use strict';
import React from 'react';
import styled from "styled-components";
import unified from 'unified'
import rehype2react from 'rehype-react'
import {connect} from 'react-redux'
import  stringify  from 'rehype-stringify';

const PreviewWrapper = styled.div`
  height:100%;
  width: 100%;
  box-sizing: borde-box;
  display: grid
`


const Preview = props => { 
  const processor = unified().use(rehype2react)
  return (
    <PreviewWrapper>
      {("tree" in props) ? processor.run(props.tree) : "Select html"}
    </PreviewWrapper>
  )
}


const mapStateToProps = state => ({ tree: state.tree })
export default connect(mapStateToProps)(Preview);