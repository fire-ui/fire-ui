// Wait the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set the website theme color according to the latest user preference saved in localStorage
    if(localStorage.getItem('theme-color')){
        document.body.setAttribute('data-theme', localStorage.getItem('theme-color'))
    }
    // Searching all attributes with switch-theme attribute
    document.querySelectorAll("[data-switch-theme]").forEach(btn => {
        btn.addEventListener("click", () => {
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
        })
    })
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
    document.querySelectorAll(".fixed-sidenav-dropdown-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if(window.getComputedStyle(document.getElementById(btn.dataset.dropdown)).getPropertyValue('display') === "block"){
                document.getElementById(btn.dataset.dropdown).style.display = "none"
            }else{
                document.getElementById(btn.dataset.dropdown).style.display = "block";
            }
        })
    })
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
    document.querySelectorAll(".accordion").forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("accordion-active");
            var panel = document.getElementById(accordion.dataset.panel);
            if(panel.style.maxHeight) panel.style.maxHeight = null;
            else panel.style.maxHeight = panel.scrollHeight + 'px';
        })
    })
    document.querySelectorAll(".textarea-auto-adjust").forEach(textarea => {
        textarea.addEventListener("input", () => {
            textarea.style.height = "5px";
            textarea.style.height = textarea.scrollHeight + 'px';
        })
    })
    document.querySelectorAll("pre").forEach(pre => {
        if(Boolean(pre.getElementsByTagName('code').length) && !(pre.hasAttribute('data-copyable') && pre.dataset.copyable === "false")){
            var copyBtn = document.createElement('button');
            copyBtn.classList.add('code-copyBtn');
            copyBtn.innerText = "Copy";
            pre.insertBefore(copyBtn, pre.firstChild)
            copyBtn.addEventListener('click', () => {
                const code = pre.querySelector('code').innerText;
                const textarea = document.createElement("textarea");
                textarea.value = code;
                textarea.style.opacity = '0';
                textarea.setAttribute('readonly', '');
                document.body.appendChild(textarea);
                textarea.select()
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copyBtn.innerText = "Copied";
            })
        }
    })
    var marquee = document.querySelectorAll('marquee');
    for(let i=0; i<marquee.length; i++){
        marquee[i].setAttribute('scrollamount', '10');
    }
    for(let x=0; x<marquee.length; x++){
        if(marquee[x].hasAttribute('data-speed')){
            var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');
            document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);
        }
    }
})
var defaultIndex = 1;
activeSlide(defaultIndex);

function btnSlide(n) { activeSlide(defaultIndex += n); }
function currentSlide(n) { activeSlide(defaultIndex = n); }
function activeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var info = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {defaultIndex = 1}
  if (n < 1) {defaultIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("slideshow-none");
  }
  for (i = 0; i < info.length; i++) {
      info[i].className = info[i].className.replace(" slideshow-active", "");
  }
  if(slides[defaultIndex - 1]) slides[defaultIndex-1].classList.toggle("slideshow-none");
  if(info[defaultIndex - 1]) info[defaultIndex-1].className += " slideshow-active";
}