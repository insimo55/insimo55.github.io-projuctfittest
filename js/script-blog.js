let offset = 0;
const sliderLine = document.querySelector('.slider_blog-line');
const lol = document.querySelectorAll('.slider_blog-item');


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
    document.querySelector('.slider_blog').append(div);
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

let popset = 0;
const line = document.querySelector('.actual-line');
const lolik = document.querySelectorAll('.actual-item');


const arrows = document.querySelector('.slider-next_actual');
const autoSwipes = function(arrows) {
        popset += 1440;
        if (popset > (lolik.length-1)*1440) {
            popset = 0;
        }
        line.style.left = -popset + 'px';
};

setInterval(autoSwipes, 10000);

const arrowNext = function() {
    document.querySelector('.slider-next_actual').addEventListener('click', function(){
        popset += 1440;
        if (popset > (lolik.length-1)*1440) {
            popset = 0;
        }
        line.style.left = -popset + 'px';

    });
};
arrowNext();
const arrowPrev = function(){
    document.querySelector('.slider-prev_actual').addEventListener('click', function(){
        popset -= 1440;
        if (popset < 0) {
            popset = (lolik.length-1)*1440;
        }
        line.style.left = -popset + 'px';
    });
};
arrowPrev();