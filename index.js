const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    nav.setAttribute("data-visible", (visibility === "true" ? "false" : "true"))
    nav.setAttribute("aria-expanded", (visibility === "true" ? "false" : "true"))
})