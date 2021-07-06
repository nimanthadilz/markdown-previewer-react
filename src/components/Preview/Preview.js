import React from "react";
import "./Preview.scss";
import marked from "marked";

const getHTML = (input) => {
    const html = marked(input, {
        gfm: true,
        breaks: true,
    });
    return { __html: html };
};

const Preview = ({ input }) => {
    return <div id="preview" dangerouslySetInnerHTML={getHTML(input)}></div>;
};

export default Preview;
