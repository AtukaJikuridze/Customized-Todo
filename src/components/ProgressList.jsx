import React from "react";

const ProgressList = ({ progressList }) => {
  return (
    <div className="list">
      <h1>
        In progress {progressList.length ? `: ${progressList.length}` : ""}
      </h1>
      <div className="progress-border lists-border"></div>
      <div className="tasks">
        {progressList.map((e) => (
          <div className="every-task" key={Math.random()}>
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressList;
