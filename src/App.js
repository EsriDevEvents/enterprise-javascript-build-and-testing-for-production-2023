import React, { useState } from "react";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
} from "@esri/calcite-components-react";

import MapContainer from "./components/MapContainer";
import BookmarkNav from "./components/BookmarkNav";
import InfoLookup from "./components/InfoLookup";

setAssetPath(window.location.href);

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  return (
    <CalciteShell>
      <CalciteShellPanel slot="panel-start">
        <CalcitePanel heading="Redlands Bookmarks">
          <BookmarkNav
            bookmarks={bookmarks}
            onSelection={setSelectedBookmark}
          />
          <InfoLookup currentBookmark={selectedBookmark} />
        </CalcitePanel>
      </CalciteShellPanel>
      <MapContainer
        onMapLoad={setBookmarks}
        selectedBookmark={selectedBookmark}
      />
    </CalciteShell>
  );
}

export default App;
