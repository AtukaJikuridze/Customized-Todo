import { checkDifficultyColor } from "../checkDifficultyColor";

const Unfinished = ({ tasks, finishTask, moveTask,setTaskClickInfo }) => {
  return (
    <div className="list">
      <h1>Backlog {tasks.length ? `: ${tasks.length}` : ""}</h1>
      <div className="backlog-border lists-border"></div>
      <div className="tasks">
        {tasks.map((e) => (
          <div
            className="every-task"
            key={Math.random()}
            style={{ borderColor: checkDifficultyColor(e.difficulty) }}
            onClick={() => moveTask()}
          >
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unfinished;
