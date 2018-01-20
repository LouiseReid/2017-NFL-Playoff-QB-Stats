import React from 'react';
import Game from './Game'
var _ = require('lodash');


const Rounds = (props) => {

  if(!props.games) return null;

  const afcWildcard = _.filter(props.games, {'round': 'wildcard afc'}).map((game) =>{
    return <Game game={game} key={game.id}/>;
  })

  return(
    <div className="rounds">
      <div className="afc-wildcard">
        {afcWildcard}
      </div>
    </div>
  )
}

export default Rounds
