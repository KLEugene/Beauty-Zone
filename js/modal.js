const refModal = document.querySelector(".modal");
const refBtnClose = document.querySelector("[data-modal-close]");
const refBtnSubmit = document.querySelector(".modal__button");
const refBtnOpen =document.querySelector("[data-modal-open]")

refBtnClose.addEventListener("click", onClick);
refBtnSubmit.addEventListener("click", onClick);
refBtnOpen.addEventListener("click", onClick);
function onClick() { 
    refModal.classList.toggle("is-hidden");
};

