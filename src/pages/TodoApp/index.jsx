import { useRef } from "react";
import { useDispatch, useSelector } from "../../libs/react-redux/hook";
import ACTION from "../../store/constants";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const handleEditTodo = (id, currentText) => {
    const newText = prompt("Edit Todo :", currentText);
    if (newText !== null && newText.trim()) {
      dispatch({
        type: "EDIT_TODO",
        payload: {
          id: id,
          text: newText.trim(),
        },
      });
    }
  };
  const handleDeleteTodo = (id) => {
    const confirmed = confirm('"Are you sure you want to delete this todo?"');
    if (confirmed) {
      dispatch({
        type: "DELETE_TODO",
        payload: {
          id: id,
        },
      });
    }
  };
  const handleAddTodo = () => {
    const inputValue = inputRef.current.value.trim();
    if (!inputValue) {
      validateInput.current.classList.add("visible");
      validateInput.current.classList.remove("invisible");
    } else {
      dispatch({
        type: ACTION.ADD_TODO,
        payload: {
          id: Date.now(),
          text: inputValue,
        },
      });
    }
  };
  const inputRef = useRef();
  const validateInput = useRef();
  const todoList = useSelector((state) => {
    return state.todoList;
  });
  console.log(todoList);

  return (
    <div className="p-4">
      <h1 className="text-blue-500 text-3xl border-b-2">Todo App</h1>
      <form className="pt-1.5 ">
        <label>
          <span>Nhập nhiệm vụ :</span>
          <input
            type="text"
            className="ml-1 border-2 border-gray-400"
            ref={inputRef}
            placeholder="Enter your todo..."
          />
        </label>
        <button
          className="border-2 bg-gray-500 ml-1 p-0.5 px-1 rounded-md border-none"
          onClick={(e) => {
            e.preventDefault();
            handleAddTodo();
          }}
        >
          Add Todo
        </button>
        <div ref={validateInput} className="invisible :h-5 text-red-500">
          Please enter a todo item
        </div>
      </form>
      <div>
        <p className="text-green-500">Danh sách Todo</p>
        {/* {todoList.map((todo) => (
          <div className="border-2 flex p-1 gap-1.5 mb-2" key={todo.id}>
            <span className="flex-1">{todo.text}</span>
            <button className="border-2 px-1 text-blue-500 border-black rounded-sm">
              Edit
            </button>
            <button className="border-2 px-1 text-blue-500 border-black rounded-sm">
              Delete
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default ToDoApp;
