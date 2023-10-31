const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
 
//slide btn
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn'); 

//counter 
let counter = 1;
const size = carouselImages[0].clientwidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

// button listener 
nextBtn.addEventListener(`click`,()=>{
    carouselSlide.style.transform = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

prevBtn.addEventListener(`click`,()=>{
    carouselSlide.style.transform = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});


