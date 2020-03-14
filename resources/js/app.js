import React from "react";
import ReactDOM from "react-dom";

import TaskProvider from "./context/Task/TaskProvider";
import Index from "./components/Index";

function App() {
    return (
        <TaskProvider>
            <Index />
        </TaskProvider>
    );
}

export default App;

if (document.getElementById("App")) {
    ReactDOM.render(<App />, document.getElementById("App"));
}
