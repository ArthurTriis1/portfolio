import React, { useEffect, useState } from 'react';
import './Home.css';
import PostSpan from '../../Components/PostSpan';
import apiPortfolio from '../../services/apiPortfolio';



function Home() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        (async () =>{
            const { data } = await apiPortfolio.get("projects");
            setPosts(data);
        })()
    }, [])


    return (
        <section className="containerHome">
            {   
                posts &&
                posts.map((post, index)=> (
                    <PostSpan 
                        id={post.id}
                        key={index}
                        image={post.image.formats.medium ? post.image.formats.medium.url : post.image.url} 
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