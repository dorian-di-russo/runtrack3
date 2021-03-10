/*const footer = document.querySelector('.footer');

window.onscroll = function (){
    var bot = window.scrollY;
    console.log(bot);
    if ( bot >= 500){
     footer.classList.add('active')    
    }else{
        footer.classList.remove('active');
    }
}*/

var colors = [
    [0, 100, 50],
    [113, 75, 25],
    [240, 87, 40],
    [328, 24, 40]
  ],
  
  el = document.getElementsByTagName('footer')[0],   // Element to be scrolled
  length = colors.length,                          // Number of colors
  height = Math.round(el.offsetHeight / length);   // Height of the segment between two colors
  
  function scroll() {
    var i = Math.floor(el.scrollTop / height),     // Start color index
        d = el.scrollTop % height / height,        // Which part of the segment between start color and end color is passed
        c1 = colors[i],                            // Start color
        c2 = colors[(i+1)%length],                 // End color

  }