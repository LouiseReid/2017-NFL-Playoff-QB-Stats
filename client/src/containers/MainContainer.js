import React from 'react';

class MainContainer extends React.Component {
  state = {players: []}

  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
        <h1>NFL Playoff QBs</h1>
        {this.state.players.map(player =>
          <div key={player.id}>
            <h1>{player.name}</h1>
            <p>{player.team}</p>
            <img src={player.image} alt={player.name}/>
          </div>
        )}
      </div>
    );
  }
}

export default MainContainer
