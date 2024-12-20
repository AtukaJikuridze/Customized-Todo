import { checkDifficultyColor } from "../checkDifficultyColor";

const FinishedList = ({ finishedList, moveTask, clearAll }) => {
  return (
    <div className="list">
      <h1>Finished</h1>
      <h3 className="clear" onClick={() => clearAll("progress")}>
        Clear all
      </h3>
      <div className="finished-border lists-border"></div>

      <div className="tasks">
        {!finishedList.length ? (
          <h1>There is no task yet</h1>
        ) : (
          finishedList.map((e) => (
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

export default FinishedList;
