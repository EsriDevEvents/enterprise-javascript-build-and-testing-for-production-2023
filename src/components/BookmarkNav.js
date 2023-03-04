import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";

import { CalciteSelect, CalciteOption } from "@esri/calcite-components-react";

/**
 * Drop-down menu that displays and selects bookmarks
 *
 * @param {Object} param0 React parameters
 * @param {Array<Object>} param0.bookmarks List of bookmarks to select
 * @param {Function} param0.onSelection Callback for when a bookmark is selected
 * @returns
 */
function BookmarkNav({ bookmarks, onSelection }) {
  const currBookmarks = bookmarks || [];

  return (
    <CalciteSelect
      onCalciteSelectChange={(event) => onSelection(event.target.value)}
    >
      {currBookmarks.map((b, i) => (
        <CalciteOption key={b.name} value={b}>
          {b.name}
        </CalciteOption>
      ))}
    </CalciteSelect>
  );
}

export default BookmarkNav;
