import React from 'react'

const PlayerList = (props) => {

  if(!props.players) return null;
  const playerList = props.plyers.map((player) =>{
    return <Player player={player}/>;
  })
  return (
    <div className="players-list">
      {playerList}
    </div>
  )
}

export default PlayerList
