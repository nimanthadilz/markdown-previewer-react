import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

function App() {
    const [input, setInput] = useState("");

    return (
        <div className="App">
            <Header />
            <Main>
                <Editor setInput={setInput} />
                <Preview input={input} />
            </Main>
        </div>
    );
}


export default App;
