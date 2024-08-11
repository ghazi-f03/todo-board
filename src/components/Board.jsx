const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    const [...newTasks] = taskList;
    newTasks.splice(index, 1);
    setTaskList(newTasks);
  };

  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center pt-3 pb-4 px-4">
        <p>{task}</p>
        <button
          className="bg-red-500 rounded-lg py-1 px-2 mt-4"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;
