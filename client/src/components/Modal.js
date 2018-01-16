import React from 'react'

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div style={modalStyle}>
          <h2>{this.props.player.name} - {this.props.player.team}</h2>
          <li>Passing Attempts: {this.props.player.passingAttempts}</li>
          <li>Completions: {this.props.player.completions}</li>
          <li>Yards: {this.props.player.yards}</li>
          <li>TDs: {this.props.player.TDs}</li>
          <li>Interceptions: {this.props.player.interceptions}</li>
          <li>First Down %: {this.props.player.firstDownPercentage}</li>
          <li>Sacked: {this.props.player.sacked}</li>
        </div>
        <div style={backdropStyle} onClick={e => this.close(e)}/>
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
