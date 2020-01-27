import React, { useContext } from "react";
import { MarkdownContext } from "../contexts/MarkdownContext";

const MarkdownPreviewer = () => {
  const { mdData } = useContext(MarkdownContext);
  return (
    <div className="markdown-previewer">
    <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: mdData.parsedData
        }}
      ></div>
    </div>
  );
};

export default MarkdownPreviewer;
