const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

// first load localStorage change theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
}

// toggle click change theme
toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    
    // Save theme
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});
