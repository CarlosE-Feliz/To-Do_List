import './styles.css';

function createTask() {
  const insert = document.getElementById('ul-list');
  const data = [
    {
      description: 'Go to the market',
      completed: false,
      index: null,
    },

    {
      description: 'Buy milk',
      completed: false,
      index: null,
    },

    {
      description: 'Buy a new pencil',
      completed: false,
      index: null,
    },
  ];
  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i;
    insert.innerHTML += `<li class="list-el main" id="${i}">`
        + '<input type="checkbox" class="checkbox">'
        + '<div class="label-div">'
        + `<label class="label-info"> ${data[i].description}</label>`
        + '</div>'
        + '<p class="icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></p>'
        + '</li>';
  }
}
createTask();
