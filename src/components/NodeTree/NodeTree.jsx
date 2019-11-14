import React from 'react';
import Styled from "./styled";
import { Tree } from 'antd';
import _ from 'lodash'
import {connect} from 'react-redux'
const data = {
  key: "0",
  title: "root",
  children:[
    {key:"0-1",title:"ti"},
    {key:"0-2",title:"ti"},
    {key:"0-3",title:"ti"},
    {key:"0-4",title:"ti"}
  ]
}

const { TreeNode } = Tree;
const NodeTree =(props) => { 

  const renderNodes=(nodes) => {
    if (!nodes) return <TreeNode title="Waiting" key="000"/>

    const {type, tagName, properties, children, value} = nodes
    console.log(children)
    switch (type){
    case "element":
      case "root":
      return <TreeNode title={tagName} key={_.uniqueId()}>{children.map((_children,index)=>renderNodes(_children))}</TreeNode>
    case "text":
    default:
      return <TreeNode title={type} key={_.uniqueId()}>{value}</TreeNode>

  }}

  return (
    <Tree selectable draggable onSelect={evt=> {console.log(evt)}} >
      {renderNodes(props.tree)}
    </Tree>
  )}
  const mapStateToProps = state => ({ tree: state.tree })
  export default connect(mapStateToProps)(NodeTree)