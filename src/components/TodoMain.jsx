import React, { useState, useEffect } from "react";
import Unfinished from "./Unfinished";
import FinishedList from "./FinishedList";
import ProgressList from "./ProgressList";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";
import MoveTo from "./MoveTo";
import { moveTaskLogic } from "../moveTaskLogic";

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

  const [movingTaskInfo, setMovingTaskInfo] = useState({});
  const [movingTaskFrom, setMovingTaskFrom] = useState("");

  useEffect(() => {
    localStorage.setItem("unfinishedList", JSON.stringify(unfinishedList));
    localStorage.setItem("finishedList", JSON.stringify(finishedList));
    localStorage.setItem("progressList", JSON.stringify(progressList));
  }, [unfinishedList, finishedList]);

  const [isMovingTask, setIsMovingTask] = useState(false);

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

  const moveTask = (e, from) => {
    setMovingTaskFrom(from);
    setIsMovingTask(true);
    setMovingTaskInfo({
      movingFrom: from,
      id: e.uniqueIdToMoveTask,
    });
    console.log(movingTaskInfo);
  };
  const moveTaskFunction = (e) => {
    console.log(e);
    moveTaskLogic({
      moveTo: e.moveTo,
      setUnfinishedList,
      setProgressList,
      movingTaskInfo,
      setFinishedList,
      unfinishedList,
      progressList,
      finishedList,
      action: e.moveTo === "delete" ? "delete" : undefined, // Handle delete
    });
    setIsMovingTask(false);
  };
  const clearAll = (List) => {
    switch (List) {
      case "progress":
        localStorage.setItem("progressList", JSON.stringify([]));
        setProgressList(JSON.parse(localStorage.getItem("progressList")));
        break;
      case "unfinished":
        localStorage.setItem("unfinishedList", JSON.stringify([]));
        setUnfinishedList(JSON.parse(localStorage.getItem("unfinishedList")));
        break;
      case "finished":
        localStorage.setItem("finishedList", JSON.stringify([]));
        setFinishedList(JSON.parse(localStorage.getItem("finishedList")));
        break;

      default:
        break;
    }
  };

  return (
    <div className="todo-main">
      <CreateNewTodo
        setIsCreatingTask={setIsCreatingTask}
        isCreatingTask={isCreatingTask}
        unfinishedList={unfinishedList}
        setUnfinishedList={setUnfinishedList}
      />
      <MoveTo
        isMovingTask={isMovingTask}
        setIsMovingTask={setIsMovingTask}
        moveTaskFunction={(e) => moveTaskFunction(e)}
        movingFrom={movingTaskFrom}
      />
      <div className="create-task-text" onClick={() => setIsCreatingTask(true)}>
        <h2>Create New Task !</h2>
      </div>

      <div className="todo-flex">
        <Unfinished
          tasks={unfinishedList}
          finishTask={finishTask}
          moveTask={(e) => moveTask(e, "unfinished")}
          clearAll={() => clearAll("unfinished")}
        />
        <ProgressList
          progressList={progressList}
          moveTask={(e) => moveTask(e, "progress")}
          clearAll={() => clearAll("progress")}
        />
        <FinishedList
          finishedList={finishedList}
          moveToUnfinished={moveToUnfinished}
          moveTask={(e) => moveTask(e, "finished")}
          clearAll={() => clearAll("finished")}
        />
      </div>
    </div>
  );
};

export default TodoMain;
