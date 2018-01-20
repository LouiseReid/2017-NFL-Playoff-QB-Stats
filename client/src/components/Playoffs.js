import React from 'react'
import Rounds from './Rounds'

class Playoffs extends React.Component {
  state = {
    games: []
  }

  componentDidMount() {
    fetch('/playoffs')
    .then(res => res.json())
    .then(games => this.setState({ games }));
  }

  render(){
    return(
      <Rounds games={this.state.games} />
    )
  }

}

export default Playoffs
