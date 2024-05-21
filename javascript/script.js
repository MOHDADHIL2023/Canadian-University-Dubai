/*This js is for menu button as a mobile menu*/
/*when you press the minmize button for minimize the window then the menu button will be there when you click it then automatic works*/
const MenuBtn = document.querySelector('.Menu-Button1')
const Navlinks = document.querySelector('.nav-links1')

MenuBtn.addEventListener('click',()=>{
    Navlinks.classList.toggle('mobile-menu1')
})


/*This js is for horizontal scrolling logo slider by CUD Company*/
/*click the horizontal logo slider will a mouse the it will pause and pay it what ever you want*/
var copy = document.querySelector('.logocud').cloneNode(true);
document.querySelector('.logocontainer').appendChild(copy);


/*This js is for scrolling top buttom*/
/* Get the button:*/
let myScbtn = document.getElementById("SCROLLTOPBTN");

/* When the user scrolls down 20px from the top of the document show the button*/
window.onscroll = function() {scrollFunction()};

/* When the user clicks on the button scroll to the top of the document*/
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myScbtn.style.display = "block";
    } else{
        myScbtn.style.display = "none";
    }
}
function scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; /*from google chrome & microsoft edge*/
}