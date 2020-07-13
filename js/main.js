"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    // Anchors links
    var anchors = document.querySelectorAll('.anchor__btn');

    var _iterator = _createForOfIteratorHelper(anchors),
        _step;

    try {
      var _loop = function _loop() {
        var anchor = _step.value;
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          var blockID = anchor.getAttribute('href');
          document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          closedNav();
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    function closedNav() {
      nav.classList.remove('nav--active');
      shadow.classList.remove('shadow--active');
      burger.classList.remove('burger--active');
      document.body.style.overflow = "visible";
      document.body.style.marginRight = "0px";
    } // Nav menu hide & show


    var burger = document.querySelector('.burger'),
        nav = document.querySelector('.nav'),
        shadow = document.querySelector('.shadow'),
        scroll = calcScroll();
    burger.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target;

      if (target.classList.contains('burger')) {
        nav.classList.toggle('nav--active');
        shadow.classList.toggle('shadow--active');
        burger.classList.toggle('burger--active');

        if (nav.classList.contains('nav--active')) {
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = "".concat(scroll, "px");
        } else {
          document.body.style.overflow = "visible";
          document.body.style.marginRight = "0px";
        }
      }
    });
    document.addEventListener('click', function (e) {
      var target = e.target;
      var its_nav = target == nav || nav.contains(target);
      var its_burger = target == burger;
      var nav_is_active = nav.classList.contains('nav--active');

      if (!its_nav && !its_burger && nav_is_active) {
        closedNav();
      }
    });

    function calcScroll() {
      var div = document.createElement('div');
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.overflowY = "scroll";
      div.style.visibility = "hidden";
      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    } // Recommend/*.advices hover effect*/


    var advices = document.querySelector('.advices'),
        advices_item = document.querySelectorAll('.advices__item'),
        advices_img = document.querySelectorAll('.advices__img');
    advices_item.forEach(function (item, i) {
      item.addEventListener('mouseover', function (e) {
        var target = e.target;

        if (target == item || target.parentNode == item) {
          advicesImgRemove();
          advicesImg(i);
        }
      });
    });
    advicesImg();

    function advicesImg() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      advices_img[i].classList.add('animate__jello');
    }

    advicesImgRemove();

    function advicesImgRemove() {
      advices_img.forEach(function (item) {
        item.classList.remove('animate__jello');
      });
    } // Banner Hover


    var banner = document.querySelector('.banner');
    var arrows = document.querySelector('.arrows');
    banner.addEventListener('mouseover', function () {
      if (banner.classList.contains('banner--hover')) {
        arrows.classList.add('animate__fadeOutUp');
        setTimeout(function () {
          banner.classList.remove('banner--hover');
        }, 1000);
      }
    });
    banner.addEventListener('mouseout', function () {
      arrows.classList.remove('animate__fadeOutUp');
    }); // Footer Accordion

    var accordion = document.querySelectorAll('.footer__item');
    accordion.forEach(function (item) {
      item.addEventListener('click', function (e) {
        accordion.forEach(function (item) {
          item.classList.remove('footer__item--active');
        });
        e.target.closest('.footer__item').classList.add('footer__item--active');
      });
    });

    function formValid(nameInput, telInput, formSubmit) {
      var formName = document.querySelector(nameInput),
          formTel = document.querySelector(telInput),
          form = document.querySelector(formSubmit);

      function formValid(e) {
        var nameReg = formName.value.match("[A-Za-zА-Яа-яЁё]{3,}");
        var nameTell = formTel.value.match(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/);
        !nameReg ? formName.classList.add('input__error') : formName.classList.remove('input__error');
        !nameTell ? formTel.classList.add('input__error') : formTel.classList.remove('input__error');

        if (!nameReg || !nameTell) {
          e.preventDefault();
        }
      }

      form.addEventListener('submit', formValid, false);
    }

    formValid('#to-order__name', '#to-order__tel', '.to-order__form');
    formValid('#form__name', '#form__tel', '.form');
  })();
});