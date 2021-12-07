"use strict";


const slider = document.querySelector('.slider-line'),
      slides = document.querySelectorAll('.slider-item');

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

 slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());
    //touch
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    //mouse
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
    });
 
//Disable  context menu
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
 
    
function touchStart(index) {
  return function(event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if(movedBy < -100) {
    offset += 780;
    currentIndex +=1;
        if (offset > (lol.length-1)*780) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
        activeDot();

  }
  if(movedBy > 100 && currentIndex > -1){
    offset -= 780;
    currentIndex -=1;
        if (offset < 0) {
            offset = (lol.length-1)*780;
        }
        sliderLine.style.left = -offset + 'px';
        activeDot();

  } 
  setPositionByIndex();
  slider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX :
  event.touches[0].clientX;
}

function animation(){
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}
function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;

}

function setPositionByIndex() {
  currentTranslate = currentIndex;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const lol = document.querySelectorAll('.slider-item');


const arrow = document.querySelector('.slider-next');
const autoSwipe = function(arrow) {
        offset += 780;
        if (offset > (lol.length-1)*780) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
        activeDot();

};

setInterval(autoSwipe, 5000);

const next = function() {
    document.querySelector('.slider-next').addEventListener('click', function(){
        offset += 780;
        if (offset > (lol.length-1)*780) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
        activeDot();

    });
};
next();
const prev = function(){
    document.querySelector('.slider-prev').addEventListener('click', function(){
        offset -= 780;
        if (offset < 0) {
            offset = (lol.length-1)*780;
        }
        sliderLine.style.left = -offset + 'px';
        activeDot();

    });
};
prev();

const a = function() {
    let div = document.createElement('div');
    div.className = "dots";
    document.querySelector('.slider').append(div);
    for (let i = 0; i < lol.length; i++) {
        let sis9 = document.createElement('div');
        sis9.classList.add('dot');
        sis9.classList.add(`dot-${i}`);
        document.querySelector('.dots').append(sis9);
    }
};

a();


const dot1 = document.querySelector('.dot-0');
dot1.addEventListener('click', function(){
  sliderLine.style.left = (-780*0) + 'px';
  activeDot();

});
const dot2 = document.querySelector('.dot-1');
dot2.addEventListener('click', function(){
  sliderLine.style.left = (-780*1) + 'px';
    activeDot();

});
const dot3 = document.querySelector('.dot-2');
dot3.addEventListener('click', function(){
  sliderLine.style.left = (-780*2) + 'px';
    activeDot();

});
const dot4 = document.querySelector('.dot-3');
dot4.addEventListener('click', function(){
  sliderLine.style.left = (-780*3) + 'px';
    activeDot();

});

const activeDot = function() {
  if (sliderLine.style.left == 0 || sliderLine.style.left == 0 + 'px') {
    document.querySelector('.dot-0').classList.add('dot_active');
  } else {
    document.querySelector('.dot-0').classList.remove('dot_active');
  }
  if (sliderLine.style.left == -780 + 'px') {
    document.querySelector('.dot-1').classList.add('dot_active');
  } else {
    document.querySelector('.dot-1').classList.remove('dot_active');
  }
  if (sliderLine.style.left == -1560 + 'px') {
    document.querySelector('.dot-2').classList.add('dot_active');
  } else {
    document.querySelector('.dot-2').classList.remove('dot_active');
  }
  if (sliderLine.style.left == -2340 + 'px') {
    document.querySelector('.dot-3').classList.add('dot_active');
  } else {
    document.querySelector('.dot-3').classList.remove('dot_active');
  }
};
activeDot();
