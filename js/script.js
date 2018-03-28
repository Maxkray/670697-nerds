  var link = document.querySelector(".write-us-button");

  var popup = document.querySelector(".modal-write");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var mail = popup.querySelector("[name=mail]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
    }
  });
