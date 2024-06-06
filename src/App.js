import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center py-4 gap-8">
      <h1 className="font-semibold text-l">Ghazi's To-Do List</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
