import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";

import { CalciteSelect, CalciteOption } from "@esri/calcite-components-react";

function BookmarkNav({ bookmarks, onSelection }) {
  const currBookmarks = bookmarks || [];

  return (
    <CalciteSelect onCalciteSelectChange={(event) => onSelection(event.target.value)}>
      {currBookmarks.map((b, i) => (
        <CalciteOption key={b.name} value={b}>
          {b.name}
        </CalciteOption>
      ))}
    </CalciteSelect>
  );
}

export default BookmarkNav;
