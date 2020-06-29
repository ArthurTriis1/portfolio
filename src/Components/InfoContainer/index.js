import React from 'react';
import ReactMarkdown from 'react-markdown';
import './InfoContainer.css';
import ImageSpan from '../ImageSpan';


function InfoContainer({ title, text, subtitle, images}) {
    return (
        <div className="infoContainer">
            {
                title &&
                <h1 className="infoTitle">{title}</h1>
            }
            {
                subtitle &&
                <h1 className="infoTitle infoSubtitle">{subtitle}</h1>
            }
            {
                text &&
                <ReactMarkdown
                    className="infoText"
                    source={text}
                    escapeHtml={false}
                />
            }
            {
                images &&
                images.map((image, index) => (
                    <ImageSpan
                        key={index}
                        title={image.title}
                        subtitle={image.subtitle}
                        image={image.image}
                    />
                ))
            }
        </div>
    )
}

export default InfoContainer;