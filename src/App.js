import logo from './logo.svg';
import './App.css';
import Inputshort from './inputshort';
import Shorturl from './shorturl';
import { useState } from 'react';
import NavBar from './navbar';
import History from './history';

function App() {
  const [inputUrl , setinputUrl] = useState("");
  return (
    <div className="appcontainer">
      <NavBar />
      <Inputshort setinputUrl={setinputUrl} />
      <Shorturl inputUrl={inputUrl} />
    </div>
  );
}

export default App;
