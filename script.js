let slideIndex = 0;
function slideShow(){
    let i;
    let slides = document.getElementsByClassName('carousel_text');
    let dots = document.getElementsByClassName('dots');
    console.log(slides, dots);

    for(i = 0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i<dots.length; i++){
        dots[i].className.replace(' first_active', '');
    }
    slides[slideIndex].style.display = 'inline-block';
    dots[slideIndex].className += ' first_active';
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
