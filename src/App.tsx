import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
} from "react-router-dom";

import ButtonRow from "./components/buttonRow.jsx"

import Main from "./pages/main.jsx"
import Dochub from './pages/dochub.jsx';
import riskCorp from "./riskcorporate.png";

import "./index.css";
import 'rsuite/Button/styles/index.css';

export function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;
