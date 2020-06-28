import React from 'react';

import './PostSpan.css';
import TagsWrap from '../TagsWrap';

function PostSpan({ image, tags, title, description }) {

    

    return (
        <article className="PostSpan" style={{backgroundImage: `url(${image})`}}>
            <div className="backgroundFilter"></div>
            
            {tags && <TagsWrap tags={tags} />}
            <div className="wrapTitles">
                <h3 className="postTitle">{title}</h3>
            <h4 className="postSubtitle">{description}</h4>
            </div>
        </article>
    )
}

export default PostSpan;