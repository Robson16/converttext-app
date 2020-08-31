import React from 'react';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">

            </div>
            <div className="header-content">
                <h1>{props.title}</h1>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;