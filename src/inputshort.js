import React, { useState } from 'react';
import "./App.css";

const Inputshort = ({ setinputUrl }) => {
    const [Url , setUrl] = useState("");
    const [date , setdate] = useState("");

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

            <input 
                // style={{width: 145, marginLeft: 10 , marginRight: 10}}
                className="inputdate"
                type="date"
                onChange={(e) => setdate(e.target.value)} 
            />
            <button onClick={handleClick}>Shorten!</button>
        </div>
    </div>
  )
}

export default Inputshort;