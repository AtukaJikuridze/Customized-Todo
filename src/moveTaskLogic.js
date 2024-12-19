export const moveTaskLogic = ({
    moveTo,
    setUnfinishedList,
    setProgressList,
    movingTaskInfo,
    setFinishedList,
    action,
    unfinishedList,
    progressList,
    finishedList,
  }) => {
    const moveTaskBetweenLists = (
      sourceList,
      setSourceList,
      setDestinationList
    ) => {
      // Find the task to move
      const taskToMove = sourceList.find(
        (task) => task.uniqueIdToMoveTask === movingTaskInfo.id
      );
  
      if (!taskToMove) {
        console.error("Task not found!");
        return;
      }
  
      // Remove the task from the source list
      const updatedSourceList = sourceList.filter(
        (task) => task.uniqueIdToMoveTask !== movingTaskInfo.id
      );
  
      // Add the task to the destination list
      setSourceList(updatedSourceList);
      setDestinationList((prevList) => [...prevList, taskToMove]);
    };
  
    const deleteTask = (sourceList, setSourceList) => {
      const updatedSourceList = sourceList.filter(
        (task) => task.uniqueIdToMoveTask !== movingTaskInfo.id
      );
  
      setSourceList(updatedSourceList);
      console.log("Updated List After Deletion:", updatedSourceList);
    };
  
    if (action === "delete") {
      // Determine the list to delete from using state
      switch (movingTaskInfo.movingFrom) {
        case "unfinished":
          deleteTask(unfinishedList, setUnfinishedList);
          break;
        case "progress":
          deleteTask(progressList, setProgressList);
          break;
        case "finished":
          deleteTask(finishedList, setFinishedList);
          break;
        default:
          console.error("Invalid movingFrom value for delete");
          break;
      }
      return; // Exit after deleting
    }
  
    // Existing move logic (unchanged)
    switch (movingTaskInfo.movingFrom) {
      case "unfinished":
        switch (moveTo) {
          case "progress":
            moveTaskBetweenLists(unfinishedList, setUnfinishedList, setProgressList);
            break;
          case "finished":
            moveTaskBetweenLists(unfinishedList, setUnfinishedList, setFinishedList);
            break;
          default:
            console.error("Invalid moveTo value");
            break;
        }
        break;
  
      case "progress":
        switch (moveTo) {
          case "unfinished":
            moveTaskBetweenLists(progressList, setProgressList, setUnfinishedList);
            break;
          case "finished":
            moveTaskBetweenLists(progressList, setProgressList, setFinishedList);
            break;
          default:
            console.error("Invalid moveTo value");
            break;
        }
        break;
  
      case "finished":
        switch (moveTo) {
          case "unfinished":
            moveTaskBetweenLists(finishedList, setFinishedList, setUnfinishedList);
            break;
          case "progress":
            moveTaskBetweenLists(finishedList, setFinishedList, setProgressList);
            break;
          default:
            console.error("Invalid moveTo value");
            break;
        }
        break;
  
      default:
        console.error("Invalid movingFrom value");
        break;
    }
  };
  