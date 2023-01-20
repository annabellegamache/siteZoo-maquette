"use strict";
window.addEventListener("load",function(){
    let bouton = document.querySelector(".navigation__icone");
    let navMobile = document.querySelector(".navigation_mobile");
    let entete = document.querySelector(".entete-page__titre");
    console.log(entete);

    let isClicked = false ;
    bouton.addEventListener("click",() => {
        if(!isClicked){
            console.log(navMobile);
            bouton.src = "./assets/img/close.svg";
            navMobile.classList.add("navigation_enabled");
            entete.style.marginTop='5vh';
            isClicked = true; 
        }else{
            console.log(navMobile);
            bouton.src = "./assets/img/hamSvg.svg";
            navMobile.classList.remove("navigation_enabled");
            entete.style.marginTop='25vh';
            isClicked = false; 
        }
      
    });
});