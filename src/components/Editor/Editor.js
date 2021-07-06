import React from "react";
import "./Editor.scss";

const Editor = ({ setInput }) => {
    return <textarea id="editor" onChange={e => setInput(e.target.value)}/>;
};

export default Editor;
