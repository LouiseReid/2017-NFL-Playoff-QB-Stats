import React from 'react';
import PlayerList from '../components/PlayerList'
import '../stylesheets/main.css';



class MainContainer extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch('/players')
    .then(res => res.json())
    .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">NFL Playoff QBs</h1>
        <PlayerList players={this.state.players} className="player-container"/>
      </div>
    );
  }
}

export default MainContainer
