import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-4 gap-8">
        <h1 className="font-semibold text-l">Ghazi's To-Do List</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="grid grid-cols-3 px-4 sm:px-8 md:px-10">
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
