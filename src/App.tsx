import React from 'react';
import "./sass/_main.scss"
import Main from "./pages/Main/Main";

const App = () => {
    return (
        <div className={"wrapper"}>
            <div className={"container"}>
                <Main/>
            </div>
        </div>
    );
};

export default App;