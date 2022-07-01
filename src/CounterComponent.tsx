import React, {useContext} from "react";
import {CounterContext} from "./App";

function CounterComponent() {
    const [count,] = useContext(CounterContext);

    return (
        <div className="CounterComponent">
            <p>You clicked {count} times</p>
        </div>
    );
}

export default CounterComponent;