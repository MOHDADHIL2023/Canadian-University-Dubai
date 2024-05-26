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
window.onscroll = function() {ScrollFunction()};

/* When the user clicks on the button scroll to the top of the document*/
function ScrollFunction(){
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

/*this js is for read more & less button*/
function myFunction(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btntext = document.getElementById("myBTN");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = "READ MORE";
        moretext.style.display = "none";
    } else {
        dots.style.display = "none";
        btntext.innerHTML = "READ LESS";
        moretext.style.display = "inline";
    }
}

/*this js is for read more & less button*/
function myFunction1(){
    var dots = document.getElementById("dots1");
    var moretext = document.getElementById("more1");
    var btntext = document.getElementById("myBTN1");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = "READ MORE";
        moretext.style.display = "none";
    } else {
        dots.style.display = "none";
        btntext.innerHTML = "READ LESS";
        moretext.style.display = "inline";
    }
}

/*this js is for read more & less button*/
function myFunction2(){
    var dots = document.getElementById("dots2");
    var moretext = document.getElementById("more2");
    var btntext = document.getElementById("myBTN2");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = "READ MORE";
        moretext.style.display = "none";
    } else {
        dots.style.display = "none";
        btntext.innerHTML = "READ LESS";
        moretext.style.display = "inline";
    }
}

/*this js is for read more & less button*/
function myFunction3(){
    var dots = document.getElementById("dots3");
    var moretext = document.getElementById("more3");
    var btntext = document.getElementById("myBTN3");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = "READ MORE";
        moretext.style.display = "none";
    } else {
        dots.style.display = "none";
        btntext.innerHTML = "READ LESS";
        moretext.style.display = "inline";
    }
}