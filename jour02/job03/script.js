


function addone()
{

    var button =   doc.getElementsById('button');
    var compteur = doc.getElementById('compteur');
  
  }
  
  var  cpt = parseInt(compteur.innerText);
  button.addEventListener('click', function(){
    cpt = cpt+1;
    compteur.innerHTML = cpt;
  });