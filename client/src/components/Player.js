import React from 'react';
import Modal from '../components/Modal'


class Player extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  render(){
    return (
      <div className="player">
        <h3>{this.props.player.name}</h3>
        <h4>{this.props.player.team}</h4>
        <img src={this.props.player.image} alt={this.props.player.name} onClick={() => this.openModal()}/>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

}

export default Player;