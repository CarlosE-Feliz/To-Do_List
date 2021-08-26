/* eslint-disable import/prefer-default-export */
import Completed from './interactive';
import './styles.css';

const data = JSON.parse(localStorage.getItem('Task')) || [];

export function createTask() {
  const insert = global.document.getElementById('ul-list');
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

export function Add() {
  const addNew = global.document.querySelector('#form input');
  const description = addNew.value;
  data.push({
    description,
    completed: false,
    index: null,
  });
  localStorage.setItem('Task', JSON.stringify(data));
}

export function remove() {
  const insert = document.getElementById('ul-list');
  const checks = document.querySelectorAll('.label-true');
  checks.forEach((e) => {
    data.splice(e, 1);
    insert.removeChild(e);
    localStorage.setItem('Task', JSON.stringify(data));
  });
}

function removeComplete(e) {
  const insert = document.getElementById('ul-list');
  const closeBtn = document.querySelectorAll('.close');
  closeBtn.forEach((o) => {
    if (e.target === o) {
      data.splice(o, 1);
      insert.removeChild(o.parentElement.parentElement);
      localStorage.setItem('Task', JSON.stringify(data));
    }
  });
}

function edit(e) {
  // eslint-disable-next-line camelcase
  const label_info = document.querySelectorAll('.label-info');
  label_info.forEach((o, index) => {
    const inputs = o.parentElement.parentElement.querySelector('.input-edit');
    const labels = o.parentElement.parentElement.querySelector('.label-info');
    if (e.target === o) {
      inputs.classList.add('apear');
      labels.classList.add('disapear');

      inputs.addEventListener('keyup', (e) => {
        const keycode = e.keyCode || e.which;
        if (keycode === 13) {
          const newValue = o.parentElement.parentElement.querySelector('.input-edit').value;
          const newLabels = o.parentElement.parentElement.querySelector('.label-info');
          newLabels.innerHTML = newValue;
          data[index].description = newValue;
          localStorage.setItem('Task', JSON.stringify(data));
        }
      });
      o.parentElement.parentElement.querySelector('.open').style.display = 'none';
      o.parentElement.parentElement.querySelector('.close').style.display = 'flex';
    } else {
      o.parentElement.parentElement.querySelector('.open').style.display = 'flex';
      o.parentElement.parentElement.querySelector('.close').style.display = 'none';
    }
  });
}

window.addEventListener('DOMContentLoaded', createTask);
window.addEventListener('DOMContentLoaded', () => {
  const allCompleted = document.querySelector('.clear');
  allCompleted.addEventListener('click', remove);
  const addNewBtn = document.querySelector('.input2');
  addNewBtn.addEventListener('click', Add);
  const insert = document.getElementById('ul-list');
  insert.addEventListener('click', edit);
  insert.addEventListener('click', removeComplete);
});
