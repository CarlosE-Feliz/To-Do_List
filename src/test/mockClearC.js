/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
export const deleteCompletedTasks = () => {
  const getTasksArray = '';
  let tasksArray = getTasksArray();
  tasksArray = tasksArray.filter((task) => task.completedStatus !== true);
  const setTasksArray = tasksArray;
  return tasksArray;
};