import React, { useRef, useEffect, useMemo } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "./MapContainer.css";

const webmap = new WebMap({
  portalItem: {
    id: "aa1d3f80270146208328cf66d022e09c",
  },
});

const view = new MapView({
  map: webmap,
});

function MapContainer({ onMapLoad, selectedBookmark }) {
  const mapDiv = useRef(null);

  useEffect(() => {
    view.container = mapDiv.current;

    view.when(() => {
      onMapLoad(webmap.bookmarks);
    });
  }, []);

  useEffect(() => {
    view.when(() => {
      if (selectedBookmark) {
        view.goTo(selectedBookmark.viewpoint);
      }
    });
  }, [selectedBookmark]);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default MapContainer;
