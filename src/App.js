import React from "react";
import MarkdownContextProvider from "./contexts/MarkdownContext";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default () => (
  <div className="App">
    <Navbar />
    <MarkdownContextProvider>
      <MarkdownEditor />
      <MarkdownPreviewer />
    </MarkdownContextProvider>
    <Footer />
  </div>
);
