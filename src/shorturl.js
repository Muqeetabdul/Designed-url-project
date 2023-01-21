import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Shorturl = ({ inputUrl }) => {

    const [shortUrl , setshortUrl] = useState("");
    const [copied , setcopied] = useState(false);

    useEffect(() => {
        fetch(` https://api.shrtco.de/v2/shorten?url= ${inputUrl} `)
         .then(response => response.json())
         .then((data) => {
            setshortUrl(data.result.full_short_link);
         })
    } , [inputUrl])


  return (
    <div className='showurl'>
        <p>{shortUrl}</p>
        
        <CopyToClipboard 
            text={shortUrl}
            onCopy={() => setcopied(true)}
        >
            <button className={copied ? "copied" : ""}>
                {copied ? "Copied" : "Copy"}
            </button>
        </CopyToClipboard>


    </div>
  )
}

export default Shorturl;