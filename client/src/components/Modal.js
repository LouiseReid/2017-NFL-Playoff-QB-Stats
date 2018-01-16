import React from 'react'
import '../stylesheets/modal.css';


class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false)
      return null


    return (
      <div>
        <div className="modalStyle">
          <h2>{this.props.player.name} - {this.props.player.team}</h2>
          <li>Passing Attempts: {this.props.player.passingAttempts}</li>
          <li>Completions: {this.props.player.completions}</li>
          <li>Yards: {this.props.player.yards}</li>
          <li>TDs: {this.props.player.TDs}</li>
          <li>Interceptions: {this.props.player.interceptions}</li>
          <li>First Down %: {this.props.player.firstDownPercentage}</li>
          <li>Sacked: {this.props.player.sacked}</li>
        </div>
        <div className="backdropStyle" onClick={e => this.close(e)}/>
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default Modal
