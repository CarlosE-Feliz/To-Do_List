/* eslint-disable import/prefer-default-export */
export const editTask = (taskDescription, editIcon, deleteIcon, tasksArray, id) => {
  const currentTaskIndex = tasksArray.findIndex((task) => task.id === id);
  tasksArray[currentTaskIndex].changeCompletedStatus();
  if (tasksArray[currentTaskIndex].completedStatus) {
    taskDescription.setAttribute('contenteditable', true);
    editIcon.classList.add('none');
    deleteIcon.classList.remove('none');
  } else {
    taskDescription.setAttribute('contenteditable', false);
    editIcon.classList.remove('none');
    deleteIcon.classList.add('none');
  }
};