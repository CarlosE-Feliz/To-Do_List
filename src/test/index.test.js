// eslint-disable-next-line no-unused-vars
import { Add, createTask, remove } from '../index';
import { mockHtml } from './mockhtml';

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
    expect(list).toHaveLength(2);
  });
});

// describe('Add and Remove Items from local Storage', () => {
//   test('Add new item to localStorage', () => {
//     Add();
//     expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(1);
//   });
//   test('delete one item from the localStorage', () => {
//     remove(0);
//     expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(0);
//   });
// });