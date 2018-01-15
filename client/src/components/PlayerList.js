import React from 'react'
import Player from '../components/Player'


const PlayerList = (props) => {

  if(!props.players) return null;

  const playerList = props.players.map((player) =>{
    return <Player player={player}/>;

  })
  return (
    <div className="players-list">
      {playerList}
    </div>
  )
}

export default PlayerList
