import React from 'react';
import './Home.css';
import PostSpan from '../../Components/PostSpan';
import image from '../../assets/temp/preservpost.png'

function Home() {
    return (
        <section className="listPosts">
            <PostSpan image={image}/>
            <PostSpan image={image}/>
            <PostSpan image={image}/>
            <PostSpan image={image}/>
            <PostSpan image={image}/>
            <PostSpan image={image}/>
        </section> 
    )
}

export default Home;