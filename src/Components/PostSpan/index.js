import React from 'react';

import './PostSpan.css';
import TagsWrap from '../TagsWrap';
import { useHistory } from 'react-router-dom';

function PostSpan({ image, tags, title, description, id }) {

    const history = useHistory();

    return (
        <article 
            className="PostSpan" 
            style={{backgroundImage: `url(${image})`}}
            onClick={()=> history.push(`project/${id}`)}
        >
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