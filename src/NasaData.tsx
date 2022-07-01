import React from "react";

import Counter from "./Counter";

export function NasaData(props: { firstParagraph: string; secondParagraph: string, imageLink: string }) {
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

export default NasaData;