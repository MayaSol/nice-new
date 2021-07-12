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
      controlsContainer: '.slider-controls',
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
});
