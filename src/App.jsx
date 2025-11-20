import { Route, BrowserRouter as Router, Routes } from "react-router";
import ToDoApp from "./pages/TodoApp";

function App() {
  return (
    <Router basename="/Day_39_react/">
      <Routes>
        <Route path="/" element={<ToDoApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
