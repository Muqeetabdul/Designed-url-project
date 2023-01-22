import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import './App.css';

const HistoryComp = () => {

    const [localData, setLocalData] = useState([]);
    const [copied , setcopied] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('newShortURL'));
        setLocalData(items);
    }, []);

    return (
        <div className='showurl'>

            {/* Table to show data */}
            <Table striped bordered  className="tabledata">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Long-URL</th>
                        <th>Short-URL</th>
                        <th>Expiry Date</th>
                        <th>Copy</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {/* map fucntion to show data in required fileds */}
                    {localData.map((item, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.Url}</td>
                            <td>{item.shortUrl}</td>
                            <td>{item.date}</td>
                            <td>{
                                    <CopyToClipboard 
                                        text={item.shortUrl}
                                        onCopy={() => setcopied(true)}
                                    >   
                                     <button className={copied ? "copied" : ""}>copy</button>
                                    </CopyToClipboard>
                                }
                            </td>
                            <td> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    )
}

export default HistoryComp;