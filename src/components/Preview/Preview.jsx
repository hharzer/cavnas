'use strict';
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import styled from "styled-components";
import unified from 'unified';
import createStream from 'unified-stream';
import parse from 'rehype-dom-parse';
import stringify from 'rehype-dom-stringify';

const PreviewWrapper = styled.div`
  height:100%;
  width: 100%;
  box-sizing: borde-box;
  display: grid
`


const Preview = props => { 
  const processor = unified().use(parse).use(stringify)
  const [htmlRender, setHtmlRender] = useState('')
  useEffect(
    ()=>{
        const {tree}=props
        if (tree && typeof tree ==="object") {
            processor.run(tree).then(val=>{
              setHtmlRender(JSON.stringify(val))
            })
        }
    },[props]
  )

  return (
    <PreviewWrapper>
      <p>{htmlRender}</p>
    </PreviewWrapper>
  )
}


const mapStateToProps = state => ({ tree: state.tree })
export default connect(mapStateToProps)(Preview);