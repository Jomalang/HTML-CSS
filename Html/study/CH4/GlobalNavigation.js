"use strict";

let globalNavMore = document.querySelector(".Global-Nav-More");
let globalNavMoreitem = document.querySelector(".Global-Nav-More-item");

globalNavMore.addEventListener("click", globalNavMoreFunc)
{
    if(this.active)
    {
        globalNavMoreitem.classList.remove("acitve");
    }
    else
    {
        globalNavMoreitem.classList.add("acitve");
    }
    this.active = !this.active;
}

function globalNavMoreFunc(){
    document.getElementById("Global-Nav-More").style.display = "block";
}