import React from 'react';

 import './PostSpan.css';

function PostSpan({ image }) {

    const tags = [
        {
            name: "React",
            color: "#F3212E"
        },

        {
            name: "VUE",
            color: "#7AC141"
        },

        {
            name: "Bot",
            color: "#114E9F"
        },

    ]

    return (
        <article className="PostSpan" style={{backgroundImage: `url(${image})`}}>
            <div className="backgroundFilter"></div>
            <div className="wrapTags">
                {
                    tags.map((tag, index) => (
                        <div key={index} style={{backgroundColor: tag.color}} className="Tag">{tag.name}</div>
                    ))
                }
            </div>

            <div className="wrapTitles">
                <h3 className="postTitle">Preserv</h3>
                <h4 className="postSubtitle">Localize preservativos e serviços proximos a você</h4>
            </div>
        </article>
    )
}

export default PostSpan;