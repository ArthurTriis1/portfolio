import React, { useEffect, useState } from 'react';
import './Home.css';
import PostSpan from '../../Components/PostSpan';
import apiPortfolio from '../../services/apiPortfolio';
import Loading from '../../Components/Loading';
//import axios from 'axios'



function Home() {

    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        (async () =>{
            setLoading(true)
            const {data: {data : { projects }}} = await apiPortfolio.post("graphql", {
                                query: `{
                                    projects(sort:"priority:DESC", where:{show:true})
                                    {
                                    id
                                    title
                                    description
                                    image{
                                        url
                                        formats
                                    }
                                    priority
                                        tags(limit:3){
                                        name
                                        color
                                        }
                                    }
                                }`}
                            )
            console.log(projects)
            //const { data } = await apiPortfolio.get("projects?_sort=priority:DESC&show=true");
            setPosts(projects);
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
                        tags={post.tags.slice(0, 3)} 
                        title={post.title} 
                        description={post.description}
                    />
                ))
            }
        </section> 
    )
}

export default Home;