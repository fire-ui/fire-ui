// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set the website theme color according to the latest user preference saved in localStorage
    if(localStorage.getItem('theme-color')){
        document.body.setAttribute('theme', localStorage.getItem('theme-color'))
    }
    // Searching all attributes with switch-theme attribute
    document.querySelectorAll("[switch-theme]").forEach(btn => {
        btn.addEventListener("click", () => {
            if(document.body.getAttribute('theme') === "dark"){
                localStorage.setItem('theme-color', "light")
            }else{
                localStorage.setItem('theme-color', "dark")
            }document.body.setAttribute('theme', localStorage.getItem('theme-color'))
        })
    })
    document.querySelectorAll(".topnav-hamburger-menu").forEach(menu => {
        document.getElementById(menu.dataset.target).classList.add('topnav-list')
        menu.addEventListener("click", () => {
            if(document.getElementById(menu.dataset.target).style.display === "block"){
                menu.innerHTML = "&#x2630;";
                document.getElementById(menu.dataset.target).style.display = "none";
            }else{
                menu.innerHTML = "&times;";
                document.getElementById(menu.dataset.target).style.display = "block";
            }
        })
    })
    document.querySelectorAll(".sidenav-menu-btn").forEach(menu => {
        menu.addEventListener("click", () => {
            document.querySelectorAll(".sidenav-close-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    document.getElementById(btn.dataset.target).style.width = "0%";
                })
            })
            if(window.innerWidth <= 768) document.getElementById(menu.dataset.target).style.width = "100%"
            else document.getElementById(menu.dataset.target).style.width = "250px"
        })
    })
})