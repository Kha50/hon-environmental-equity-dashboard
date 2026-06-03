require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/LayerList",
  "esri/widgets/Legend"
], function(WebMap, MapView, LayerList, Legend) {

  const webmap = new WebMap({
    portalItem: {
      id: "ed978f6bbf8c461da6fd7e87bf14d172"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  const layerList = new LayerList({
    view: view
  });

  const legend = new Legend({
    view: view
  });

  view.ui.add(layerList, "top-right");
  view.ui.add(legend, "bottom-right");

  document.getElementById("btnReset").addEventListener("click", function() {
    view.goTo({
      center: [-122.3321, 47.6062],
      zoom: 11
    });
  });

});