'use strict';
(function (module) {
    try {
        module = angular.module('tink.gis.angular');
    } catch (e) {
        module = angular.module('tink.gis.angular', ['leaflet-directive']);
    }
    module.directive('tinkMap', function () {
        return {
            templateUrl: "templates/tinkmaptemplate.html",
            scope: { 
                layers: "="
              },
            controller: function ($scope) {
                 var ourlayers = $scope.layers;
             

                $scope.changeLayer = function (layername) {
                    $scope.layers = ourlayers[layername];
                };
                angular.extend($scope, {
                    defaults: {
                        zoomControl: false
                    },
                    controls: {
                        scale: {
                            imperial: false
                        }
                    }
                });
                if ($scope.center == undefined) {
                    angular.extend($scope, {
                        center: {
                            lat: 51.2192159,
                            lng: 4.4028818,
                            zoom: 12
                        }
                    });

                }
                if ($scope.layers == undefined || $scope.layers.baselayers == undefined) {
                    angular.extend($scope, {
                        layers: {
                            baselayers: {
                                kaart: ourlayers.kaart,
                                luchtfoto: ourlayers.luchtfoto
                            },
                            overlays: {
                                perceel: {
                                    name: "geoservice",
                                    type: "agsFeature",
                                    url: "http://app10.a.gis.local/arcgissql/rest/services/A_GeoService/operationallayers/MapServer/6",
                                    visible: true,
                                    layerOptions: {
                                        simplifyFactor: 0.5,
                                        precision: 5,
                                        minZoom: 17,
                                        maxZoom: 25 
                                    },
                                    group: "Test",
                                    superGroup: "SuperTest"
                                },

                            }
                            
                        }
                        
                    });
                }

            }
        }
    })
})
    ();


;angular.module('tink.gis.angular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/tinkmaptemplate.html',
    "<style></style> <div id=content> <div class=wrapper> <leaflet class=leafletmap center=center layers=layers controls defaults=defaults> <div class=\"btn-group ll searchbtns\"> <button type=button class=btn><i class=\"fa fa-map-marker\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-download\"></i></button> </div> <div class=\"btn-group btn-group-vertical ll interactiebtns\"> <button type=button class=\"btn active\"><i class=\"fa fa-info\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-mouse-pointer\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-download\"></i></button> </div> <div class=\"ll zoekbalken\"> <input id=zoekbalk1 placeholder=\"Welke locatie of adres zoek je?\">\n" +
    "<input class=invisible placeholder=\"Welke locatie of adres zoek je?\"> </div> <div class=\"ll btn-group ll kaarttypes\"> <button class=\"btn active\" ng-click=\"changeLayer('kaart')\">Kaart</button>\n" +
    "<button class=btn ng-click=\"changeLayer('luchtfoto')\">Luchtfoto</button> </div> <div class=\"btn-group btn-group-vertical ll viewbtns\"> <button type=button class=btn><i class=\"fa fa-plus\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-minus\"></i></button>\n" +
    "<button type=button class=btn><i class=\"fa fa-crosshairs\"></i></button> </div> <div class=\"ll localiseerbtn\"> <button type=button class=btn><i class=\"fa fa-male\"></i></button> </div> </leaflet> </div> </div>"
  );

}]);
