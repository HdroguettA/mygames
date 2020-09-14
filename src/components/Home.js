import React, { Component }  from 'react';
import './Home.css';
import GamesUnderline from "./svg/GamesUnderline.svg";
import Search from './Search';

function Home() {
  return (
    <div className="home-main-content">
      <div className="game-heading">
        <p className="game-heading-txt">
          Games
        </p>
        <img src={GamesUnderline} alt="Games text underline" className="game-heading-underline"/>
      </div>
      <div className="search-bar">
        <Search/>
      </div>
    </div>
  );
}

export default Home;