import React, { useRef, useEffect } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "./MapContainer.css";

// Set up web map and mapview outside the React object so that
// they don't get recreated on re-renders
const webmap = new WebMap({
  portalItem: {
    id: "aa1d3f80270146208328cf66d022e09c",
  },
});

const view = new MapView({
  map: webmap,
});

/**
 * Contains and manages the web map
 *
 * @param {Object} param0 React parameters passed to the object
 * @param {Function} param0.onMapLoad Function to call when the map is loaded
 * @param {Object} param0.selectedBookmark Currently selected bookmark (could be null)
 * @returns
 */
function MapContainer({ onMapLoad, selectedBookmark }) {
  const mapDiv = useRef(null);

  useEffect(() => {
    view.container = mapDiv.current;

    view.when(() => {
      onMapLoad(webmap.bookmarks);
    });
  }, [onMapLoad]);

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
