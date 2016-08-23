'use strict';
var app;
(function (app) {
    class Theme {
        constructor() {
            this.VisibleLayerIds = [];
            this.Layers = [];
            this.VisibleLayers = [];
            this.AllLayers = [];
            this.Groups = [];
            this.UpdateDisplayed = (currentScale) => {
                this.AllLayers.forEach(layer => {
                    layer.UpdateDisplayed(currentScale);
                });
            };
            this.RecalculateVisibleLayerIds = () => {
                this.VisibleLayerIds.length = 0;
                this.VisibleLayers.forEach(visLayer => {
                    this.VisibleLayerIds.push(visLayer.id);
                });
                if (this.VisibleLayerIds.length === 0) {
                    this.VisibleLayerIds.push(-1);
                }
            };
        }
    }
    app.Theme = Theme;
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0F5Q1o7QUF6Q0QsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNYO1FBQUE7WUFjSSxvQkFBZSxHQUFlLEVBQUUsQ0FBQztZQUNqQyxXQUFNLEdBQWlCLEVBQUUsQ0FBQztZQUMxQixrQkFBYSxHQUFpQixFQUFFLENBQUM7WUFDakMsY0FBUyxHQUFpQixFQUFFLENBQUM7WUFDN0IsV0FBTSxHQUFpQixFQUFFLENBQUM7WUFJMUIsb0JBQWUsR0FBRyxDQUFDLFlBQVk7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUs7b0JBQ3hCLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBO1lBSUQsK0JBQTBCLEdBQUc7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUTtvQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQztJQUFELENBQUM7SUF2Q3FCLFNBQUssUUF1QzFCLENBQUE7QUFDTCxDQUFDLEVBekNTLEdBQUcsS0FBSCxHQUFHLFFBeUNaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtMYXllcn0gZnJvbSAnLi9sYXllcic7XHJcbid1c2Ugc3RyaWN0JztcclxubmFtZXNwYWNlIGFwcCB7XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgVGhlbWUge1xyXG4gICAgICAgIE5hYW06IHN0cmluZztcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICBDbGVhblVybDogc3RyaW5nO1xyXG4gICAgICAgIFVybDogc3RyaW5nO1xyXG5cclxuICAgICAgICBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgICAgIEFkZGVkOiBib29sZWFuO1xyXG4gICAgICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIFR5cGU6IHN0cmluZztcclxuICAgICAgICBzdGF0dXM6IG51bWJlcjtcclxuXHJcbiAgICAgICAgVmlzaWJsZUxheWVySWRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgTGF5ZXJzOiBBcnJheTxMYXllcj4gPSBbXTtcclxuICAgICAgICBWaXNpYmxlTGF5ZXJzOiBBcnJheTxMYXllcj4gPSBbXTtcclxuICAgICAgICBBbGxMYXllcnM6IEFycmF5PExheWVyPiA9IFtdO1xyXG4gICAgICAgIEdyb3VwczogQXJyYXk8TGF5ZXI+ID0gW107XHJcblxyXG4gICAgICAgIE1hcERhdGE6IGFueTtcclxuXHJcbiAgICAgICAgVXBkYXRlRGlzcGxheWVkID0gKGN1cnJlbnRTY2FsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLlVwZGF0ZURpc3BsYXllZChjdXJyZW50U2NhbGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWJzdHJhY3QgVXBkYXRlTWFwKG1hcG9iamVjdD86IEwuTWFwKSA6IHZvaWQ7XHJcbiAgICAgICAgLy8gYWJzdHJhY3QgZnVuY3QgVXBkYXRlTWFwOiB2b2lkO1xyXG4gICAgXHJcbiAgICAgICAgUmVjYWxjdWxhdGVWaXNpYmxlTGF5ZXJJZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlzaWJsZUxheWVySWRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuVmlzaWJsZUxheWVycy5mb3JFYWNoKHZpc0xheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlzaWJsZUxheWVySWRzLnB1c2godmlzTGF5ZXIuaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuVmlzaWJsZUxheWVySWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaXNpYmxlTGF5ZXJJZHMucHVzaCgtMSk7IC8vYWxzIHdlIG5pZXQgZG9lbiBkYW4gem9la3QgaGlqIG9wIGFsbGUgbGFnZW4hXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19