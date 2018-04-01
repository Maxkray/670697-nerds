  var link = document.querySelector(".write-us-button");

  var popup = document.querySelector(".modal-write");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var mail = popup.querySelector("[name=mail]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("mail");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();

    if (storage) {
      mail.value = storage;
      password.focus();
    } else {
      mail.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("mail", mail.value);
      }
    }
  });

