document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[open-modal]").forEach(btn => {
        btn.addEventListener("click", () => {
            let modal = document.getElementById(btn.dataset.modal);
            window.onclick = e =>  {if(e.target == modal) modal.style.display = "none"}
            if(window.getComputedStyle(modal).getPropertyValue('display') === "block"){
                modal.style.display = "none";
            }else modal.style.display = "block";
        })
    })
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById(btn.dataset.modal).style.display = "none";
        })
    })
})