import React, { useState, useEffect } from "react";
import Unfinished from "./Unfinished";
import FinishedList from "./FinishedList";
import ProgressList from "./ProgressList";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";
import MoveTo from "./MoveTo";

const TodoMain = () => {
  const checkLocalStorage = (localStorageItem) => {
    return localStorage.getItem(localStorageItem)
      ? JSON.parse(localStorage.getItem(localStorageItem))
      : [];
  };
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [unfinishedList, setUnfinishedList] = useState(
    checkLocalStorage("unfinishedList")
  );
  const [finishedList, setFinishedList] = useState(
    checkLocalStorage("finishedList")
  );
  const [progressList, setProgressList] = useState(
    checkLocalStorage("progressList")
  );
  const [taskClickInfo, setTaskClickInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("unfinishedList", JSON.stringify(unfinishedList));
    localStorage.setItem("finishedList", JSON.stringify(finishedList));
    localStorage.setItem("progressList", JSON.stringify(progressList));
  }, [unfinishedList, finishedList]);

  const [isMovingTask, setIsMovingTask] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length) {
      const newTask = {
        id: Math.random(),
        title: inputValue,
      };

      setUnfinishedList([...unfinishedList, newTask]);
      setInputValue("");
    }
  };

  const finishTask = (id) => {
    const currentTask = unfinishedList.find((e) => e.id === id);
    const newUnfinishedArr = unfinishedList.filter((e) => e.id !== id);

    setFinishedList([...finishedList, currentTask]);
    setUnfinishedList(newUnfinishedArr);
  };

  const moveToUnfinished = (id) => {
    const currentTask = finishedList.find((e) => e.id === id);
    const newFinishedArr = finishedList.filter((e) => e.id !== id);

    setUnfinishedList([...unfinishedList, currentTask]);
    setFinishedList(newFinishedArr);
  };

  const removeTask = (id) => {
    const newFinishedArr = finishedList.filter((e) => e.id !== id);
    setFinishedList(newFinishedArr);
  };
  const moveTask = (e) => {
   alert(e)
  };
  return (
    <div className="todo-main">
      <CreateNewTodo
        setIsCreatingTask={setIsCreatingTask}
        isCreatingTask={isCreatingTask}
        unfinishedList={unfinishedList}
        setUnfinishedList={setUnfinishedList}
      />
      <MoveTo isMovingTask={isMovingTask} setIsMovingTask={setIsMovingTask} />
      <div className="create-task-text" onClick={() => setIsCreatingTask(true)}>
        <h2>Create New Task !</h2>
      </div>

      <div className="todo-flex">
        <Unfinished
          tasks={unfinishedList}
          finishTask={finishTask}
          moveTask={() => moveTask(true)}
        />
        <ProgressList removeTask={removeTask} progressList={progressList} />
        <FinishedList
          finishedList={finishedList}
          moveToUnfinished={moveToUnfinished}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
};

export default TodoMain;
