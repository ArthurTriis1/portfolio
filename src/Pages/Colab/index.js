import React, { useEffect, useState } from 'react';
import InfoContainer from '../../Components/InfoContainer';
import ColabSpan from '../../Components/ColabSpan';

import './Colab.css';
import apiPortfolio from '../../services/apiPortfolio';

function Colab() {

    const [ colabs, setColabs ] = useState([])

    useEffect(() => {
        (async () =>{
            const { data } = await apiPortfolio.get("colabs");
            setColabs(data);
        })()
    }, [])

    return (
        <section className="containerColab">
            <InfoContainer
                title="Colabs"
                text="Aqui são algumas participações em eventos, lives e trabalhos por aí. Espero que goste! (Clique e saiba mais)"
            />
            <div className="colabsWrap">
                {
                    colabs &&
                    colabs.map(colab => (
                        <ColabSpan
                            key={colab.id}
                            href={colab.link}
                            image={`${process.env.REACT_APP_BACKEND_URL}${colab.image.formats.small.url}`}
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