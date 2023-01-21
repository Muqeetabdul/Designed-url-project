import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navba, Table } from 'react-bootstrap';

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

        {/* Table to show data */}
        {/* <Table striped bordered hover className='tabledata'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Long-URL</th>
                    <th>Short-URL</th>
                    <th>Expiry Date</th>
                    <th>Copy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{inputUrl}</td>
                    <td>{shortUrl}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table> */}

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