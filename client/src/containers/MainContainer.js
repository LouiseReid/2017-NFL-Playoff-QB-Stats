import React from 'react';
import PlayerList from '../components/PlayerList';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
        <div className="header">
          <h1>NFL Playoff QBs</h1>
          <p>Select a player to view their regular season stats</p>
        </div>
        <div className="player-container">
          <PlayerList players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default MainContainer
