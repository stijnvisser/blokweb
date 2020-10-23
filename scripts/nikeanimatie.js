/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/*bron: https://www.youtube.com/watch?v=LB70WzwBCTo */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-70px";
    }

    prevScrollpos = currentScrollpos;

};


/*bron: https://www.w3schools.com */

var openMenu = document.querySelector('#openbtn');
var closeMenu = document.querySelector('#closebtn');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".main").style.marginRight = "250px";
    document.body.style.boxShadow = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
    document.body.style.boxShadow = "white";
}

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
