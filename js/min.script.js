var link=document.querySelector(".write-us-button"),popup=document.querySelector(".modal-write"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),name=popup.querySelector("[name=name]"),mail=popup.querySelector("[name=mail]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),name.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),form.addEventListener("submit",function(e){name.value&&mail.value||(e.preventDefault(),console.log("Нужно ввести логин и пароль"))});