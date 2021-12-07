"use strict";

// когда будешь адаптироватьлучше прописать все величины ширины через window.screen.width так будет лучше
// slider in promo

const carouselLine = document.querySelector('.carousel__wrapper'),
      carouselItem = document.querySelectorAll('.carousel__item');
let shift = 0;

const nextCarousel = function() {
  document.querySelector('.carousel-next').addEventListener('click', function(){
    shift += 250; // Изменить позже при адаптации
    if (shift > (carouselItem.length-1)*250){
      shift = 0;
    }
    carouselLine.style.left = -shift + 'px';
  });
};
const prevCarousel = function() {
  document.querySelector('.carousel-prev').addEventListener('click', function(){
    shift -= 250; // Изменить позже при адаптации
    if (shift < 0){
      shift = (carouselItem.length-1)*250;
    }
    carouselLine.style.left = -shift + 'px';
  });
};
nextCarousel();
prevCarousel();

// slider switcher

const switcherLine = document.querySelector('.switcher__wrapper'),
      switcherItem = document.querySelectorAll('.switcher__wrapper__btn');
let qwerty = 0;

const nextSwitcher = function() {
  document.querySelector('.switcher-next').addEventListener('click', function(){
    qwerty += 195;
    if (qwerty > (switcherItem.length-1)*195){
      qwerty = 0;
    }
    switcherLine.style.left = -qwerty + 'px';
  });
};
const prevSwitcher = function() {
  document.querySelector('.switcher-prev').addEventListener('click', function(){
    qwerty -= 195;
    if (qwerty < 0){
      qwerty = (switcherItem.length-1)*195;
    }
    switcherLine.style.left = -qwerty + 'px';
  });
};
nextSwitcher();
prevSwitcher();

// slider projects 
// изменить grid сетку при адаптации 

const projectsLine = document.querySelector('.projects__wrapper'),
      projectsItem = document.querySelectorAll('.projects__item');
let prj = 0;

const nextProjects = function() {
  document.querySelector('.projects-next').addEventListener('click', function(){
    prj += 320;
    if (prj > (projectsItem.length-1)*320) {
      prj = 0;
    }
    projectsLine.style.left = -prj + 'px';
  });
};
const prevProjects = function() {
  document.querySelector('.projects-prev').addEventListener('click', function(){
    prj -= 320;
    if (prj < 0) {
      prj = (projectsItem.length-1)*320;
    }
    projectsLine.style.left = -prj + 'px';
  });
};
nextProjects();
prevProjects();

// slider rubrics 
const rubricsLine = document.querySelector('.rubrics__wrapper'),
      rubricsItem = document.querySelectorAll('.rubrics__elem');
let rub = 0;

const nextRubrics = function() {
  document.querySelector('.rubrics-next').addEventListener('click', () => {
    rub += 290;
    if (rub > (rubricsItem.length-1)*290){
      rub = 0;
    }
    rubricsLine.style.left = -rub + 'px';
  });
};
const prevRubrics = function() {
  document.querySelector('.rubrics-prev').addEventListener('click', () => {
    rub -= 290;
    if (rub < 0){
      rub = (rubricsItem.length-1)*290;
    }
    rubricsLine.style.left = -rub + 'px';
  });
};
nextRubrics();
prevRubrics();