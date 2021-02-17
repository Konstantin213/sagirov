import './App.css';
import {Route} from "react-router-dom";
import React from "react";
import PrimaryPage from "./components/PrimaryPage/PrimaryPage";

const App = () => {
    return (
        <div>
        <Route path="/" render={() => <PrimaryPage/>}/>
        </div>
    )
}
export default App;