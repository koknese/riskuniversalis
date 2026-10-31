import ButtonRow from "../components/buttonRow.jsx"

import riskCorp from "../riskcorporate.png";

import "../index.css";
import 'rsuite/Button/styles/index.css';

const HomePage = () => {
  return (
    <div>
      <img src={riskCorp} alt="Risk Corporate" className="logo" />
      <ButtonRow />
    </div>
  );
}

export default HomePage;
