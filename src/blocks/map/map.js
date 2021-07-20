const ready = require('../../js/utils/documentReady.js');

ready(function() {

  var mapContainer = document.getElementById('map');

  if (mapContainer) {
    console.log('map 1');

    //lazy maps

    var optionsMap = {
      once: true, //запуск один раз, и удаление наблюдателя сразу
      passive: true,
      capture: true
    };
    mapContainer.addEventListener('click', start_lazy_map, optionsMap);
    mapContainer.addEventListener('mouseover', start_lazy_map, optionsMap);
    mapContainer.addEventListener('touchstart', start_lazy_map, optionsMap);
    mapContainer.addEventListener('touchmove', start_lazy_map, optionsMap);
    mapContainer.addEventListener('focus', start_lazy_map, optionsMap);

    var showMap = document.querySelectorAll('.contacts__show-map');
    for (i=0; i<showMap.length; i++) {
      showMap[i].addEventListener('click',function(event) {
        event.preventDefault();
        start_lazy_map();
      },optionsMap);
    }

    let mapLoaded = false;

    function start_lazy_map() {
      if (!mapLoaded) {
        mapLoaded = true;
        let script = document.createElement('script');
        script.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU';
        mapContainer.after(script);
        script.onload = function() {
          ymapsInit();
          console.log('YMAP LOADED');
        }
      }
    }
    //

    function ymapsInit() {
      console.log('ymaps');
      console.log(ymaps);
      ymaps.ready(function() {
        console.log('ymaps.ready');

        // if (document.documentElement.clientWidth > 768) {
        //   var center = [55.638248, 37.603968];
        // }
        // else {
        //   center = [60.021245, 30.323824]
        // }
        var center = [55.639544, 37.600706];
        //
        //Вкладка Контакты Автопремиум
        //
        var map = new ymaps.Map('map', {
            center: center,
            zoom: 14.5
          }
          // , {
          //     searchControlProvider: 'yandex#search'
          // }
        );

        var myPlacemark = new ymaps.Placemark([55.636952, 37.598354], {
          hintContent: 'nicefitness',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-pin-lg.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          // iconImageOffset: [-67, -100]
        });

        map.geoObjects
          .add(myPlacemark);

      });
    }
  }

});
