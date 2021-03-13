var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
       showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slider__slide");
  var dots = document.getElementsByClassName("slider__panel__middle__button")
  if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "grid";
      dots[slideIndex - 1].className += " active";
}

//SHOW MORE
const read__more = document.querySelector('.show__more');
const list = document.querySelector('.hidden__games');

read__more.addEventListener("click",(e)=>{
  list.classList.toggle("ddd");
    read__more.classList.toggle("activee");
  if(read__more.innerText === "Show more"){
    read__more.innerText = "Show less";
  }else {
    read__more.innerText = "Show more";
  }
});

//SHOW MORE2
const read__more2 = document.querySelector('.show__more2');
const list2 = document.querySelector('.hidden__games2');

read__more2.addEventListener("click",(e)=>{
  list2.classList.toggle("ddd2");
  read__more2.classList.toggle("activee2");
  if(read__more2.innerText === "Show more"){
    read__more2.innerText = "Show less";
  }else {
    read__more2.innerText = "Show more";
  }
});
//SHOW MORE3
const read__more3 = document.querySelector('.show__more3');
const list3 = document.querySelector('.hidden_list');

read__more3.addEventListener("click",(e)=>{
  list3.classList.toggle("ddd3");
  read__more3.classList.toggle("activee3");
  if(read__more3.innerText === "Show more"){
    read__more3.innerText = "Show less";
  }else {
    read__more3.innerText = "Show more";
  }
});

//SHOW BURGER
const burger = document.querySelector('.header__burger');
const burger__menu = document.querySelector('.burger__menu');

burger.addEventListener("click",(e)=>{
  burger__menu.classList.toggle("ddd4");
});
