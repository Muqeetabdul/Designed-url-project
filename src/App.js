import './App.css';
import NavBar from './navbar';
import Homepage from './Homepage';
import HistoryComp from './HistoryComp'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="appcontainer">
      <NavBar />

      <Routes>
        <Route exact="true" path="/" element={<Homepage />} />
        <Route path="/History" element={<HistoryComp />} />
      </Routes>

    </div>
  );
}

export default App;
