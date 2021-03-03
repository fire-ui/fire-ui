document.addEventListener("DOMContentLoaded", () => {
    //Getting all pre tag from DOM
    document.querySelectorAll("pre").forEach(pre => {
        //Check if there's a code tag inside pre tag and if the pre tag allowing copy
        if(Boolean(pre.getElementsByTagName('code').length) && !(pre.hasAttribute('data-copyable') && pre.dataset.copyable === "false")){
            //Insert a copy btn as the first child of pre tag
            var copyBtn = document.createElement('button');
            copyBtn.classList.add('code-copyBtn');
            copyBtn.innerText = "Copy";
            pre.insertBefore(copyBtn, pre.firstChild)
            //Copy code text when copyBtn is clicked
            copyBtn.addEventListener('click', () => {
                //Create a new textarea to copy text
                const code = pre.querySelector('code').innerText;
                const textarea = document.createElement("textarea");
                textarea.value = code;
                //Make textarea unreachable by user
                textarea.style.opacity = '0';
                textarea.setAttribute('readonly', '');
                document.body.appendChild(textarea);
                textarea.select()
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copyBtn.innerText = "Copied";
                document.addEventListener('copy', () => {
                    copyBtn.innerText = "Copy";
                })
            })
        }
    })
})