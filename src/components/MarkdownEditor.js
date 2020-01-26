import React, { useContext } from "react";
import { MarkdownContext } from "../contexts/MarkdownContext";

const MarkdownEditor = () => {
  const { mdData, dispatch } = useContext(MarkdownContext);
  const textareaChangeHandler = e => {
    const text = e.target.value;
    dispatch({
      type: "UPDATE_DATA",
      data: text
    });
  };
  return (
    <div className="markdown-editor">
      <textarea
        id="editor"
        value={mdData.rawData}
        onChange={textareaChangeHandler}
      ></textarea>
    </div>
  );
};

export default MarkdownEditor;
