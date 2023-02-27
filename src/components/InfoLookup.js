import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-notice";
import { CalciteBlock, CalciteNotice } from "@esri/calcite-components-react";
import { useEffect, useState } from "react";

function InfoLookup({ currentBookmark }) {
  const [content, setContent] = useState({
    headerText: "Select a bookmark",
    bodyText: "to get more information",
    isLoading: false,
  });

  useEffect(() => {
    if (currentBookmark) {
      setContent({ ...content, isLoading: true });

      const parms = new URLSearchParams();
      parms.set("park", currentBookmark.name);

      fetch(`/park-lookup?${parms.toString()}`)
        .then((resp) => resp.json())
        .then((obj) => {
          console.log(obj);
          setContent({
            isLoading: false,
            headerText: currentBookmark.name,
            bodyText: obj.info,
          });
        })
        .catch((err) => {
          console.error(err);
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
