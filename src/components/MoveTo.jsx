import React from "react";

const MoveTo = ({
  isMovingTask,
  setIsMovingTask,
  moveTaskFunction,
  movingFrom,
}) => {
  const moveOptions = [
    { title: "Move To Backlog", moveTo: "unfinished" },
    { title: "Move To Progress", moveTo: "progress" },
    { title: "Move To Finished", moveTo: "finished" },
    { title: "Delete Task", moveTo: "delete" },
  ];

  // Exclude the current list (movingFrom) from options
  const filteredOptions = moveOptions.filter(
    (option) => option.moveTo !== movingFrom
  );

  return (
    <div className={`${isMovingTask ? "visible" : ""} move-to`}>
      <div className="close-button" onClick={() => setIsMovingTask(false)}>
        <div className="line line1 open"></div>
        <div className="line line3 open"></div>
      </div>
      <div className="move-task-to">
        {filteredOptions.map((option) => (
          <div
            key={option.moveTo}
            className={`move ${option.moveTo}`}
            onClick={() => {
              moveTaskFunction(option); 
              setIsMovingTask(false); 
            }}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveTo;
