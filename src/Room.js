import React , { useState } from 'react';
import './Room.css';
function Room() {
    let [light , setLight] = useState(false);
    let [tem , setTem] = useState(32); 
    return (
        <div className={`room ${light? "light": "dark"}`}>
            <h3>The Room is {light? "lit" : "dark"}</h3>
            <button onClick={ () => setLight(true) }>Turn Light ON</button>
            <button onClick={ () => setLight(false) }>Turn Light OFF</button>

            <h3>The Room Temperature is {tem}</h3>
            <button onClick={ () => setTem(++tem,) }>Increase Temperature (+)</button>
            <button onClick={ () => setTem(--tem) }>Decrease Temperature (-)</button>
            
        </div>
  );
}

export default Room;
