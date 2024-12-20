import { checkDifficultyColor } from "../checkDifficultyColor";

const Unfinished = ({ tasks, moveTask, setTaskClickInfo, clearAll }) => {
  return (
    <div className="list">
      <h1>Backlog {tasks.length ? `: ${tasks.length}` : ""}</h1>
      <h3 className="clear" onClick={() => clearAll("progress")}>
        Clear all
      </h3>
      <div className="backlog-border lists-border"></div>
      <div className="tasks">
        {tasks.length ? (
          tasks.map((e) => (
            <div
              className="every-task"
              key={Math.random()}
              style={{ borderColor: checkDifficultyColor(e.difficulty) }}
              onClick={() => moveTask(e, "unfinished")}
            >
              <h2>{e.title}</h2>
            </div>
          ))
        ) : (
          <h1>There is no aviable task</h1>
        )}
      </div>
    </div>
  );
};

export default Unfinished;
