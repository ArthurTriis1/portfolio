import React from 'react';
import InfoContainer from '../../Components/InfoContainer';
import './About.css';

function About() {
    return (
        <div className="containerAbout">
            <InfoContainer
            title="Sobre"
            text={
`Estudante de Análise e Desenvolvimento de Sistemas no IFPE, focado no desenvolvimento Web e Mobile. Interessado em conhecer tecnologias tanto consolidadas, quanto recentes no mercado, e por em prática esses conhecimentos em projetos reais onde atuo desenvolvendo principalmente o front-end, mas tenho colaboração ativa na definição do projeto, passando pelo no back-end, até o deploy. Participo de diversas atividades de pesquisa e desenvolvimento na instituição, meetups, hackathons e eventos em geral na comunidade.`}
            />

            <InfoContainer
            title="Competências"
            text={
`
### Desenvolvedor front-end:
- HTML5, CSS3 e Bootstrap 4 
- Javascript ES6+
- Typescript 
- Vue.js, Vuetify
- React, React Hooks
- React Native
- StyledComponents
- APIs RESTful
- Single Page Application (SPA)
- Progressive Web Application (PWA)
- Mobile First
- Desenvolvimento de mapas interativos com biblioteca Leaflet


### Habilidades back-end:
- Node.js, Express
- Mysql, Postgres e Postgis


### Habilidade extras:
- Git e Github
- Terminal Linux
- ESlint e Prettier
- VScode, Netbeans e Eclipse
- Deploy continuo no netlify de front-end e back-end (servless)

`}
            />
        </div>
    );
}

export default About;