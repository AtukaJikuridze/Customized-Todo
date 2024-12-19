import React from "react";

const MoveTo = ({ isMovingTask, setIsMovingTask }) => {
  const moveOptions = [
    { title: "Move To In Progress.", moveTo: "progress" },
    { title: "Move To Finished.", moveTo: "finished" },
    { title: "Delete", moveTo: "delete" },
  ];
  return (
    <div className={`${isMovingTask ? "visible" : ""} move-to`}>
      <div className="close-button" onClick={() => setIsMovingTask(false)}>
        <div className={`line line1 open`}></div>
        <div className={`line line3 open`}></div>
      </div>
      <div className="move-task-to">
        {moveOptions.map((e) => (
          <div key={Math.random()} className="move">
            {e.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveTo;
