import React, { useEffect, useState } from 'react';
import InfoContainer from '../../Components/InfoContainer';
import ColabSpan from '../../Components/ColabSpan';
import Loading from '../../Components/Loading';
import './Colab.css';
import apiPortfolio from '../../services/apiPortfolio';

function Colab() {

    const [ colabs, setColabs ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        (async () =>{
            setLoading(true);
            const { data } = await apiPortfolio.get("colabs");
            setColabs(data);
            setLoading(false);
        })()
    }, [])

    return (
        <section className="containerColab">
            
            <InfoContainer
                title="Colabs"
                text="Aqui são algumas participações em eventos, lives e trabalhos por aí. Espero que goste! (Clique e saiba mais)"
            />
            {
                loading &&
                <Loading/>

            }
            <div className="colabsWrap">
                {
                    colabs &&
                    colabs.map(colab => (
                        <ColabSpan
                            key={colab.id}
                            href={colab.link}
                            image={colab.image.formats.small.url}
                            title={colab.title}
                            type={colab.description}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default Colab;