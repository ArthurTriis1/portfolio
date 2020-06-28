import React from 'react';
import ReactMarkdown from 'react-markdown';
import './InfoContainer.css';

function InfoContainer({ title, text}) {
    return (
        <div className="infoContainer">
            <h1 className="infoTitle">{title}</h1>
            <ReactMarkdown
                className="infoText"
                source={text}
                escapeHtml={false}
            />
        </div>
    )
}

export default InfoContainer;