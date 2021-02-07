const toggle = document.querySelector(".bars");
const ulList = document.querySelector("ul");

toggle.addEventListener("click", () => {
    ulList.classList.toggle("active");
})