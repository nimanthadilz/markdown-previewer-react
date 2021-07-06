import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

function App() {
    return (
        <div className="App">
            <Header />
            <Main>
                <Editor />
                <Preview />
            </Main>
        </div>
    );
}

export default App;
