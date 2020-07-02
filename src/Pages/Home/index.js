import React, { useEffect, useState } from 'react';
import './Home.css';
import PostSpan from '../../Components/PostSpan';
import apiPortfolio from '../../services/apiPortfolio';
import Loading from '../../Components/Loading';



function Home() {

    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        (async () =>{
            setLoading(true)
            const { data } = await apiPortfolio.get("projects?_sort=priority:DESC&show=true");
            setPosts(data);
            setLoading(false)
        })()
    }, [])


    return (
        <section className="containerHome">
            {
                loading &&
                <Loading/>

            }
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