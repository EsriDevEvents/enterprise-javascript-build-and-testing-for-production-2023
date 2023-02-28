import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-notice";
import { CalciteBlock, CalciteNotice } from "@esri/calcite-components-react";
import { useEffect, useState } from "react";
import { parkLookup } from "../api/parkLookup";

function InfoLookup({ currentBookmark }) {
  const [content, setContent] = useState({
    headerText: "Select a bookmark",
    bodyText: "to get more information",
    isLoading: false,
  });

  useEffect(() => {
    if (currentBookmark) {
      // We have to use a "functional" setContent to avoid render loop
      setContent((theContent) => {
        return { ...theContent, isLoading: true };
      });

      parkLookup(currentBookmark.name)
        .then((parkInfo) => {
          setContent({
            isLoading: false,
            headerText: currentBookmark.name,
            bodyText: parkInfo,
          });
        })
        .catch((err) => {
          setContent({
            isLoading: false,
            headerText: "Exception getting info",
            bodyText: "Check console for details",
          });
        });
    }
  }, [currentBookmark]);

  return (
    <CalciteBlock open heading={content.headerText}>
      <CalciteNotice open={!content.isLoading}>
        <div slot="message">{content.bodyText}</div>
      </CalciteNotice>
    </CalciteBlock>
  );
}

export default InfoLookup;