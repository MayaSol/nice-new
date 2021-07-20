const ready = require('../../js/utils/documentReady.js');
import IMask from 'imask';

ready(function(){

  var element = document.querySelector('.field-text--phone input');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
    placeholderChar: '_'
  };
  var mask = IMask(element, maskOptions);
});
