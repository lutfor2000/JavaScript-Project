const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

// প্রথমবার লোড হলে localStorage থেকে থিম চেক করো
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
}

// টগল ক্লিক করলে থিম পরিবর্তন
toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    
    // থিম সেভ করো
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});
