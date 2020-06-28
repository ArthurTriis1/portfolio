import React from 'react';
import InfoContainer from '../../Components/InfoContainer';
import ColabSpan from '../../Components/ColabSpan';
import './Colab.css';
import hackathon from '../../assets/temp/hackathon.png'
import grendes from '../../assets/temp/grendes.jpeg'
import developer from '../../assets/temp/developer.jpg'

function Colab() {
    return (
        <section className="containerColab">
            <InfoContainer
            title="Colabs"
            text="Aqui são algumas participações em eventos, lives e trabalhos por aí. Espero que goste!"
            />
            <div className="colabsWrap">
                <ColabSpan
                    image={hackathon}
                    title="Hackathon CCR"
                    type="Evento"
                />

                <ColabSpan
                    image={grendes}
                    title="Facebook Developer Recife"
                    type="Live"
                />

                <ColabSpan
                    image={developer}
                    title="Grupó GRENDES"
                    type="Pesquisa"
                />
            </div>

        </section>
    )
}

export default Colab;