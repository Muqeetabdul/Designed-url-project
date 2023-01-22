import React, { useEffect, useState } from 'react';
import json from 'react';
import "./App.css";
import shortid from 'shortid';

const Homepage = () => {

    const [Url , setUrl] = useState("");
    const [date , setdate] = useState("");
    const [shortUrl , setshortUrl] = useState("");


    
    const handlesubmit = () => {
        const newShortURL = shortid.generate();
        setshortUrl(newShortURL);
        console.log(Url, shortUrl, date);
        localStorage.setItem(newShortURL, JSON.stringify({Url: Url, shortUrl: shortUrl, date: date})  );
    }

 
  return (
    <div className='inputcontainer'>
        <h1>URL-<span>Shortner</span></h1>
        <div>
            <form onSubmit={handlesubmit}>
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
                <button type='submit' >Shorten!</button>
            </form>
        </div>
    </div>
  )
}

export default Homepage;