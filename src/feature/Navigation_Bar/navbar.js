document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".topnav-hamburger-menu").forEach(menu => {
        document.getElementById(menu.dataset.target).classList.add('topnav-list')
        menu.addEventListener("click", () => {
            if(window.getComputedStyle(document.getElementById(menu.dataset.target)).getPropertyValue('display') === "block"){
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
    document.querySelectorAll(".fixed-sidenav-dropdown-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if(window.getComputedStyle(document.getElementById(btn.dataset.dropdown)).getPropertyValue('display') === "block"){
                document.getElementById(btn.dataset.dropdown).style.display = "none"
            }else{
                document.getElementById(btn.dataset.dropdown).style.display = "block";
            }
        })
    })
})