const Board = ({ task }) => {
  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center">
        <p>{task}</p>
      </div>
    </>
  );
};
export default Board;
