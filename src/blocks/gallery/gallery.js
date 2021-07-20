import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
const ready = require('../../js/utils/documentReady.js');

ready(function(){

    const galleries = document.querySelectorAll('.gallery__list');

    for (var i=0; i<galleries.length; i++) {
      lightGallery(galleries[i], {
          plugins: [lgThumbnail],
          selector: '.gallery__item[id^=tns]',
          thumbnail: true
      });
    }

    sliderWithGallery('.gallery__list');

    //Обработка клика по клонированным слайдам для слайдера с галереей
    function sliderWithGallery(sliderSelector) {
      var cloned = document.querySelectorAll(sliderSelector + ' .tns-slide-cloned');
      for (i = 0; i < cloned.length; i++) {
        cloned[i].addEventListener('click', function(event) {
            event.preventDefault();
            var origEl = document.querySelector('#' + this.dataset.orig);
            origEl.click();
        })
      }
    }

});
