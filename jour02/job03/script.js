// var nombreclick = 0;

// function addone () {
//     nombreclick++;
//     document.getElementById("compteur").textContent = nombreclick;

// }

// document.getElementById("compteur").addEventListener("click", addone);

function addone (){

var el = document.getElementById("compteur");

if (el){
el.addEventListener('click', event => {
  el.innerHTML = `Nombre de clics : ${event.detail}`;
});
}
}

addone();


