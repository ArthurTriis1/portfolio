import React, { useEffect, useState } from 'react';
import './Home.css';
import PostSpan from '../../Components/PostSpan';
import { projects } from '../../assets/temp/post.js';



function Home() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        setPosts(projects);
    }, [])


    return (
        <section className="containerHome">
            {
                posts.map((post, index)=> (
                    <PostSpan 
                        key={index}
                        image={post.image} 
                        tags={post.tags} 
                        title={post.title} 
                        description={post.description}
                    />
                ))
            }
        </section> 
    )
}

export default Home;