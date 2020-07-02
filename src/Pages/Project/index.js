import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoContainer from '../../Components/InfoContainer';
import TagsWrap from '../../Components/TagsWrap';
import apiPortfolio from '../../services/apiPortfolio';
import Loading from '../../Components/Loading';

import './Project.css';

function Project() {

    const [ post, setPost ] = useState({});
    const { id } = useParams();
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        (async () =>{
            setLoading(true)
            const { data } = await apiPortfolio.get(`projects/${id}`);
            setPost(data);
            setLoading(false)
        })()
    }, [id])


    return (
        <section className="containerProject">
            {
                loading &&
                <Loading/>

            }
             <InfoContainer
                title={post.title}
                text={post.description}
            />
            {
            post.tags &&
            <>
                <InfoContainer
                    subtitle="tecnologias"
                /> 

                <div className="projectTagWrap">
                    <TagsWrap tags={post.tags}/>
                </div>
            </>
            }

            {
                post.posts &&
                post.posts.map((postagem)=> (
                    <div key={postagem.id} style={{width: "100%"}}>
                        <InfoContainer
                            subtitle={postagem.subtitle}
                            text={postagem.paragraph}
                            images={postagem.images.map(image => 
                                {
                                    return{
                                        title: image.title,
                                        subtitle: image.subtitle,
                                        image: image.image.url
                                    }
                                }
                            )}
                        />
                    </div>
                ))
            }

            <div className="accessWrap">
                {
                    post.links &&
                    post.links.map(link => (
                        link.title &&
                        <a key={link.id} href={link.link} >{link.title}</a>
                    ))
                }
            </div>

        </section>
    )
}

export default Project;