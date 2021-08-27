// eslint-disable-next-line no-unused-vars
import { Add, createTask, remove } from '../index';
import { mockHtml } from './mockhtml';
import { editTask } from './mockUpdate';
import { deleteCompletedTasks } from './mockClearC';

describe('Add and delete item', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = mockHtml;
    Add();
    createTask();
    const list = document.querySelectorAll('#ul-list li');
    expect(list).toHaveLength(1);
  });

  test('delete one item from the list', () => {
    remove(1);
    createTask();
    const list = document.querySelectorAll('#ul-list li');
    expect(list).toHaveLength(0);
  });
});

describe('Add and Remove Items from local Storage', () => {
  test('Add new item to localStorage', () => {
    Add();
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(1);
  });
  test('delete one item from the localStorage', () => {
    remove(0);
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(0);
  });
});

describe('Test the check status function', () => {
  test('update the completeStatus', () => {
    document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const checkBox = document.querySelector('.check-box');
    let checkedBox = checkBox.checked;
    checkedBox = true;
    expect(checkedBox).toBe(true);
    remove(0);
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(0);
  });
});

describe('Test delete completedTask', () => {
  test('Delete completedTask', () => {
    document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const button = document.querySelector('.button');
    for (let i = 0; i < button.length; i += 1) {
      button.addEventListener('click', deleteCompletedTasks);
    }
    remove(0);
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(0);
  });
});

describe('Test editTask', () => {
  test('edit task description', () => {
    document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const items = document.getElementsByTagName('li');
    for (let i = 0; i < items.length; i += 1) {
      const editTaskIcon = document.querySelector('.editIcon');
      editTaskIcon.addEventListener('click', editTask);
    }
  });
});