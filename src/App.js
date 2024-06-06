import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>Ghazi's To-Do List</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default App;
