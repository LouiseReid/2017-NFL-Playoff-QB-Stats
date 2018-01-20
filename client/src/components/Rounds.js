import React from 'react';
import Game from './Game'
var _ = require('lodash');


const Rounds = (props) => {

  if(!props.games) return null;

  const afcWildcard = _.filter(props.games, {'round': 'wildcard afc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  const nfcWildcard = _.filter(props.games, {'round': 'wildcard nfc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  return(
    <div className="rounds">
      <section className="afc">
        <div className="afc-wildcard">
          {afcWildcard}
        </div>
        <div className="afc-divisional">

        </div>
        <div className="afc-championship">

        </div>
      </section>
      <div className="superbowl">

      </div>
      <section className="nfc">
        <div className="nfc-wildcard">
          {nfcWildcard}
        </div>
        <div className="nfc-divisional">

        </div>
        <div className="nfc-championship">

        </div>
      </section>
    </div>
  )
}

export default Rounds
