var slidesnr=document.getElementsByClassName("introSlide").length;
var slides=document.getElementsByClassName("introSlides")[0];
var slidewidth=100;
var currentwidth=0;


setInterval(changeSlide, 5000);

function changeSlide() {
    currentwidth+=slidewidth;
    slides.style.right=currentwidth+"vw";

    console.log(slidesnr*slidewidth);
    if (!((slidesnr-2)*Math.abs(slidewidth)>=currentwidth)) {
        slidewidth=-100
    }
    else if(!(currentwidth>=Math.abs(slidewidth))) {
        slidewidth=100
    }

 
    

}
function changeSlidebk() {
    currentwidth-=Math.abs(slidewidth);
    console.log(slidesnr*slidewidth);
    if (0<=currentwidth) {
        slides.style.right=currentwidth+"vw";
    }
    else{
        currentwidth=0;
        slides.style.right=currentwidth+"vw";

    }

}function changeSlidefw() {
    currentwidth+=Math.abs(slidewidth);
    console.log(slidesnr*slidewidth);
    if ((slidesnr-1)*Math.abs(slidewidth)>=currentwidth) {
        slides.style.right=currentwidth+"vw";
    }
    else{
        currentwidth=0;
        slides.style.right=currentwidth+"vw";

    }

}
