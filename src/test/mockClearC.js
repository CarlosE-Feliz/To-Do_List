export const deleteCompletedTasks = () => {
    const tasksArray = getTasksArray();
    tasksArray = tasksArray.filter((task) => task.completedStatus !== true);
    setTasksArray(tasksArray);
    return tasksArray;
  };