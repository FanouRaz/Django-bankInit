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


/*--------------------Breadcrumb----------------------*/
//Implémentation du breadcrumb
let url = window.location.pathname
let links = {
    '/dashboard':'Dashboard',
    '/liste':'Liste de prêts',
    '/formulaire':'Enregistrement d\'un nouveau prêt',
    '/calendrier':'Calendrier de remboursement'
};
let breadcrumb = document.querySelector('.breadcrumb');
let breadcrumbLink = breadcrumb.childNodes;
console.log(breadcrumbLink);
for(let link in links){
    if(url == link){
        let separateur = document.createTextNode('/');
        let currentPage = document.createElement('a');
        currentPage.textContent = links[link];
        currentPage.classList.add('currentPage');
        console.log(currentPage.textContent);
        if(breadcrumbLink.length == 3){
            breadcrumbLink[1].classList.remove('currentPage');
            breadcrumb.appendChild(separateur);
            breadcrumb.appendChild(currentPage);
        }
        else{
            breadcrumbLink[4] = currentPage;
        }
    }
}