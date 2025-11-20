import ACTION from "./constants";

const initState = [];
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      break;
    case ACTION.EDIT_TODO:
      break;
    case ACTION.DELETE_TODO:
      break;
    default:
      return state;
  }
};
export default reducer;
