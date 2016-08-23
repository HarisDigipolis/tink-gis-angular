'use strict';
var app;
(function (app) {
    class ArcGIStheme extends app.Theme {
        constructor(rawdata, themeData) {
            super();
            let rawlayers = rawdata.layers;
            this.Naam = rawdata.documentInfo.Title;
            this.name = rawdata.documentInfo.Title;
            this.Description = rawdata.documentInfo.Subject;
            this.CleanUrl = themeData.cleanUrl;
            this.Url = themeData.url;
            this.Visible = true;
            this.Added = false;
            this.enabled = true;
            this.Type = ThemeType.ESRI;
            this.status = ThemeStatus.NEW;
            this.MapData = {};
            rawlayers.forEach((layerInfo) => {
                let layer = new app.arcgislayer(layerInfo, this);
                this.AllLayers.push(layer);
                if (layer.parentLayerId === -1) {
                    if (layer.subLayerIds === null) {
                        this.Layers.push(layer);
                    }
                    else {
                        this.Groups.push(layer);
                    }
                }
            });
            this.Groups.forEach((layerGroup) => {
                if (layerGroup.subLayerIds !== null) {
                    layerGroup.Layers = [];
                    this.AllLayers.forEach((layer) => {
                        if (layerGroup.id === layer.parentLayerId) {
                            layer.parent = layerGroup;
                            layerGroup.Layers.push(layer);
                        }
                    });
                }
            });
            this.RecalculateVisibleLayerIds();
        }
        UpdateMap() {
            this.RecalculateVisibleLayerIds();
            this.MapData.setLayers(this.VisibleLayerIds);
        }
        ;
    }
    app.ArcGIStheme = ArcGIStheme;
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjR0lTdGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcmNHSVN0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0ErQ1o7QUEvQ0QsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNYLDBCQUFpQyxTQUFLO1FBR2xDLFlBQVksT0FBWSxFQUFFLFNBQWM7WUFDcEMsT0FBTyxDQUFDO1lBQ1IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Z0JBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksZUFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVTtnQkFDM0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLO3dCQUN6QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzRCQUN4QyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzs0QkFDMUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNELFNBQVM7WUFDTCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakQsQ0FBQzs7SUFDTCxDQUFDO0lBN0NZLGVBQVcsY0E2Q3ZCLENBQUE7QUFDTCxDQUFDLEVBL0NTLEdBQUcsS0FBSCxHQUFHLFFBK0NaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtUaGVtZX0gZnJvbSAnLi90aGVtZSc7XHJcbi8vIGltcG9ydCB7TGF5ZXJ9IGZyb20gJy4vbGF5ZXInO1xyXG4ndXNlIHN0cmljdCc7XHJcbm5hbWVzcGFjZSBhcHAge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFyY0dJU3RoZW1lIGV4dGVuZHMgVGhlbWUge1xyXG4gICAgICAgIFZpc2libGVMYXllcklkczogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmF3ZGF0YTogYW55LCB0aGVtZURhdGE6IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICBsZXQgcmF3bGF5ZXJzID0gcmF3ZGF0YS5sYXllcnM7XHJcbiAgICAgICAgICAgIHRoaXMuTmFhbSA9IHJhd2RhdGEuZG9jdW1lbnRJbmZvLlRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSByYXdkYXRhLmRvY3VtZW50SW5mby5UaXRsZTtcclxuICAgICAgICAgICAgdGhpcy5EZXNjcmlwdGlvbiA9IHJhd2RhdGEuZG9jdW1lbnRJbmZvLlN1YmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xlYW5VcmwgPSB0aGVtZURhdGEuY2xlYW5Vcmw7XHJcbiAgICAgICAgICAgIHRoaXMuVXJsID0gdGhlbWVEYXRhLnVybDtcclxuICAgICAgICAgICAgdGhpcy5WaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5BZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlR5cGUgPSBUaGVtZVR5cGUuRVNSSTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBUaGVtZVN0YXR1cy5ORVc7XHJcbiAgICAgICAgICAgIHRoaXMuTWFwRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICByYXdsYXllcnMuZm9yRWFjaCgobGF5ZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBuZXcgYXJjZ2lzbGF5ZXIobGF5ZXJJbmZvLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWxsTGF5ZXJzLnB1c2gobGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLnBhcmVudExheWVySWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLnN1YkxheWVySWRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTGF5ZXJzLnB1c2gobGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR3JvdXBzLnB1c2gobGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuR3JvdXBzLmZvckVhY2goKGxheWVyR3JvdXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckdyb3VwLnN1YkxheWVySWRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJHcm91cC5MYXllcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFsbExheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJHcm91cC5pZCA9PT0gbGF5ZXIucGFyZW50TGF5ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gbGF5ZXJHcm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXAuTGF5ZXJzLnB1c2gobGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLlJlY2FsY3VsYXRlVmlzaWJsZUxheWVySWRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVwZGF0ZU1hcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5SZWNhbGN1bGF0ZVZpc2libGVMYXllcklkcygpO1xyXG4gICAgICAgICAgICB0aGlzLk1hcERhdGEuc2V0TGF5ZXJzKHRoaXMuVmlzaWJsZUxheWVySWRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19