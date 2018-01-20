import React from 'react'
import '../stylesheets/game.css';


const Game = (props) => {

  return(
    <React.Fragment>
      <div className="game">
        <div className="home">
          <img className="team-image" src={props.game.homeImage} alt={props.game.home}/>
          <div className="details">
            <h3 className="team">{props.game.home}</h3>
            <h5 className="seed">{props.game.homeSeed}</h5>
          </div>
        </div>
        <div className="away">
          <div className="details">
            <h3 className="team">{props.game.away}</h3>
            <h5 className="seed">{props.game.awaySeed}</h5>
          </div>
          <img className="team-image" src={props.game.awayImage} alt={props.game.away}/>
        </div>
      </div>
    </React.Fragment>


  )

}

export default Game
