window.onscroll = function() {scroll()}


function scroll() {
    var scrollTop = window.scrollY;
    var elem = document.getElementById("test");


    if (scrollTop > 0 && scrollTop < 101 ) {
        elem.classname = 'scrolled1';
    } else if ( scrollTop > 100 && scrollTop < 201){
        elem.classname = 'scrolled2';
    } else if ( scrollTop > 200 && scrollTop < 301){
        elem.classname = 'scrolled3';
    }else if ( scrollTop > 300 && scrollTop < 401){
        elem.classname = 'scrolled4';
    }else if ( scrollTop > 400 && scrollTop < 501){
        elem.classname = 'scrolled5';
    } else if ( scrollTop > 500 && scrollTop < 601) {
        elem.classname = 'scrolled6';
    }

}
