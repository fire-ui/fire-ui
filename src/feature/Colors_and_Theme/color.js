// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
     // Set the website theme color according to the latest user preference saved in localStorage
     if(localStorage.getItem('theme-color')){
        document.body.setAttribute('data-theme', localStorage.getItem('theme-color'))
    }
    // Searching all attributes with switch-theme attribute
    document.querySelectorAll("[switch-theme]").forEach(btn => {
        btn.addEventListener("click", () => {
            if(document.body.getAttribute('data-theme') === "dark"){
                localStorage.setItem('theme-color', "light")
            }else{
                localStorage.setItem('theme-color', "dark")
            }document.body.setAttribute('data-theme', localStorage.getItem('theme-color'))
        })
    })
})