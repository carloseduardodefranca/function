var titulo = document.getElementById("titulo")


var btn = document.querySelector("#btn")

function disparaAlerta(){
 var body = document.querySelector("body")
 body.classList.toggle("dark-mode")

if(body.classList.contains("dark-mode")){
    btn.textContent = "desativar"
}else{
    btn.textContent = "ativar"
}
} 
btn.addEventListener("click", disparaAlerta)


/* forma do rafa: usando innerText
if(btn.innerText == "ativar"){
    btn.innerText = "desativar"} */