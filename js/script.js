(function() {

    var contacts = document.querySelector(".write-us-button");

    var popup = document.querySelector(".modal-write");
    var close = document.querySelector(".modal-close");

    var form = popup.querySelector("form");
    var username = popup.querySelector("[name=name]");
    var useremail = popup.querySelector("[name=mail]");

    var storage = "";

    contacts.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storage) {
            username.value = storage;
            useremail.focus();
        } else {
            username.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!username.value || !useremail.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
            console.log('Ошибка');
        } else {
            localStorage.setItem("name", username.value);
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });

})()
