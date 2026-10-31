import { React, useState } from "react";

import "../index.css";
import Card from "../components/docCard.jsx"
import SearchBar from "../components/SearchBar.jsx"
import Data from "../components/docList.json"

import TextField from "@mui/material/TextField";

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
