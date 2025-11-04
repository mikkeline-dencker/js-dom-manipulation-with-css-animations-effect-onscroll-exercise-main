"use strict";

const sections = document.querySelectorAll("section");

//Tager fat om browservinduet
window.onscroll = () => {
  sections.forEach((sec) => {
    //Får nuværende scroll position
    let scrollDistance = window.scrollY;
    //Får sektionens position ift. toppen af dokumentet
    let secDistance = sec.offsetTop;
    //Hvis sektionen er kommet ind i synsfeltet, tilføjes 'show-animate' ellers fjernes den
    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const secOne = document.querySelector(".sec1");
secOne.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

secOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});

//Henter knapperne fra DOM
const getHorseBtn = document.getElementById("horse");
const getPolarBearBtn = document.getElementById("polarbear");
const getDogBtn = document.getElementById("dog");

//Henter lydfiler
const soundHorse = new Audio();
soundHorse.src = "../sound/horse.wav";
const soundPolarbear = new Audio();
soundPolarbear.src = "../sound/polarbear.wav";
const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";

//Aktiver animation og lyd ved klik på knap
if(getDogBtn){
getDogBtn.addEventListener("click", () => {
  soundDog.play();
  getDogBtn.classList.remove("animate");
  getDogBtn.classList.toggle("anim-scale");
});
}

if(getHorseBtn){
getHorseBtn.addEventListener("click", () => {
  soundHorse.play();
  getHorseBtn.classList.remove("animate");
  getHorseBtn.classList.toggle("anim-rotate");
});
}

if (getPolarBearBtn) {
  getPolarBearBtn.addEventListener("click", () => {
    soundPolarbear.play();
    getPolarBearBtn.classList.remove("animate");
    getPolarBearBtn.classList.toggle("anim-skew");
  });
}

//Sektion 6 - blomster
const flowerElem = document.getElementById("flowerElem");

if (flowerElem) {
  flowerElem.addEventListener("click", () => {
    flowerElem.classList.remove("animate");
    flowerElem.classList.toggle("anim-flip");
  });
}