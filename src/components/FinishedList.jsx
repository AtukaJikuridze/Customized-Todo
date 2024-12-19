const FinishedList = ({ finishedList, moveToUnfinished, removeTask }) => {
  return (
    <div className="list">
      <h1>Finished</h1>
      <div className="finished-border lists-border"></div>

      <div className="tasks">
        {finishedList.map((e) => (
          <div className="every-task" key={Math.random()}>
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishedList;
