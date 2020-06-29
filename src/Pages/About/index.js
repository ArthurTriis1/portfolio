import React from 'react';
import InfoContainer from '../../Components/InfoContainer';
import './About.css';

function About() {
    return (
        <div className="containerAbout">
            <InfoContainer
            title="Sobre"
            text={
`Sou estudante de Análise e Desenvolvimento de Sistemas no IFPE, focado no desenvolvimento Web e Mobile. Me interesso em conhecer tecnologias tanto consolidadas quanto recentes no mercado. Ponho em prática esses conhecimentos em projetos reais, onde atuo desenvolvendo principalmente o front-end, mas tenho colaboração ativa na definição do projeto:  passando pelo back-end até o deploy. Participo de diversas atividades de pesquisa e desenvolvimento na instituição, além de meetups, hackathons e eventos em geral na comunidade.`}
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
- Strapi CMS
- Mysql, Postgres e Postgis


### Habilidade extras:
- Git e Github
- Terminal Linux
- ESlint e Prettier
- VScode, Netbeans e Eclipse
- Deploy continuo no Netlify
- Deploy continuo no Heroku


`}
            />
        </div>
    );
}

export default About;