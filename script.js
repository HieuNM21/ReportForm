let modal = document.querySelector("#modal");
let addBtn = document.querySelector("#add-btn");
let pageMask = document.querySelector("#page-mask");

addBtn.addEventListener("click", () => {
  toggleModal();
});

const toggleModal = () => {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    pageMask.style.opacity = 0;
    pageMask.style.zIndex = -1;
    modal.style.zIndex = -1;
  } else {
    modal.classList.add("active");
    pageMask.style.opacity = 1;
    pageMask.style.zIndex = 1;
    modal.style.zIndex = 2;
  }
};
