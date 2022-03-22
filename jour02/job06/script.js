function onKonamiCode(cb) {
    var input = '';    // ce que je rentre 
    var key = '38384040373937396665'; // code konami
    document.addEventListener('keydown', function (e) { // ajout de l'évènement
      input += ("" + e.keyCode); // assimile les 2 variables
      if (input === key) { // condition
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onKonamiCode(function () {alert('bravo')})