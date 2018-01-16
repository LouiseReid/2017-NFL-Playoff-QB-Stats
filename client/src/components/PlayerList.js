import React from 'react'
import Player from '../components/Player'
var _ = require('lodash');



const PlayerList = (props) => {

  if(!props.players) return null;

  const afcPlayerList = _.filter(props.players, {'conference': 'AFC'}).map((player) =>{
    return <Player player={player} key={player.id}/>;
  })

  const nfcPlayers = _.filter(props.players, {'conference': 'NFC'}).map((player) =>{
    return <Player player={player} key={player.id}/>;
  })


  return (
    <React.Fragment>
      <div className="afc-players-list">
        {afcPlayerList}
      </div>
      <div className="nfc-players-list">
        {nfcPlayers}
      </div>
    </React.Fragment>
  )
}

export default PlayerList
