const ready = require('../../js/utils/documentReady.js');
import IMask from 'imask';

ready(function(){
  console.log('IMask');
  console.log(IMask);

  var element = document.querySelector('.field-text--phone input');
  console.log('element');
  console.log(element);
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
    placeholderChar: '_'
  };
  var mask = IMask(element, maskOptions);
  console.log('mask');
  console.log(mask);
});
