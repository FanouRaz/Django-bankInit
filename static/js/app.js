/* ------------------Sidemenu--------------------*/

let boutons = document.querySelectorAll(".sidemenu a");
//fonctionnement des boutons du sidemenu
for(let bouton of boutons){
    bouton.addEventListener('click',function(){
        console.log(bouton.classList);
        if(this.classList.value == 'btn'){
            this.classList.add('active');
            for(let j=0;j != boutons.length;j++){
                if(boutons[j] != this && boutons[j].classList.value=='btn active'){
                    boutons[j].classList.remove('active');
                }
            }
        }
    });
}