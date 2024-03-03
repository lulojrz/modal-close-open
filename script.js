const modal = document.getElementById("modal")
const button = document.getElementById("btn")
const span = document.getElementsByClassName("material-symbols-outlined")[0];
const open = document.getElementById("open")


open.onclick = function(){
    modal.style.display = "block"
    open.style.display = "none"
}

span.onclick = function(){
    modal.style.display="none"
    open.style.display = "block"

}
button.onclick = function(){
    modal.style.display = "none"
    open.style.display = "block"

}

