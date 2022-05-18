let currentdot = document.getElementsByClassName('dots');
let currentSlide = document.getElementsByClassName('carousel-text');

document.getElementById('dot1').addEventListener('click', () => {
    currentSlide[0].style.display = 'inline-block';
    currentSlide[1].style.display = 'none';
    currentSlide[2].style.display = 'none';
    currentdot[0].className = 'dots first-active';
    currentdot[1].className = 'dots';
    currentdot[2].className = 'dots';
    slideIndex = 0;
})
document.getElementById('dot2').addEventListener('click', () => {
    currentSlide[0].style.display = 'none';
    currentSlide[1].style.display = 'inline-block';
    currentSlide[2].style.display = 'none';
    currentdot[0].className = 'dots';
    currentdot[1].className = 'dots first-active';
    currentdot[2].className = 'dots';
    slideIndex = 1;
})
document.getElementById('dot3').addEventListener('click', () => {
    currentSlide[0].style.display = 'none';
    currentSlide[1].style.display = 'none';
    currentSlide[2].style.display = 'inline-block';
    currentdot[0].className = 'dots';
    currentdot[1].className = 'dots';
    currentdot[2].className = 'dots first-active';
    slideIndex = 2;
})




let slideIndex = 0;
function slideShow(){
    let i;
    let slides = document.getElementsByClassName('carousel-text');
    let dots = document.getElementsByClassName('dots');
    console.log(slides, dots);

    for(i = 0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i<dots.length; i++){
        dots[i].className.replace(' first-active', '');
    }
    slides[slideIndex].style.display = 'inline-block';
    dots[slideIndex].className += ' first-active';
    if (slideIndex > 0) {
    dots[slideIndex-1].className = 'dots';
    }
    if (slideIndex === 0) {
        dots[slideIndex+slides.length-1].className = 'dots';
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    setTimeout(slideShow, 5000)
}
slideShow();
