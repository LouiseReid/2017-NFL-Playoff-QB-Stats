import React from 'react';
import Game from './Game'
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
    return <Game game={game} key={game.id}/>;
  })

  const nfcSuperbowl = _.filter(props.games, {'round': 'superbowl nfc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })


  return(
    <div className="rounds">
      <section className="afc">
        <div className="afc-wildcard">
          <h3>AFC Wildcard Round</h3>
          <div className="wildcard-games">
            {afcWildcard}
          </div>
        </div>
        <div className="afc-divisional">
          <h3>AFC Divisional Round</h3>
          <div className="divisional-games">
            {afcDivisional}
          </div>
        </div>
          <div className="afc-championship">
            <h3>AFC Championship Round</h3>
            <div className="championship-games">
              {afcChampionship}
            </div>
          </div>
      </section>
      <section className="superbowl">
        <h3>Superbowl</h3>
        <div >
          {afcSuperbowl}
          {nfcSuperbowl}
        </div>
      </section>
      <section className="nfc">
        <div className="nfc-championship">
          <h3>NFC Championship Round</h3>
          <div className="championship-games">
            {nfcChampionship}
          </div>
        </div>
        <div className="nfc-divisional">
          <h3>NFC Divisional Round</h3>
          <div className="divisional-games">
            {nfcDivisional}
          </div>
        </div>
        <div className="nfc-wildcard">
          <h3>NFC Wildcard Round</h3>
          <div className="wildcard-games">
            {nfcWildcard}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rounds
