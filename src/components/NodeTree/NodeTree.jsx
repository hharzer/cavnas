import React from 'react';
import Styled from "./styled";
import { Tree } from 'antd';

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
    return <TreeNode title={nodes.title} key={nodes.key}>{nodes.children? nodes.children.map(children=>renderNodes(children)):undefined}</TreeNode>
  }

  return (
    <Tree checkable >
      {renderNodes(data)}
    </Tree>
  )
}

export default NodeTree;