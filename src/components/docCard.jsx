import { Button } from 'rsuite';

import { ExternalLink } from "lucide-react";
import "../index.css";
import 'rsuite/Button/styles/index.css';

export function Card({title, link, category}) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <a href={link}>
        <Button color="yellow" appearance="primary" startIcon={<ExternalLink />}>
          Open 
        </Button> 
      </a>
      <h2>{category}</h2>
    </div>
  );
}

export default Card;
