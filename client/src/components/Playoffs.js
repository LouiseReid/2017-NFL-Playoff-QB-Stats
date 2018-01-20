import React from 'react'

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
      <p>This is the playoffs</p>
    )
  }

}

export default Playoffs
