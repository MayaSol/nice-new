/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    'map',
    'test' //!!!!
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'tiny-slider/dist/tiny-slider.css',
    'src/blocks/slider/slider.scss',
    'lightgallery/css/lightgallery-bundle.min.css',
    'bootstrap.min.css'

    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    '../blocks/slider/slider.js',
    './bootstrap.bundle.min.js'
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/': 'fonts/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/gallery/': 'img/gallery',
    'src/img/command/': 'img/command',
    'src/img/action/': 'img/action',
    'src/screen/': 'screen/',

    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
