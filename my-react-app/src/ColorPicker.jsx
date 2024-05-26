import React, {useState} from "react";

const ColorPicker = () =>{

    const [color, setColor] = useState("#000000");

    const handleColor = (e) => setColor(c => e.target.value);


    return(
        <>
            <div className="container">
                <h1 className="title">Color picker</h1>
                <div className="color-container" style={{backgroundColor: color, boxShadow: `0 0 20px ${color}`}}>
                    <p className="color-text">{color}</p>
                </div>
                <label htmlFor="color-input">Pick a color:</label>
                <input type="color" id="color-input" onChange={handleColor} />
            </div>
        </>
    );
}

export default ColorPicker