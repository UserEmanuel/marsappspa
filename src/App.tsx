import React, {createContext} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import logo from './logo.svg';
import nasalogo from './r.png'
import './App.css';
import TopLevelComponent from "./TopLevelComponent";
import NasaData from "./NasaData";

type NewType = [number, (a: number) => void];
export const CounterContext = createContext<NewType>(undefined as unknown as NewType);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Router>
                    <ul>
                        <li><Link to="tree/complextree"> Comlex Tree </Link></li>
                        <li><Link to="tree/simple"> Simple Tree </Link></li>
                    </ul>
                    <Routes>
                        <Route path="tree/complextree"
                               element={
                                    <TopLevelComponent
                                    firstParagraph="This is the first paragraph"
                                    secondParagraph="This is the second paragraph"
                                    imageLink={nasalogo}
                                    />}
                        />
                        <Route path="tree/simple"
                               element={
                                   <NasaData
                                       firstParagraph="This is the first paragraph"
                                       secondParagraph="This is the second paragraph"
                                       imageLink={nasalogo}
                                   />}
                        />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
