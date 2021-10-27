const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

//allow closing of the modal by clicking on the X
btnCloseModal.addEventListener("click", closeModal);

//click on the overlay to close the modal
overlay.addEventListener("click", closeModal);

//escape key
//logging the event returns KeyboardEvent {isTrusted: true, key: "k", code: "KeyK", location: 0, ctrlKey: false, …}..cool so event.key gang gang
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
