import React from 'react'
import '../stylesheets/game.css';


const Game = (props) => {

  return(
    <React.Fragment>
      <div className="game">
        <div className="home">
          <img src={props.game.homeImage} alt={props.game.home}/>
          <div className="details">
            <h3>{props.game.home}</h3>
            <h5>{props.game.homeSeed}</h5>
          </div>
        </div>
        <div className="away">
          <div className="details">
            <h3>{props.game.away}</h3>
            <h5>{props.game.awaySeed}</h5>
          </div>
          <img src={props.game.awayImage} alt={props.game.away}/>
        </div>
      </div>
    </React.Fragment>


  )

}

export default Game
