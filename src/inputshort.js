import React, { useState } from 'react';
import "./App.css";

const Inputshort = ({ setinputUrl }) => {
    const [Url , setUrl] = useState("");

    const handleClick = () => {
        setinputUrl(Url);
    }


  return (
    <div className='inputcontainer'>
        <h1>URL-<span>Shortner</span></h1>
        <div>
            <input 
                type="text" 
                placeholder='Please Enter URL...' 
                value={Url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleClick}>Shorten!</button>
        </div>
    </div>
  )
}

export default Inputshort;