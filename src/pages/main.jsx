import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import ButtonRow from "../components/buttonRow.jsx"

import Dochub from "./dochub.jsx"
import HomePage from "./index.jsx"
import riskCorp from "../riskcorporate.png";

import "../index.css";
import 'rsuite/Button/styles/index.css';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dochub' element={<Dochub />} />
      </Routes>
    </Router>
  );
}

export default Main;
