import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'rsuite';
import { ExternalLink } from "lucide-react";

import "../index.css";

const ButtonRow = () => {
    return (
        <div className="buttonRow">
          <NavLink to="/dochub">
          <Button color="yellow" appearance="primary" startIcon={<ExternalLink />}>
            Risk Dochub
          </Button> 
          </NavLink>
        </div>
    );
};

export default ButtonRow;
