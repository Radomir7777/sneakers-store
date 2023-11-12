let inwaitul = document.createElement("li")
inwaitul.classList.add("pon")
let creatin = document.createElement ("h1")
let beloc = document.createTextNode ("sneakers")
let cardio = document.createElement("p")
creatin.appendChild(beloc)
let cena = document.createTextNode ("50000р")
cardio.appendChild (cena)
let spavn = document.querySelector (".feik")
let gim = document.createElement ("img")
gim.src = "img/4.png"
let button1 = document.createElement ("button")
let cnopka = document.createTextNode ("combek please")
button1.appendChild (cnopka)
let rashim = document.querySelectorAll (".pon")[0];
button1.setAttribute("onclick","waiper()")

function novinochka() {
    console.log("читинг")
    spavn.appendChild (inwaitul)
    inwaitul.appendChild (creatin)
    inwaitul.appendChild (cardio)
    inwaitul.appendChild (gim)
    inwaitul.appendChild (button1) 
    rashim.classList.add ("none")
}

function waiper() {
    button1.parentNode.remove();
    rashim.classList.remove("none")
}