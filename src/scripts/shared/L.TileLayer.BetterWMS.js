'use strict'
L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({

    // onAdd: function(map) {
    //     // Triggered when the layer is added to a map.
    //     //   Register a click listener, then do all the upstream WMS things
    //     L.TileLayer.WMS.prototype.onAdd.call(this, map);
    //     map.on('click', this.getFeatureInfo, this);
    // },

    // onRemove: function(map) {
    //     // Triggered when the layer is removed from a map.
    //     //   Unregister a click listener, then do all the upstream WMS things
    //     L.TileLayer.WMS.prototype.onRemove.call(this, map);
    //     map.off('click', this.getFeatureInfo, this);
    // },

    getFeatureInfo: function (latlng, layers,requestype) {
        // Make an AJAX request to the server and hope for the best
        var GisHelperService = angular.element(document.body).injector().get('GisHelperService');
        var url = this.getFeatureInfoUrl(latlng, layers,requestype);
        url = GisHelperService.CreateProxyUrl(url);

        var prom = $.ajax({
            url: url,
            transformResponse: function (data) {
                if (data) {
                    // data = GisHelperService.UnwrapProxiedData(data);
                }
                return data;
            },
            success: function (data, status, xhr) {
                // console.log(returnjson);
            },
            error: function (xhr, status, error) {
                // showResults(error);
            }
        });
        return prom;
    },

    getFeatureInfoUrl: function (latlng, layers, requestype) {
        // Construct a GetFeatureInfo request URL given a point
        var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
            size = this._map.getSize(),

            params = {
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                styles: this.wmsParams.styles,
                transparent: this.wmsParams.transparent,
                version: this.wmsParams.version,
                format: this.wmsParams.format,
                bbox: this._map.getBounds().toBBoxString(),
                height: size.y,
                width: size.x,
                layers: layers,
                query_layers: layers,
                buffer: 100,
                info_format: requestype
            };

        params[params.version === '1.3.0' ? 'i' : 'x'] = Math.floor(point.x);
        params[params.version === '1.3.0' ? 'j' : 'y'] = Math.floor(point.y);

        return this._url + L.Util.getParamString(params, this._url, true);
    },

    // showGetFeatureInfo: function(err, latlng, content) {
    //     if (err) { console.log(err); return; } // do nothing if there's an error

    //     // Otherwise show the content in a popup, or something.
    //     L.popup({ maxWidth: 800 })
    //         .setLatLng(latlng)
    //         .setContent(content)
    //         .openOn(this._map);
    // }
});

L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);
};