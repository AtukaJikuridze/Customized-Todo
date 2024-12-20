import React from "react";
import { checkDifficultyColor } from "../checkDifficultyColor";

const ProgressList = ({ progressList, moveTask, clearAll }) => {
  return (
    <div className="list">
      <h1>
        In progress {progressList.length ? `: ${progressList.length}` : ""}
      </h1>
      <h3 className="clear" onClick={() => clearAll("progress")}>
        Clear all
      </h3>
      <div className="progress-border lists-border"></div>
      <div className="tasks">
        {!progressList.length ? (
          <h1>There is no task yet</h1>
        ) : (
          progressList.map((e) => (
            <div
              className="every-task"
              key={Math.random()}
              onClick={() => moveTask(e, "progress")}
              style={{ borderColor: checkDifficultyColor(e.difficulty) }}
            >
              <h2>{e.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProgressList;
