import React from 'react'
import '../stylesheets/superbowl.css';


const Superbowl = (props) => {

  return(
    <React.Fragment>
      <div className="sb-game">
          <img className="sb-team-image" src={props.game.homeImage} alt={props.game.home}/>
          <div className="details">
            <h3 className="sb-team">{props.game.home}</h3>
            <h5 className="sb-seed">{props.game.homeSeed}</h5>
          </div>
      </div>
    </React.Fragment>


  )

}

export default Superbowl
