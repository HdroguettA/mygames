import React, { Component }  from 'react';
import './Search.css';
import GamesUnderline from "./svg/GamesUnderline.svg";

function Games() {
  return (
    <div className="main-content">
      <div className="game-heading">
        <p className="game-heading-txt">
          Games
        </p>
        <img src={GamesUnderline} alt="Games text underline" className="game-heading-underline"/>
      </div>
      <div className="search-bar">

      </div>
    </div>
  );
}

export default Games;