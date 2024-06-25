import React, { useState } from 'react'

const Colorpicker = () => {
 
const [color, setColor] = useState("#FFFFFF");


function handleColorChange(event) {
    setColor(event.target.value);

}

return (
    <div className="color-picker-container">
     <h1>Colour Picker</h1>
     <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected colour: {color}</p>
     </div>
     <label>Select a colour: </label>
     <input type="color" value={color} onChange={handleColorChange}/>
    </div>
);
}
export default Colorpicker
