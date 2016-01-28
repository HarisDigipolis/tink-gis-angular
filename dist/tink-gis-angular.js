'use strict';
(function (module) {
    try {
        module = angular.module('tink.gis.angular');
    } catch (e) {
        module = angular.module('tink.gis.angular', ['leaflet-directive']);
    }
    module.directive('tinkMap', function () {
        return {
            templateUrl: 'templates/tinkmaptemplate.html',
            scope: {
                parlayers: '=',
                parcenter: '='
            },
            controller: function ($scope) {
                function clone(obj) {
                    var copy;

                    // Handle the 3 simple types, and null or undefined
                    if (null == obj || "object" != typeof obj) return obj;

                    // Handle Date
                    if (obj instanceof Date) {
                        copy = new Date();
                        copy.setTime(obj.getTime());
                        return copy;
                    }

                    // Handle Array
                    if (obj instanceof Array) {
                        copy = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            copy[i] = clone(obj[i]);
                        }
                        return copy;
                    }

                    // Handle Object
                    if (obj instanceof Object) {
                        copy = {};
                        for (var attr in obj) {
                            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
                        }
                        return copy;
                    }

                    throw new Error('Unable to copy obj! Its type isn\'t supported.');
                }
                var Alllayers = clone($scope.parlayers);
                angular.extend($scope, {
                    center: $scope.parcenter,
                    layers: {
                        baselayers: $scope.parlayers

                    },
                    defaults: {
                        zoomControl: false
                    },
                    controls: {
                        scale: {
                            imperial: false
                        }
                    }
                });
           
                // var test = {
                //     luchtfoto: {
                //         name: 'luchtfoto',
                //         url: 'http://tile.informatievlaanderen.be/ws/raadpleegdiensten/tms/1.0.0/omwrgbmrvl@GoogleMapsVL/{z}/{x}/{y}.png',
                //         type: 'xyz',
                //         visible: true,
                //         layerOptions: {
                //             showOnSelector: true,
                //             tms: true
                //         }
                //     }
                // };
                $scope.changeBaseLayer = function (key) {
                    var thebaselayeritem = { themap: clone(Alllayers[key]) };
                    $scope.layers.baselayers = null;
                    thebaselayeritem.themap.visible = true;
                    $scope.layers.baselayers = thebaselayeritem;

                };
            }
        };
    });
})
    ();


;angular.module('tink.gis.angular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/tinkmaptemplate.html',
    " <div data-tink-nav-aside=\"\" data-auto-select=true data-toggle-id=asideNavRight class=\"nav-aside nav-right\"> <aside> <div class=nav-aside-section> <p class=nav-aside-title>Section title</p> <ul> <li> <a href=#> <span>Menu item</span> </a> </li> <li> <a href=#> <span>Menu item with badge</span>\n" +
    "<span class=badge>2</span> </a> </li> <li> <a href=#> <span>Menu item with submenu items</span> </a> <ul> <li> <a href=#> <span>Submenu item</span> </a> </li> <li> <a href=#> <span>Submenu item with badge</span>\n" +
    "<span class=badge>8</span> </a> </li> </ul> </li> <li> <a href=#> <i class=\"fa fa-fw fa-cogs\"></i>\n" +
    "<span>Menu item with icon</span> </a> </li> </ul> </div> </aside> </div> <div id=content> <div class=wrapper> <leaflet class=leafletmap center=center layers=layers controls defaults=defaults> <div class=\"btn-group ll searchbtns\"> <button type=button class=btn><i class=\"fa fa-map-marker\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-download\"></i></button> </div> <div class=\"btn-group btn-group-vertical ll interactiebtns\"> <button type=button class=\"btn active\"><i class=\"fa fa-info\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-mouse-pointer\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-download\"></i></button> </div> <div class=\"ll zoekbalken\"> <input id=zoekbalk1 placeholder=\"Welke locatie of adres zoek je?\">\n" +
    "<input class=invisible placeholder=\"Welke locatie of adres zoek je?\"> </div> <div class=\"ll btn-group ll kaarttypes\"> <button class=\"btn active\" ng-click=\"changeBaseLayer('kaart')\">Kaart</button>\n" +
    "<button class=btn ng-click=\"changeBaseLayer('luchtfoto')\">Luchtfoto</button> </div> <div class=\"btn-group btn-group-vertical ll viewbtns\"> <button type=button class=btn><i class=\"fa fa-plus\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-minus\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-crosshairs\"></i></button> </div> <div class=\"ll localiseerbtn\"> <button type=button class=btn><i class=\"fa fa-male\"></i></button> </div> </leaflet> </div> </div> <style>.ll {\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        z-index: 260;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .interactiebtns {\r" +
    "\n" +
    "        left: 30px;\r" +
    "\n" +
    "        top: 100px;\r" +
    "\n" +
    "      \r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .searchbtns {\r" +
    "\n" +
    "        left: 30px;\r" +
    "\n" +
    "        top: 40px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .zoekbalken {\r" +
    "\n" +
    "        left: 120px;\r" +
    "\n" +
    "        top: 40px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #zoekbalk1 {\r" +
    "\n" +
    "        width: 300px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .localiseerbtn {\r" +
    "\n" +
    "        right: 10px;\r" +
    "\n" +
    "        bottom: 20px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .viewbtns {\r" +
    "\n" +
    "        right: 10px;\r" +
    "\n" +
    "        bottom: 80px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .wrapper {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        height: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    button.btn.active {\r" +
    "\n" +
    "        background-color: dodgerblue;\r" +
    "\n" +
    "        color: white;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .leafletmap {\r" +
    "\n" +
    "        top: 0;\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        left: 0;\r" +
    "\n" +
    "        right: 0;\r" +
    "\n" +
    "        bottom: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .leaflet-left .leaflet-control-scale {\r" +
    "\n" +
    "        margin-left: 175px;\r" +
    "\n" +
    "        margin-bottom: 20px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .kaarttypes {\r" +
    "\n" +
    "        left: 30px;\r" +
    "\n" +
    "        bottom:15px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .kaarttypes > .btn \r" +
    "\n" +
    "    {\r" +
    "\n" +
    "        font-size: 0.5rem;\r" +
    "\n" +
    "    }</style>"
  );

}]);
