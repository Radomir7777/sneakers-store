let btn3 = false;
const button = document.getElementById("btn3")
let inwait = 0
let prise = document.querySelector(".prise3").innerHTML
let bleckmamba = document.querySelector(".coste")
function buy (){
     
    if(btn3 === folse ){
    button.style.bacraundColor = "green "
    button.textContent = "в корзину" 
    btn3 = true;
    inwait += prise
}else if (btn3 === true){
    button.style.bacraundColor = "silver ";
    button.textContent = "купить ";
    btn3 = folse;
    inwait -= prise
    
    }

}        