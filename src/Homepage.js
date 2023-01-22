import React, { useState } from 'react';
import "./App.css";
import shortid from 'shortid';

const Homepage = () => {

    const [Url, setUrl] = useState("");
    const [date, setdate] = useState("");
    const [shortUrl, setshortUrl] = useState([]);
    const [arr, setArr] = useState([]);

    const handlesubmit = (e) => {
        e.preventDefault()
        const newShortURL = shortid.generate();
        setshortUrl(newShortURL);

        const urlData = {
            shortUrl, Url, date
        }

        setArr((current) => [...current, urlData]);

        localStorage.setItem("newShortURL", JSON.stringify(arr));
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