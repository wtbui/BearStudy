import logo from './logo.svg';
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moffit from './pages/moffit';
import Main from './main';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Main/> }/>
          <Route path="/pages/moffit" element={ <Moffit/> }/>
        </Routes>
      </Router>

      {/* <Link to="./pages/moffit">Link to Moffit</Link> */}
    </div>
  );
}

export default App;
