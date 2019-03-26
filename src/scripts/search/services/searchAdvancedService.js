'use strict';
(function () {
    var module = angular.module('tink.gis');
    var service = function ($rootScope, MapData, GISService, ResultsData, $q, UIService) {
        var _service = {};
        $rootScope.attribute = null;
        $rootScope.operations = [];
        $rootScope.query = "";
        $rootScope.selectedLayer = null;
        $rootScope.operators = ['=', '<>', '<', '>', '<=', '>=', 'LIKE']; //Misschien betere oplossing? Doorgeven?

        _service.newOrOperation = function () {
            $rootScope.$broadcast('orOperation');
        };

        _service.newAddOperation = function () {
            $rootScope.$broadcast('addOperation');
        };

        $rootScope.$on('addedOperation', function (event, data) {
            $rootScope.operations = data;
            $rootScope.$broadcast('queryOperationUpdated', $rootScope.operations);
        });

        $rootScope.$on('deleteOperation', function () {
            $rootScope.$emit('deleteOperation');
        });

        $rootScope.$on('alteredOperation', function () {
            $rootScope.$emit('alteredOperation');
        });

        _service.UpdateFields = function (layer) {
            $rootScope.$broadcast('updateFields', layer);
        };

        var checkOperator = function (value) {
            var returnValue = "";
            if (value.operator == 'LIKE') {
                returnValue += value.operator + " \'%" + value.value + "%\' ";
            } else {
                returnValue += value.operator + " \'" + value.value + "\' ";
            }
            return returnValue;
        };

        _service.BuildQuery = function (layer) {
            $rootScope.query = ""; //init
            $rootScope.query += "FROM (" + layer; //always remains the same

            angular.forEach($rootScope.operations, function (value, key) {
                if (value.addition == null) {
                    $rootScope.query += ") WHERE (" + value.attribute.name +  ") " + checkOperator(value);
                } else {
                    $rootScope.query += value.addition + " (" + value.attribute.name + ") " + checkOperator(value);
                }
            });

            $rootScope.$broadcast('queryBuild', $rootScope.query);
        };

        _service.ExecuteQuery = function (layerid, theme, operations) {
            var prom = $q.defer();
            var query = this.TranslateOperations(operations);
            
            theme.MapData.query()
                .layer(layerid)
                .where(query)
                .run(function(error, featureCollection, response) {
                    if (error) {
                        prom.reject(error);
                    } else {
                        prom.resolve(featureCollection, response);
                        ResultsData.RequestCompleted++;
                        MapData.AddFeatures(featureCollection, theme, layerid);
                        UIService.OpenLeftSide();
                    }
                });
            return prom.promise;
        }

        _service.TranslateOperations = function (operations) {
            var query = '';
            operations.forEach(operation => {
                query += operation.attribute.alias + ' ';
                query += _service.HandleOperator(operation);
            });
            console.log(query);
            return query;
        }

        _service.HandleOperator = function(operation) {
            switch (operation.operator) {
                case 'LIKE':
                    return operation.operator + ' \'%' + operation.value + '%\'';
                default:
                    return operation.operator + ' \'' + operation.value + '\'';
            }
        }

        _service.TranslateEditorQuery = function(rawQuery, originalOperations, selectedLayer) { //Adding Operations as parameter for testing
            var newQueryParts = [];
            newQueryParts.fieldnames = [];
            newQueryParts.operators = [];
            newQueryParts.values = [];
            // var queryParts = rawQuery.split(' ');
            var queryParts = rawQuery.split(/('.*?'|[^"\s]+)+(?=\s*|\s*$)/g); //Split parts of query by spaces except when it's between single quotes

            queryParts = queryParts.filter(function(str) {
                return /\S/.test(str);
            });
            console.log(queryParts);
            console.log(originalOperations);
            var operations = [];
            console.log($rootScope);
            for (let index = 1; index < queryParts.length; index++) {
                let isLayerOrField = false;
                let element = queryParts[index];
                if (element.contains('(') && element.contains(')')) {
                    element = element.substring(1).slice(0, -1); //Removes front and back brackets
                    isLayerOrField = true;
                }
                console.log(element);
                console.log(selectedLayer);
                if (isLayerOrField == false && this.IsOperator(element)) {
                    newQueryParts.operators.push(element);
                }
                else if (isLayerOrField == true && index == 1) {
                    newQueryParts.layerid = this.GetLayerIdIfValid(element, selectedLayer);
                    isLayerOrField = false;
                }
                else if (isLayerOrField == true && this.IsLayerField($rootScope.selectedLayer, element)) {
                    newQueryParts.fieldnames.push(element);
                    isLayerOrField = false;
                }
                else if (element != "FROM" && element != "WHERE") {
                    newQueryParts.values.push(element);
                } //EXPAND TO SUPPORT AND/OR
            }
            console.log(newQueryParts);
        }

        _service.GetLayerIdIfValid = function(layername, currentLayer) {
            var layerid = null;
            MapData.VisibleLayers.forEach(layer => {
                if (layer.name === layername) {
                    layerid = layer.id;
                    $rootScope.selectedLayer = layer;
                }
            });

            if (layerid != null) {
                return layerid;
            } else {
                $rootScope.selectedLayer = currentLayer;
                return currentLayer.id;
            }
        }

        _service.IsLayerField = function(currentLayer, fieldname) {
            console.log(currentLayer);
            console.log(fieldname);
            var isLayerField = false;
            currentLayer.fields.forEach(field => {
                if (field.name == fieldname) {
                    isLayerField = true;
                }
            });
            return isLayerField;
        }

        _service.IsOperator = function(element) {
            var isOperator = false;
            $rootScope.operators.forEach(operator => {
                if (operator == element) {
                    isOperator = true;
                }
            });
            return isOperator;
        }

        return _service;
    };
    module.factory("SearchAdvancedService", service);
    module.$inject = ['$rootScope', 'GISService', 'ResultsData', '$q', 'UIService'];
})();

