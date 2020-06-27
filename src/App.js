import React from 'react';
import './App.css';
import Routes from './routes';
import Sidebar from '../src/Components/Sidebar';
import TurnScreen from '../src/Components/TurnScreen';
import { BrowserRouter } from 'react-router-dom';
import photo from '../src/assets/images/sidebar/photo.jpeg';

function App() {
    return (
        <BrowserRouter>
            <TurnScreen/>
            <Sidebar photo={photo}/>
            <main>
                <Routes />
            </main>
        </BrowserRouter>
    );
}

export default App;
