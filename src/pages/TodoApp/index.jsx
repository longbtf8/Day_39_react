const ToDoApp = () => {
  return (
    <div className="p-4">
      <h1 className="text-blue-500 text-3xl border-b-2">Todo App</h1>
      <form className="pt-1.5 ">
        <label>
          <span>Nhập nhiệm vụ :</span>
          <input
            type="text"
            className="ml-1 border-2 border-gray-400"
            placeholder="Enter your todo..."
          />
        </label>
        <button className="border-2 bg-gray-500 ml-1 p-0.5 px-1 rounded-md border-none">
          Add Todo
        </button>
        <div className="invisible :h-5 text-red-500">
          Please enter a todo item
        </div>
      </form>
      <div>
        <p className="text-green-500">Danh sách Todo</p>
        <div className="border-2 flex p-1 gap-1.5">
          <span className="flex-1">Tên nhiệm vụ</span>
          <button className="border-2 px-1 text-blue-500 border-black rounded-sm">
            Edit
          </button>
          <button className="border-2 px-1 text-blue-500 border-black rounded-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoApp;
