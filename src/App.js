import React from 'react';
import './App.css';
import Routes from './routes';
import Sidebar from '../src/Components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import photo from '../src/assets/images/sidebar/photo.jpeg';

function App() {
    return (
        <BrowserRouter>
            <Sidebar photo={photo}/>
            <main>
                <Routes />
            </main>
        </BrowserRouter>
    );
}

export default App;
