import ButtonRow from "../components/buttonRow.jsx"
import { Helmet } from 'react-helmet-async'

import riskCorp from "../riskcorporate.png";

import "../index.css";
import 'rsuite/Button/styles/index.css';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Risk Universalis homepage</title>
        <meta name="description" content="Risk Universalis" />
        <meta property="og:image" content={riskCorp} />
      </Helmet>
      <img src={riskCorp} alt="Risk Corporate" className="logo" />
      <ButtonRow />
    </div>
  );
}

export default HomePage;
