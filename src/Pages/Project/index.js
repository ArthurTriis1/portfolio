import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoContainer from '../../Components/InfoContainer';
import TagsWrap from '../../Components/TagsWrap';
import apiPortfolio from '../../services/apiPortfolio';

import './Project.css';

function Project() {

    const [ post, setPost ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () =>{
            const { data } = await apiPortfolio.get(`projects/${id}`);
            setPost(data);
        })()
    }, [id])


    return (
        <section className="containerProject">
             <InfoContainer
                title={post.title}
                text={post.description}
            />

            <InfoContainer
                subtitle="tecnologias"
            /> 

             <div className="projectTagWrap">
                <TagsWrap tags={post.tags}/>
            </div>


            {
                post.posts &&
                post.posts.map((postagem)=> (
                    <div key={postagem.id}>
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
                        <a key={link.id} href={link.link} >{link.title}</a>
                    ))
                }
            </div>

        </section>
    )
}

export default Project;