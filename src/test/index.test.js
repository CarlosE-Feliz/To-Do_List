// eslint-disable-next-line no-unused-vars
import { Add, createTask, remove } from '../index';

describe('Add and delete item', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<li class="list-el main " id="li">'
    + '<input type="checkbox" class="checkbox" id="check">'
    + '<div class="label-div" id="div">'
    + '<label class="label-info" id="label"> </label>'
    + '<input type="text" id="input"  autofocus autocomplete="off"  class="input-edit">'
    + '</div>'
    + '<p class="icon"><i class="fa fa-ellipsis-v open" id="open" aria-hidden="true"></i> '
    + '<i class="fa fa-trash-o close" id="close" aria-hidden="true"></i></p>'
    + '</li>';
    createTask();
    Add();
    const list = document.querySelectorAll('#ul-list li');
    expect(list).toHaveLength(1);
  });

  // test('delete one item from the list', () => {
  //   document.body.innerHTML = '<li class="list-el main " id="li">'
  //   + '<input type="checkbox" class="checkbox" id="check">'
  //   + '<div class="label-div" id="div">'
  //   + '<label class="label-info" id="label"> </label>'
  //   + '<input type="text" id="input"  autofocus autocomplete="off"  class="input-edit">'
  //   + '</div>'
  //   + '<p class="icon"><i class="fa fa-ellipsis-v open" id="open" aria-hidden="true"></i> '
  //   + '<i class="fa fa-trash-o close" id="close" aria-hidden="true"></i></p>'
  //   + '</li>';
  //   remove(0);
  //   createTask();
  //   const list = document.querySelectorAll('#ul-list');
  //   expect(list).toHaveLength(0);
  // });
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
