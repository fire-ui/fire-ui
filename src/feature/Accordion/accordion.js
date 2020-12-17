// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion").forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("accordion-active");
            var panel = document.getElementById(accordion.dataset.panel);
            if(panel.style.maxHeight) panel.style.maxHeight = null;
            else panel.style.maxHeight = panel.scrollHeight + 'px';
        })
    })
})