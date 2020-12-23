import Ui from "/ui.js";
import getData from "/api.js";

(function app() {
  // select element
  let list = document.querySelector(".list");
  const form = document.querySelector(".input-from");
  const input = document.querySelector(".input-name");

  // form.addeventListner
  form.addEventListener("submit", addTodolist);
  function addTodolist(e) {
    e.preventDefault();
    if (input.value === "") {
      const error = document.querySelector(".error");
      error.style.display = "flex";
      setTimeout(function () {
        error.style.display = "none";
      }, 3000);
    }

    Ui.addTask(input);
    input.value = "";
  }

  getData().then((data) => Ui.render(data));

  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash-alt")) {
      if (confirm("Are you sure?")) {
        const parnetId = event.target.parentElement;
        parnetId.remove();
      }
    }
    if (event.target.classList.contains("fa-check-circle")) {
      const text = event.target.nextElementSibling;
      text.classList.toggle("done");
    }
  });
})();
