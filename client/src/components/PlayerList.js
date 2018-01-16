import React from 'react'
import Player from '../components/Player'
var _ = require('lodash');



const PlayerList = (props) => {

  if(!props.players) return null;

  const playerList = props.players.map((player) =>{
    return <Player player={player} key={player.id}/>;

  })
  return (
    <div className="players-list">
      {playerList}
    </div>
  )
}

export default PlayerList
