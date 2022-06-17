var slidesnr=document.getElementsByClassName("introSlide").length;
var slides=document.getElementsByClassName("introSlides")[0];
var slidewidth=100;
var currentwidth=0;


//setInterval(changeSlide, 5000);

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
var mslidesnr=document.getElementsByClassName("mss").length;
var mslides=document.getElementById("musicSection_r1");
var mslidewidth= 100 -11.5;
var mcurrentwidth=0;


setInterval(mchangeSlide, 5000);

function changeSlide() {
    mcurrentwidth+=mslidewidth;
    mslides.style.right=mcurrentwidth+"vw";

    console.log(mslidesnr*mslidewidth);
    if (!((mslidesnr-2)*Math.abs(mslidewidth)>=mcurrentwidth)) {
        mslidewidth=-(100 -11.5)
    }
    else if(!(mcurrentwidth>=Math.abs(mslidewidth))) {
        mslidewidth=100 -11.5
    }

 
    

}
function mchangeSlidebk() {
    mcurrentwidth-=Math.abs(mslidewidth);
    console.log(mslidesnr*mslidewidth);
    if (0<=mcurrentwidth) {
        mslides.style.right=mcurrentwidth+"vw";
    }
    else{
        mcurrentwidth=0;
        mslides.style.right=mcurrentwidth+"vw";

    }

}function mchangeSlidefw() {
    mcurrentwidth+=Math.abs(mslidewidth);
    console.log(mslidesnr*mslidewidth);
    if ((mslidesnr-1)*Math.abs(mslidewidth)>=mcurrentwidth) {
        mslides.style.right=mcurrentwidth+"vw";
    }
    else{
        mcurrentwidth=0;
        mslides.style.right=mcurrentwidth+"vw";

    }

}
