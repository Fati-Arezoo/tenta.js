class Ui {
  static addTask(input) {
    let list = document.querySelector(".list");
    let item = `
    <li class="list-item">
    <div class="left-list-item">
    <i class="far fa-check-circle"></i>
      <span class="item-text">${input.value}</span>
    </div>
    <i class="fas fa-trash-alt"></i>
  </li>
    `;
    list.innerHTML += item;
  }

  static render(data) {
    let list = document.querySelector(".list");
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      list.innerHTML += `
      <li class="list-item">
      <div class="left-list-item">
      <i class="far fa-check-circle"></i>
        <span class="item-text">${element.name}</span>
      </div>
      <i class="fas fa-trash-alt"></i>
    </li>
      `;
    }
  }
}

export default Ui;
