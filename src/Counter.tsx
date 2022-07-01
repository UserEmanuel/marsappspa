import React, {useState} from "react";

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

export default Counter;