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
        <div className="player-container">
          <PlayerList players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default MainContainer
