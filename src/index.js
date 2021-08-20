import Completed from './interactive';
import AddRemove from './add&remove';
import './styles.css';

const data = JSON.parse(localStorage.getItem('Task')) || [];
AddRemove.Add(data);
function createTask() {
  const insert = document.getElementById('ul-list');
  for (let i = 0; i < data.length; i += 1) {
    const styles = (data[i].completed) ? 'label-true' : 'list-el';
    const check = (data[i].completed) ? 'checked' : '';
    data[i].index = i;
    insert.innerHTML += `<li class="list-el main ${styles}" id="li-${data[i].index}">`
        + `<input type="checkbox" class="checkbox" id="check-${data[i].index}" ${check}>`
        + `<div class="label-div" id="div-${data[i].index}">`
        + `<label class="label-info" id="label-${data[i].index}"> ${data[i].description}</label>`
        + `<input type="text" id="input-${data[i].index}" value="${data[i].description}" autofocus autocomplete="off"  class="input-edit">`
        + '</div>'
        + `<p class="icon"><i class="fa fa-ellipsis-v open" id="open-${data[i].index}" aria-hidden="true"></i> `
        + `<i class="fa fa-trash-o close" id="close-${data[i].index}" aria-hidden="true"></i></p>`
        + '</li>';
  }
  Completed.ToDoComplete(data);
}
createTask();
