// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.childNodes.forEach(btn => {
            //Checking if btn is a valid element containing tab-btn class
            if(btn.classList && btn.classList.contains("tab-btn")){
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".tab-content").forEach(content => {
                        if(content.parentElement.id === tab.dataset.tab){
                            content.style.display = "none";
                        }
                    })
                    document.getElementById(btn.dataset.content).style.display = "block"
                })
            }
        })
    })
})