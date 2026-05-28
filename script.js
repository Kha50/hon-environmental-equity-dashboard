require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/LayerList",
  "esri/widgets/Legend"
], function(WebMap, MapView, LayerList, Legend) {

  const webmap = new WebMap({
    portalItem: {
      id: "306f6ce39c6a46f880cba103bec47daf"
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

  document.getElementById("btnZoning").addEventListener("click", function() {
    alert("Zoning layer focus will be added here.");
  });

  document.getElementById("btnEnvironment").addEventListener("click", function() {
    alert("Environmental burden layer focus will be added here.");
  });

  document.getElementById("btnDemographics").addEventListener("click", function() {
    alert("Demographics layer focus will be added here.");
  });

});