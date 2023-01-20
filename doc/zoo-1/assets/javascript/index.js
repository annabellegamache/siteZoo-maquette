"use strict";
window.addEventListener("load",function(){
    let bouton = document.querySelector(".navigation__icone");
    let navMobile = document.querySelector(".navigation_mobile"); 

    let isClicked = false ;
    bouton.addEventListener("click",() => {
        if(!isClicked){
            console.log(navMobile);
            navMobile.classList.add("navigation_enabled");
            isClicked = true; 
        }else{
            console.log(navMobile);
            navMobile.classList.remove("navigation_enabled");
            isClicked = false; 
        }
      
    });
});