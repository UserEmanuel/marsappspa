import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import { useState, useContext, createContext } from "react";
import logo from './logo.svg';
import nasalogo from './r.png'
import './App.css';

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
                        <li><Link to="/complextree"> Comlex Tree </Link></li>
                        <li><Link to="/simple"> Simple Tree </Link></li>
                    </ul>
                    <Routes>
                        <Route path="/complextree"
                               element={
                                    <TopLevelComponent
                                    firstParagraph="This is the first paragraph"
                                    secondParagraph="This is the second paragraph"
                                    imageLink={nasalogo}
                                    />}
                        />
                        <Route path="/simple"
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

function TopLevelComponent(props: {firstParagraph: string; secondParagraph: string, imageLink: string}) {
    const [count, setCount] = useState(parseInt(localStorage.getItem('count') as string));

    const handleClick = (num: number) => {
        localStorage.setItem('count', num.toString());
        setCount(num);
    }

    return (
        <CounterContext.Provider value={[count, handleClick]}>
            <div className="TopLevelComponent">
                <title>NASA is cool</title>
                <body>
                <p>{props.firstParagraph}</p>
                <p>{props.secondParagraph}</p>
                <img src={props.imageLink} alt="nasa" width={100}/>
                <ButtonComponent/>
                <CounterComponent/>
                </body>
            </div>
        </CounterContext.Provider>
    );
}

function ButtonComponent() {
    const [count, handleClick] = useContext(CounterContext);

    return (
        <div className="ButtonComponent">
            <button onClick={() => handleClick(count + 1)}>
                Click here
            </button>
        </div>
    );
}

function CounterComponent() {
    const [count, ] = useContext(CounterContext);

    return (
        <div className="CounterComponent">
            <p>You clicked {count} times</p>
        </div>
    );
}

function NasaData(props: {firstParagraph: string; secondParagraph: string, imageLink: string}) {
    return (
        <div className="NasaData">
            <title>NASA is cool</title>
            <body>
            <p>{props.firstParagraph}</p>
            <p>{props.secondParagraph}</p>
            <img src={props.imageLink} alt="nasa" width={100}/>
            <Counter/>
            </body>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(parseInt(localStorage.getItem('count') as string));

    const handleClick = (num: number) => {
        localStorage.setItem('count', num.toString());
        setCount(num);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => handleClick(count + 1)}>
                Click here
            </button>
        </div>
    );
}

export default App;
