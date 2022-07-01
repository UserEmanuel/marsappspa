import React, {useContext} from "react";
import {CounterContext} from "./App";

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

export default ButtonComponent;