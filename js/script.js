"use strict"

let modalOpen = document.querySelector (".map__button");
let modalClose = document.querySelector (".popap__button-close");
let popap = document.querySelector (".popap");
let modalForm = document.querySelector (".popap__form");
let modalLogin = document.querySelector ("[name = user-name]");
let modalEmail = document.querySelector ("[name = user-email]");
let modalText = document.querySelector ("[name = user-text]");
const KEY_ESC = 27

modalOpen.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("popap__open");
  modalLogin.focus();
});

modalClose.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  popap.classList.remove("popap__open");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === KEY_ESC) {
    if (!popap.classList.contains("visually-hidden")) {
      evt.preventDefault();
      popap.classList.remove("popap__open");
    }
  }
});

modalForm.addEventListener ("submit", function (evt) {
  if (!modalLogin.value && !modalEmail.value) {
    evt.preventDefault();
    popap.classList.add("popap__error");
  }
});
