export const deleteCompletedTasks = () => {
  tasksArray = getTasksArray();
  tasksArray = tasksArray.filter((task) => task.completedStatus !== true);
  setTasksArray(tasksArray);
  return tasksArray;
};