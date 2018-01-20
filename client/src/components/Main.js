import React from 'react';
import PlayerList from './PlayerList';
import '../stylesheets/main.css';

class Main extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch('/players')
    .then(res => res.json())
    .then(players => this.setState({ players }));
  }

  render(){
    return(
      <React.Fragment>
        <div className="header">
          <h1>NFL Playoff QBs</h1>
          <p>Select a player to view their regular season stats</p>
        </div>
        <div className="player-container">
          <PlayerList players={this.state.players} />
        </div>
      </React.Fragment>
    )
  }
}

export default Main
