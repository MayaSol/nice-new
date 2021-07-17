/* global document */

const ready = require('../../js/utils/documentReady.js');
// import { MicroModal } from "../../../node_modules/micromodal/dist/micromodal";

var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");
// MicroModal.init();-

ready(function(){

  MicroModal.init({
    onShow: modal => onShow(modal), // [1]
    onClose: modal => onClose(modal), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'modal--open', // [5]
    disableScroll: false, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });

  function onShow(modal) {
      console.log(`${modal.id} is shown`);
  }

  function onClose(modal) {
      console.log(`${modal.id} is hidden`);
  }

  // const backdrop = document.querySelector('.modal__backdrop');
  // backdrop.addEventListener('click',function() {
  //   console.log('backdrop clicked');
  // })

});
