import React from "react";
import MarkdownContextProvider from "./contexts/MarkdownContext";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

export default () => (
  <div className="App">
    <MarkdownContextProvider>
      <MarkdownEditor />
      <MarkdownPreviewer/>
    </MarkdownContextProvider>
  </div>
);
