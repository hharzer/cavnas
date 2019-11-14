'use strict';
import React from 'react';
import JSONTree from 'react-json-tree'
import {connect} from 'react-redux'
import styled from 'styled-components'

const HtmlTreeView = styled.div`
  height:100%;
  width: 100%;
  box-sizing: borde-box;
  display: grid
`


const HtmlTree = props => { 
  return (
    <HtmlTreeView>
      <JSONTree data={props.tree}/>
    </HtmlTreeView>
  )
}
const mapStateToProps = state => ({ tree: state.tree })
export default connect(mapStateToProps)(HtmlTree)