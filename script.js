require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/LayerList",
  "esri/widgets/Legend"
], function(WebMap, MapView, LayerList, Legend) {

  let webmap = new WebMap({
    portalItem: {
      id: "4ce2b6f5ae8d49ebac367ba6062f9526"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  const mapSelect = document.getElementById("mapSelect");

mapSelect.addEventListener("change", function() {

  const selectedMap = this.value;

  const newMap = new WebMap({
    portalItem: {
      id: selectedMap
    }
  });

  view.map = newMap;
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

document.getElementById("btnEnvironment").addEventListener("click", function() {
  const environmentMap = "4ce2b6f5ae8d49ebac367ba6062f9526";

  view.map = new WebMap({
    portalItem: {
      id: environmentMap
    }
  });

  mapSelect.value = environmentMap;
});

document.getElementById("btnZoning").addEventListener("click", function() {
  const zoningMap = "e1634a8d574f4d129b838fad0b3f8302";

  view.map = new WebMap({
    portalItem: {
      id: zoningMap
    }
  });

  mapSelect.value = zoningMap;
});

document.getElementById("btnDemographics").addEventListener("click", function() {
  alert("Demographics map has not been added yet.");
});

});