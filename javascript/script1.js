/*This js is for Expanding images gallery for CUD graduation ceremony*/
/*to increasing or decreasing the “scale” value in the CSS & JS*/ 
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}


/*This js is for full images gallery for CID*/
/*to display the collection of images or others content*/
var fullImgBox = document.getElementById("fullimgbox");
var fullImg = document.getElementById("fullimg");

function openFULLIMG(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFULLIMG(){
    fullImgBox.style.display = "none";
}