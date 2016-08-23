'use strict';
var app;
(function (app) {
    class wmstheme extends app.Theme {
        constructor(data, url) {
            super();
            this.Version = data['version'];
            this.name = data.service.title;
            this.Naam = data.service.title;
            this.enabled = true;
            this.Visible = true;
            this.CleanUrl = url;
            this.Added = false;
            this.status = ThemeStatus.NEW;
            this.Description = data.service.abstract;
            this.Type = ThemeType.WMS;
            var layers = data.capability.layer.layer;
            var lays = [];
            if (layers) {
                if (layers.length == undefined) {
                    lays.push(layers);
                }
                else {
                    lays = layers;
                }
            }
            else {
                lays.push(data.capability.layer);
            }
            layers.forEach(layer => {
                let lay = new app.wmslayer(layer, this);
                this.Layers.push(lay);
                this.AllLayers.push(lay);
            });
            this.RecalculateVisibleLayerIds();
        }
        UpdateMap(map) {
            this.RecalculateVisibleLayerIds();
            map.removeLayer(this.MapData);
            map.addLayer(this.MapData);
        }
    }
    app.wmstheme = wmstheme;
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zdGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3bXN0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0E2Q1o7QUE3Q0QsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNYLHVCQUE4QixTQUFLO1FBSS9CLFlBQVksSUFBSSxFQUFFLEdBQUc7WUFDakIsT0FBTyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3JCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEMsQ0FBQztZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUV0QyxDQUFDO1FBQ0QsU0FBUyxDQUFDLEdBQVU7WUFDaEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUExQ1ksWUFBUSxXQTBDcEIsQ0FBQTtBQUVMLENBQUMsRUE3Q1MsR0FBRyxLQUFILEdBQUcsUUE2Q1oiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbm5hbWVzcGFjZSBhcHAge1xyXG4gICAgZXhwb3J0IGNsYXNzIHdtc3RoZW1lIGV4dGVuZHMgVGhlbWUge1xyXG4gICAgICAgIFZlcnNpb246IHN0cmluZztcclxuICAgICAgICBWaXNpYmxlTGF5ZXJJZHM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEsIHVybCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLlZlcnNpb24gPSBkYXRhWyd2ZXJzaW9uJ107XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGEuc2VydmljZS50aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5OYWFtID0gZGF0YS5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLlRpdGxlID0gcmV0dXJuanNvbi5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkNsZWFuVXJsID0gdXJsO1xyXG4gICAgICAgICAgICB0aGlzLkFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gVGhlbWVTdGF0dXMuTkVXO1xyXG4gICAgICAgICAgICB0aGlzLkRlc2NyaXB0aW9uID0gZGF0YS5zZXJ2aWNlLmFic3RyYWN0O1xyXG4gICAgICAgICAgICB0aGlzLlR5cGUgPSBUaGVtZVR5cGUuV01TO1xyXG4gICAgICAgICAgICB2YXIgbGF5ZXJzID0gZGF0YS5jYXBhYmlsaXR5LmxheWVyLmxheWVyO1xyXG4gICAgICAgICAgICB2YXIgbGF5cyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJzLmxlbmd0aCA9PSB1bmRlZmluZWQpIHsgLy8gYXJyYXksIGl0IGhhcyBhIGxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxheXMucHVzaChsYXllcnMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXlzID0gbGF5ZXJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGF5cy5wdXNoKGRhdGEuY2FwYWJpbGl0eS5sYXllcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ID0gbmV3IHdtc2xheWVyKGxheWVyLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTGF5ZXJzLnB1c2gobGF5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWxsTGF5ZXJzLnB1c2gobGF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVjYWxjdWxhdGVWaXNpYmxlTGF5ZXJJZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVwZGF0ZU1hcChtYXA6IEwuTWFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVjYWxjdWxhdGVWaXNpYmxlTGF5ZXJJZHMoKTtcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHRoaXMuTWFwRGF0YSk7XHJcbiAgICAgICAgICAgIG1hcC5hZGRMYXllcih0aGlzLk1hcERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19