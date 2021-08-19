import Completed from './interactive';
import './styles.css';

const data = JSON.parse(localStorage.getItem('Task')) || [
  {
    description: 'Go to the market',
    completed: true,
    index: null,
  },

  {
    description: 'Buy milk',
    completed: true,
    index: null,
  },

  {
    description: 'Buy a new pencil',
    completed: true,
    index: null,
  },
];

function createTask() {
  const insert = document.getElementById('ul-list');
  for (let i = 0; i < data.length; i += 1) {
    const styles = (data[i].completed) ? 'label-true' : '';
    const check = (data[i].completed) ? 'checked' : '';
    data[i].index = i;
    insert.innerHTML += `<li class="list-el main ${styles}" id="li-${data[i].index}">`
        + `<input type="checkbox" class="checkbox" id="check-${data[i].index}" ${check}>`
        + `<div class="label-div" id="div-${data[i].index}">`
        + `<label class="label-info" id="label-${data[i].index}"> ${data[i].description}</label>`
        + '</div>'
        + '<p class="icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></p>'
        + '</li>';
  }
  Completed.ToDoComplete(data);
}
createTask();
