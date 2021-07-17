import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"
const ready = require('../../js/utils/documentReady.js');

ready(function(){

  let clientWidth = document.documentElement.clientWidth;

  if (document.querySelector('.actions__list') && clientWidth >= 768) {

    var sliderMain = tns({
      container: '.actions__list',
      items: 2,
      slideBy: 2,
      mouseDrag: true,
      controls: true,
      controlsPosition: 'bottom',
      controlsContainer: '.actions__btns .slider-controls',
      nav: false,
      gutter: 48,
      responsive: {
        1280: {
          gutter: 30,
          items: 3
        },
        1920: {
          "fixedWidth": 320,
          gutter: 130
        }
      }
    });
  }

  var groups = document.querySelectorAll('.group');
  console.log(groups);
  var sliderGroup = [];
  for (var i=0; i<groups.length; i++) {
    var container = groups[i].querySelector('.group__list');
    var controls = groups[i].querySelector('.slider-controls');
    if (container) {
      sliderGroup[i] = tns({
        container: container,
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        controlsPosition: 'bottom',
        controlsContainer: controls,
        nav: false,
        responsive: {
          768: {
            gutter: 22,
            items: 3,
            center: true,
            fixedWidth: 300,
          },
          1920: {
            fixedWidth: 400,
            items: 5,
            gutter: 45
          }
        }
      });
    }
  }

  var gallery = document.querySelectorAll('.gallery');
  console.log(gallery);
  var sliderGallery = [];
  for (var i=0; i<gallery.length; i++) {
    var container = gallery[i].querySelector('.gallery__list');
    var controls = gallery[i].querySelector('.slider-controls');
    if (container) {
      sliderGroup[i] = tns({
        container: container,
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        controlsPosition: 'bottom',
        controlsContainer: controls,
        nav: false,
        responsive: {
          768: {
            gutter: 114,
            items: 3,
            fixedWidth: 334,
            center: true
          },
          1920: {
            items: 4,
            fixedWidth: 440,
            gutter: 40,
            // autoWidth: true,
            center: false,
            edgePadding: -155
          }
        }
      });
    }
  }

});
