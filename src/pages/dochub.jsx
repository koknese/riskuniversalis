import { React, useState } from "react";
import { Helmet } from 'react-helmet-async'

import "../index.css";
import Card from "../components/docCard.jsx"
import SearchBar from "../components/SearchBar.jsx"
import Data from "../components/docList.json"

import riskCorp from "../riskcorporate.png";

const Dochub = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActivities = Data.filter((card) => {
    const searchValue = searchTerm.toLowerCase();

    return (
      card.title.toLowerCase().includes(searchValue) ||
      card.category.toLowerCase().includes(searchValue)
    );
  });

    return (
    <div className="main">
      <Helmet>
        <title>RU Dochub</title>
        <meta name="description" content="The Risk Universalis Dochub: your go-to for bonuses and rules" />
        <meta property="og:title" content="RU Dochub" />
        <meta property="og:description" content="A collection of Risk Universalis related documents - Your go-to for bonuses and rules" />
        <meta property="og:url" content="https://riskuniversalis.org/dochub" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RU Dochub" />
        <meta name="twitter:description" content="A collection of Risk Universalis related documents - Your go-to for bonuses and rules" />
      </Helmet>
      <h1>Risk Universalis Dochub</h1>
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <div className="cardContainer">
        {filteredActivities.map((doc) => (
          <Card
            key={doc.title}
            title={doc.title}
            link={doc.url}
            category={doc.category}
          />
        ))}
      </div>
    </div>
    );
};

export default Dochub;
