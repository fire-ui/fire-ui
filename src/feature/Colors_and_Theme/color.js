// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
     // Set the website theme color according to the latest user preference saved in localStorage
    if(localStorage.getItem('theme-color')){
        if(!document.body.dataset.disableSwitchingTheme) document.body.setAttribute('data-theme', localStorage.getItem('theme-color'))
        else{
            if(!document.body.dataset.theme) document.body.setAttribute('data-theme', 'light')
        }
    }else{
        if(!document.body.dataset.theme) document.body.setAttribute('data-theme', 'light')
    }
    // Searching all attributes with switch-theme attribute
    document.querySelectorAll("[data-switch-theme]").forEach(btn => {
        btn.addEventListener("click", () => {
            if(!document.body.dataset.disableSwitchingTheme){
                if(btn.dataset.switchTheme && btn.dataset.switchTheme !== ""){
                    let availableTheme = btn.dataset.switchTheme.split(',').map(i => i.trim())
                    //Check if current theme is in availableTheme array
                    if(availableTheme.indexOf(document.body.getAttribute("data-theme")) === -1) localStorage.setItem('theme-color', availableTheme[0])
                    else{
                        if(availableTheme.indexOf(document.body.getAttribute('data-theme')) + 1 === availableTheme.length) localStorage.setItem('theme-color', availableTheme[0])
                        else localStorage.setItem('theme-color', availableTheme[availableTheme.indexOf(document.body.getAttribute('data-theme')) + 1])
                    }
                }else{
                    if(document.body.getAttribute('data-theme') === "dark") localStorage.setItem('theme-color', "light")
                    else localStorage.setItem('theme-color', "dark")
                }document.body.setAttribute('data-theme', localStorage.getItem('theme-color'))
            }
        })
    })
})