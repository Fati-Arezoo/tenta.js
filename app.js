import Ui from "/ui.js";
import getData from "/api.js";

(function app() {
  let list = document.querySelector(".list");
  const form = document.querySelector(".input-from");
  const input = document.querySelector(".input-name");
  getData().then((data) => Ui.render(data));
  form.addEventListener("submit", addTodolist);
  function addTodolist(e) {
    e.preventDefault();
    // InputValue = input.value;
    if (input.value === "") {
      const error = document.querySelector(".error");
      error.style.display = "flex";
      setTimeout(function () {
        error.style.display = "none";
      }, 3000);
    } else {
      Ui.addTask(input);
      input.value = "";
    }
  }

  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash-alt")) {
      // öppnar ett fönster och frågar om man vill radera item el inte
      if (confirm("Are you sure?")) {
        const parnetId = event.target.parentElement;
        parnetId.remove();
        // list.removeChild(parnetId)
      }
    }

    if (event.target.classList.contains("fa-check-circle")) {
      const text = event.target.nextElementSibling;
      text.classList.toggle("done");
    }
  });
})();
