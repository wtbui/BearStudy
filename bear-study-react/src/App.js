import logo from './logo.svg';
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moffit from './pages/moffit';
import Doe from './pages/doe';
import Glade from './pages/glade';

import Main from './main';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path="/pages/moffit" element={ <Moffit/> }/>
        <Route path="/pages/glade" element={ <Glade/> }/>
        <Route path="/pages/Doe" element={ <Doe/> }/>
      </Routes>
    </div>
  );
}

export default App;
