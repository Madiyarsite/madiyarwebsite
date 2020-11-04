'use strict';

let namee,
    logoo = document.querySelector(' .navbar-brand');
   
function logo(){
    namee = prompt("Ваше имя");
    for(let i = 0; i < 2; i++){
        
    if((typeof(namee)) != "string" || (typeof(namee)) == null || namee == "" || namee.length > 15 ){
        alert("Вы вели неверно!");
        namee = prompt("Ваше имя");
        i--;
    }else{
        
        logoo.innerHTML = namee;
        
    }
  }
}
logo();
