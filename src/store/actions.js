const SET_TREE = "SET_TREE";
const SET_NODE = "SET_NODE";
const ADD_NODE = "ADD_TREE";
const REMOVE_NODE = "REMOVE_TREE";
const RESET_TREE = "RESET_TREE";

export const Actions = {
  SET_NODE,
  SET_TREE,
  ADD_NODE,
  REMOVE_NODE,
  RESET_TREE
};

const setNode = payload => {
  return { type: SET_NODE, payload };
};
const setTree = payload => {
  return { type: SET_TREE, payload };
};
const addNode = payload => {
  return { type: ADD_NODE, payload };
};
const removeNode = payload => {
  return { type: REMOVE_NODE, payload };
};
const resetTree = payload => {
  return { type: RESET_TREE, payload };
};

export { setNode, setTree, addNode, removeNode, resetTree };
