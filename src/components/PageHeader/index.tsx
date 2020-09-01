import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">Conversor de Texto</Link>
        <Link to="/binary-translator">Tradutor Binário</Link>
      </div>
      <div className="header-content">
        <h1>{props.title}</h1>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
