import { Actions } from "./actions";

const initialState = {
  tree: null,
  node: null
};

const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_TREE:
      return { ...state, tree: { ...action.payload } };
    case Actions.RESET_TREE:
      return { ...state, tree: null };
    default:
      return state;
  }
};

export default treeReducer