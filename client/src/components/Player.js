import React from 'react';

const Player = (props) => {

  return (
      <div className="player">
        <h3>{props.player.name}</h3>
        <h4>{props.player.team}</h4>
        <img src={props.player.image} alt={props.player.name}/>
      </div>

  )
}

export default Player;
