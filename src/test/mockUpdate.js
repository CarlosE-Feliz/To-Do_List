/* eslint-disable import/prefer-default-export */
export const editTask = {
  init(list, newDescription, index) {
    const pDescription = document.querySelector('.input-edit');
    pDescription.addEventListener('keydown', () => {
      this.instance(list, newDescription, index);
    });
  },
  instance(list, newDescription, index) {
    list[index].description = newDescription;
    localStorage.setItem('Task', JSON.stringify(list));
  },
};