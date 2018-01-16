import React from 'react'
import Player from '../components/Player'
import '../stylesheets/playerlist.css';
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
      <div className="players-list">
        <div className="afc-players-list">
          {afcPlayerList}
        </div>
        <section className="superbowl"></section>
        <div className="nfc-players-list">
          {nfcPlayers}
        </div>
      </div>

    </React.Fragment>
  )
}

export default PlayerList
