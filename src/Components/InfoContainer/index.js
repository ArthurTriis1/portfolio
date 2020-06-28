import React from 'react';
import ReactMarkdown from 'react-markdown';
import './InfoContainer.css';
import ImageSpan from '../ImageSpan';
import celulari from '../../assets/temp/hackathon.png'

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
                        image={celulari}
                    />
                ))
            }
        </div>
    )
}

export default InfoContainer;