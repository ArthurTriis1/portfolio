import React from 'react';

import './TagsWrap.css';

function TagsWrap({ tags }) {
    return (
        <div className="wrapTags">
            {   
                tags &&
                tags.map((tag, index) => (
                    <div key={index} style={{backgroundColor: tag.color}} className="Tag">{tag.name}</div>
                ))
            }
        </div>
    );
}

export default TagsWrap;