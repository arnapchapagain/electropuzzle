"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const swiperHero = new Swiper(".hero__swiper", {
    // Optional parameters
    loop: true,
    speed: 3000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      delay: 5000,
    },
  });

  const swiperProjects = new Swiper(".projects__swiper", {
    // Optional parameters
    loop: true,
    speed: 1000,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  this.document.querySelectorAll("a").forEach(function (fa) {
    fa.addEventListener("mousedown", function (foca) {
      foca.preventDefault();
    });
  });

  this.document.querySelectorAll("button").forEach(function (fbtn) {
    fbtn.addEventListener("mousedown", function (focbtn) {
      focbtn.preventDefault();
    });
  });

  this.document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#burger-menu").classList.add("burger-active");
    document.querySelector("body").style.setProperty("overflow-y", "hidden");
  });
  this.document
    .querySelector("#burger-close")
    .addEventListener("click", function () {
      document.querySelector("#burger-menu").classList.remove("burger-active");
      document.querySelector("body").style.setProperty("overflow-y", "visible");
    });

  window.addEventListener("keyup", function (e) {
    var target = document.querySelector(".filters__item-btn input:focus");
    if (e.keyCode === 9 && target) {
      target.parentElement.classList.add("focused");
    }
  });

  var inputs = document.querySelectorAll(".filters__item-btn input");
  inputs.forEach(function (input) {
    input.addEventListener("focusout", function () {
      this.parentElement.classList.remove("focused");
    });
  });

  document
    .getElementById("footer-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var inputFooter = document.getElementById("footer-input");

      if (!inputFooter.checkValidity()) {
        inputFooter.classList.add("footer__input_error");
      } else {
        inputFooter.classList.remove("footer__input_error");
      }
    });
});
