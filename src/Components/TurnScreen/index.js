import React from 'react';

import './TurnScreen.css';
import { BsPhone } from 'react-icons/bs'

function TurnScreen() {
  return (
    <div className="turnScreen">
        <BsPhone className="iconCell"/>
        <h1>Vire o celular para melhor usabilidade</h1>
    </div>
  )
}

export default TurnScreen;