import React from "react";
import "./Editor.scss";

const Editor = ({ input, setInput }) => {
    return <textarea id="editor" onChange={e => setInput(e.target.value)} value={input} />;
};

export default Editor;
