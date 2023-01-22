import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';
import json from 'react';
import './App.css';

const History = () => {

    const [history , sethistory] = useState([]);

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem("newshortUrl"));

        console.log(data);
    }, [] )
    
    // const [copied , setcopied] = useState(false);

    


  return (
    <div className='showurl'>

        {/* Table to show data */}
        <Table striped bordered hover className="tabledata">
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
                {history.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.Url}</td>
                        <td>{item.shortUrl}</td>
                        <td>{item.date}</td>
                        <td>
                            {/* <button onClick={() => handleCopy(index)}>Copy</button> */}
                        </td>
                    </tr>
                 ))}

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
        </Table>

        {/* <p>{shortUrl}</p>
        
        <CopyToClipboard 
            text={shortUrl}
            onCopy={() => setcopied(true)}
        >
            <button className={copied ? "copied" : ""}>
                {copied ? "Copied" : "Copy"}
            </button>
        </CopyToClipboard> */}


    </div>
  )
}

export default History;