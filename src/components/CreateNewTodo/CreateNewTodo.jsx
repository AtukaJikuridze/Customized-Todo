import { useEffect } from "react";
import "./CreateNewTodo.css";
import { useState } from "react";
const CreateNewTodo = ({
  isCreatingTask,
  setIsCreatingTask,
  setUnfinishedList,
  unfinishedList,
}) => {
  const difficultyList = [
    {
      difficulty: "Hard",
    },
    {
      difficulty: "Medium",
    },
    {
      difficulty: "Easy",
    },
    {
      difficulty: "Light",
    },
  ];
  const [taskDifficulty, setTaskDifficulty] = useState("");
  const [activeFilter, setActiveFilter] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  const answerDifficulty = (e, i) => {
    setTaskDifficulty(e.difficulty);
    setActiveFilter(i);
    console.log(activeFilter);
  };
  const toggleButton = () => {
    setIsCreatingTask(false);
  };
  const addNewTask = () => {
    if (inputValue.length && activeFilter >= 0) {
      setUnfinishedList([
        ...unfinishedList,
        {
          title: inputValue,
          difficulty: taskDifficulty,
          uniqueIdToMoveTask: Math.random(),
        },
      ]);
      setTaskDifficulty("");
      setActiveFilter(-1);
      setInputValue("");
      setIsCreatingTask(false);
    } else {
      alert("Please Fill All Inputs");
    }
  };
  return (
    <div className={`create-task-bg ${isCreatingTask ? "visible" : ""}`}>
      <div className="create-task">
        <div className="close-button" onClick={toggleButton}>
          <div className={`line line1 open`}></div>
          <div className={`line line3 open`}></div>
        </div>

        <h1>Create New Task !</h1>

        <div className="create-task-flex">
          <div className="task-info">
            <h1>Enter Difficulty</h1>
            <div className="task-info-flex">
              {difficultyList.map((e, i) => (
                <div
                  onClick={() => answerDifficulty(e, i)}
                  key={i}
                  className={`${activeFilter === i ? "active" : ""}`}
                >
                  {e.difficulty}
                </div>
              ))}
            </div>
          </div>
          <div className="task-info enter-input-task">
            <h1>Enter Task</h1>
            <input
              placeholder="Enter Task .."
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <input type="submit" onClick={() => addNewTask()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTodo;
