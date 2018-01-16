import React from 'react';
import PlayerList from '../components/PlayerList'


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
        <h1>NFL Playoff QBs</h1>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default MainContainer
