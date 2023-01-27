import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert';
import shortid from "shortid";

const Homepage = () => {
  const [Url, setUrl] = useState([]);
  const [date, setdate] = useState("");
  const [arr, setArr] = useState([]);
  const [shorten, setshorten] = useState(true);
  const [show, setShow] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

    const regExp = RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');

    if (!Url.match(regExp)) {
      setShow(true);
    }
    else{
    
      const shortId = shortid.generate();
      const newshortUrl = `${window.location.href}${shortId}`;

      const urlData = {
        id: shortId,
        Url,
        newshortUrl,
        date,
      };

      localStorage.setItem("newShortURL", JSON.stringify([...arr, urlData]));
      setArr([...arr, urlData]);
      setShow(false);
    }
  };

  const handleURLinput = (e) => {

    if(e.target.value.length > 0){
      setUrl(e.target.value);
      setshorten(false);
    }
    else{
      setshorten(true);
    }
  }

  return (
    <div className="inputcontainer">
    
      
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          You have entered an invalid URL
        </p>
      </Alert>

      <h1>
        URL-<span>Shortner</span>
      </h1>
      <div>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Please Enter URL..."
            defaultValue={Url}
            onChange={(e) => handleURLinput(e)}
          />

          <input
            className="inputdate"
            type="date"
            onChange={(e) => setdate(e.target.value)}
          />
          <button type="submit" 
            onClick={() => setShow(true)}
            className="btnshorten"
            disabled={shorten}>
              Shorten!
            </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
