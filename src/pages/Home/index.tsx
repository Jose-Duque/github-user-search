import React from 'react';
import './styles.css';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1>
       Desafio do Capítulo 3, Bootcamp DevSuperior
      </h1>
    </div>
    <div className="home-text">
      <p>
      Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. 
      Favor observar as instruções passadas no capítulo sobre a elaboração 
      deste projeto. Este design foi adaptado a partir de Ant Design System 
      for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
      </p>
    </div>
    <div className="home-button">
      <button className="home-btn">
        <a href="/search">Começar</a>
      </button>
    </div>
  </div>
);

export default Home;