/* ------------------Sidemenu--------------------*/

let boutons = document.querySelectorAll(".sidemenu a");
let pageActuelle = document.querySelector("title");
//fonctionnement des boutons du sidemenu
for(let bouton of boutons){
    if(bouton.textContent == pageActuelle.textContent){
        bouton.classList.add('active');
    }
    bouton.addEventListener('click',function(){
        if(this.classList.value == 'btn'){
            this.classList.add('active');
            for(let j=0;j != boutons.length;j++){
                if(boutons[j] != this && boutons[j].classList.value=='btn active' && boutons[j].textContent != pageActuelle.textContent){
                    boutons[j].classList.remove('active');
                }
            }
        }
    });
}