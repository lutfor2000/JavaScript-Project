const btn = document.getElementById("btn");

const dropdownMenu = document.querySelector(".dropdown-menu");

btn.addEventListener("click", (e) => {
   e.stopPropagation();
    dropdownMenu.classList.toggle("dropdown_block");
});