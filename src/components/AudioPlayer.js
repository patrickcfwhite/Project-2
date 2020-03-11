import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <audio src={this.props.src} controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer