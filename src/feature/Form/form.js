document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".textarea-auto-adjust").forEach(textarea => {
        textarea.addEventListener("input", () => {
            textarea.style.height = "5px";
            textarea.style.height = textarea.scrollHeight + 'px';
        })
        textarea.style.height = textarea.scrollHeight + parseInt(getComputedStyle(textarea).paddingTop) +parseInt(getComputedStyle(textarea).paddingBottom) + 'px';
    })
    document.querySelectorAll(".toggle-switch").forEach(toggle => {
        // Create a new element inside toggle input
        let element = document.createElement('label');
        element.classList.add('toggle-animation');
        element.setAttribute("for", toggle.querySelector("input[type=checkbox]").getAttribute('id'));
        toggle.appendChild(element);
    })
    document.querySelectorAll(".input-animate").forEach(input => {
        let form = input.parentNode;
        form.classList.add('form-animate')
        let element = document.createElement("span");
        element.classList.add('input-onFocus');
        if(!form.querySelector(".input-onFocus"))form.insertBefore(element, input.nextSibling)
    })
})