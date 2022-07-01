import React, {useState} from "react";
import {CounterContext} from "./App";

import ButtonComponent2 from "./ButtonComponent";
import CounterComponent from "./CounterComponent";

export function TopLevelComponent(props: { firstParagraph: string; secondParagraph: string, imageLink: string }) {
    let localVar = localStorage.getItem('count');
    let finalVar = localVar == null ? 0 : parseInt(localVar);

    const [count, setCount] = useState(finalVar);

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
                <ButtonComponent2/>
                <CounterComponent/>
                </body>
            </div>
        </CounterContext.Provider>
    );
}

export default TopLevelComponent;