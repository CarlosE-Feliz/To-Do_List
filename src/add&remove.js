export default class AddRemove {
  static Add(data) {
    this.addNew = document.querySelector('.input1');
    this.addNewBtn = document.querySelector('.input2');
    this.addNewBtn.addEventListener('click', (e) => {
      if (this.addNew.value === '') {
        e.preventDefault();
      } else {
        data.push({
          description: this.addNew.value,
          completed: false,
          index: null,
        });
        localStorage.setItem('Task', JSON.stringify(data));
      }
    });
    this.insert = document.getElementById('ul-list');
    this.allCompleted = document.querySelector('.clear');
    this.allCompleted.addEventListener('click', () => {
      this.checks = document.querySelectorAll('.label-true');
      this.checks.forEach((e) => {
        data.splice(e, 1);
        this.insert.removeChild(e);
        localStorage.setItem('Task', JSON.stringify(data));
      });
    });

    this.insert.addEventListener('click', (e) => {
      this.closeBtn = document.querySelectorAll('.close');
      this.insert = document.getElementById('ul-list');
      this.closeBtn.forEach((o) => {
        if (e.target === o) {
          data.splice(o, 1);
          this.insert.removeChild(o.parentElement.parentElement);
          localStorage.setItem('Task', JSON.stringify(data));
        }
      });
    });

    this.insert.addEventListener('click', (e) => {
      this.label_info = document.querySelectorAll('.label-info');
      this.label_info.forEach((o, index) => {
        this.inputs = o.parentElement.parentElement.querySelector('.input-edit');
        this.labels = o.parentElement.parentElement.querySelector('.label-info');
        if (e.target === o) {
          this.inputs.classList.add('apear');
          this.labels.classList.add('disapear');

          this.inputs.addEventListener('keyup', (e) => {
            const keycode = e.keyCode || e.which;
            if (keycode === 13) {
              this.newValue = o.parentElement.parentElement.querySelector('.input-edit').value;
              this.newLabels = o.parentElement.parentElement.querySelector('.label-info');
              this.newLabels.innerHTML = this.newValue;
              data[index].description = this.newValue;
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
    });
  }
}
