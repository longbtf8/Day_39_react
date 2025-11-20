import ACTION from "./constants";

const initState = {
  todoList: [],
};
const reducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTION.ADD_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case ACTION.EDIT_TODO: {
      const editTodo = state.todoList.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      return {
        ...state,
        todoList: editTodo,
      };
    }
    case ACTION.DELETE_TODO: {
      const newTodos = state.todoList.filter(
        (todo) => todo.id != action.payload.id
      );
      return {
        ...state,
        todoList: newTodos,
      };
    }
    default:
      return state;
  }
};
export default reducer;
