import React from 'react';
import Game from './Game';
import Superbowl from './Superbowl';
import '../stylesheets/rounds.css';

var _ = require('lodash');


const Rounds = (props) => {

  if(!props.games) return null;

  const afcWildcard = _.filter(props.games, {'round': 'wildcard afc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const nfcWildcard = _.filter(props.games, {'round': 'wildcard nfc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const afcDivisional = _.filter(props.games, {'round': 'divisional afc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const nfcDivisional = _.filter(props.games, {'round': 'divisional nfc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const afcChampionship = _.filter(props.games, {'round': 'championship afc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const nfcChampionship = _.filter(props.games, {'round': 'championship nfc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const afcSuperbowl = _.filter(props.games, {'round': 'superbowl afc'}).map((game) =>{
    return <Superbowl game={game} key={game.id}/>;
  })

  const nfcSuperbowl = _.filter(props.games, {'round': 'superbowl nfc'}).map((game) =>{
    return <Superbowl game={game} key={game.id}/>;
  })


  return(
    <div className="rounds">
      <section className="afc">
        <div className="afc-wildcard">
          <h2 className="round-title">AFC Wildcard Round</h2>
          <div className="wildcard-games">
            {afcWildcard}
          </div>
        </div>
        <div className="afc-divisional">
          <h2 className="round-title">AFC Divisional Round</h2>
          <div className="divisional-games">
            {afcDivisional}
          </div>
        </div>
        <div className="afc-championship">
          <h2 className="round-title">AFC Championship Round</h2>
          <div className="championship-games">
            {afcChampionship}
          </div>
        </div>
      </section>
      <section className="superbowl-game">
        <div className="superbowl-teams">
          {afcSuperbowl}
          {nfcSuperbowl}
        </div>
      </section>
      <section className="nfc">
        <div className="nfc-championship">
          <div className="championship-games">
            {nfcChampionship}
          </div>
          <h2 className="round-title">NFC Championship Round</h2>
        </div>
        <div className="nfc-divisional">
          <div className="divisional-games">
            {nfcDivisional}
          </div>
          <h2 className="round-title">NFC Divisional Round</h2>
        </div>
        <div className="nfc-wildcard">
          <div className="wildcard-games">
            {nfcWildcard}
          </div>
          <h2 className="round-title">NFC Wildcard Round</h2>
        </div>
      </section>
    </div>
  )
}

export default Rounds
