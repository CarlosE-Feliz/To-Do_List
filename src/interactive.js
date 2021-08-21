export default class Completed {
  static ToDoComplete(data) {
    this.checks = document.querySelectorAll('.checkbox');
    for (let o = 0; o < this.checks.length; o += 1) {
      // eslint-disable-next-line no-loop-func
      this.checks[o].addEventListener('change', () => {
        if (this.checks[o].checked) {
          this.labels = document.getElementById(`li-${[o]}`);
          this.labels.classList.add('label-true');
          data[o].completed = true;
          document.getElementById(`open-${[o]}`).style.display = 'none';
          document.getElementById(`close-${[o]}`).style.display = 'flex';
          document.getElementById(`input-${[o]}`).style.background = 'aliceblue';
        } else {
          this.labels = document.getElementById(`li-${[o]}`);
          this.labels.classList.remove('label-true');
          data[o].completed = false;
          document.getElementById(`open-${[o]}`).style.display = 'flex';
          document.getElementById(`close-${[o]}`).style.display = 'none';
          document.getElementById(`input-${[o]}`).style.background = 'none';
        }
        localStorage.setItem('Task', JSON.stringify(data));
      });
    }
  }
}
