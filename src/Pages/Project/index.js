import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoContainer from '../../Components/InfoContainer';
import TagsWrap from '../../Components/TagsWrap';
import { project } from '../../assets/temp/post.js';

import './Project.css';

function Project() {

    const [ post, setPost ] = useState({});
    const { id } = useParams();


    useEffect(() => {
        setPost(project)
    }, [])


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
                <TagsWrap tags={project.tags}/>
            </div>


            {
                project.postagem.map((postagem)=> (
                    <div key={postagem.id}>
                    <InfoContainer
                        
                        subtitle={postagem.subtitle}
                    />
                    {
                        postagem.interpost.map(inter => (
                            <InfoContainer
                                key={inter.id}
                                text={inter.paragraph}
                                images={inter.image}
                            />  
                        ))
                    }
                    </div>
                ))
            }

            <div className="accessWrap">
                {post.access && <a href={post.access} >Acessar Projeto</a>}

                {post.repository && <a href={post.repository} >Repositório</a>}
            </div>

        </section>
    )
}

export default Project;