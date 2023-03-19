import React, { Component } from 'react';
import ".././style.css";

import Draggable, {DraggableCore} from 'react-draggable';
import ReactAudioPlayer from 'react-audio-player';
const sorrow = 'https://testpublicsetting.s3.us-east-2.amazonaws.com/Walls+Will+Sing+Sorrow+(Unmastered).wav';
const songOne = new Audio(sorrow);
const handle = '_||⠉⠉||_';
const handle_two = `__`;
const playButton = '|.⠿▶️⠿⠿|'
const pauseButton = '.⠿⏸️⠿⠿';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      controlButton: '|.⠿▶️⠿⠿|',
    };
    this.playPause = this.playPause.bind(this);
  }

  playPause() {
    if (this.state.isPlaying){
      songOne.pause();
      this.setState({isPlaying: false, controlButton: '|.⠿▶️⠿⠿|'});
    } else {
      songOne.play();
      this.setState({isPlaying: true, controlButton: '|.⠿⏸️⠿⠿|'});
    }
  }

  render() {
    const { controlButton } = this.state;
    return (
      <div className="main">
        <img className="logo" src={`/assets/LogoTrans2.png`}/>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          bounds={{left: -170, top: -30, right: 170, bottom: 250}}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
          <div style={{color: 'white'}} className="handle">{handle_two}</div>
            <div style={{color: 'white'}} className="handle">{handle}</div>
            <div  style={{color: 'white'}}>  |⠿⠿⠿⠿⠿|  </div>
            <div  style={{color: 'white', cursor: 'pointer'}} onClick={this.playPause}>{controlButton}</div>
            <div  style={{color: 'white'}}>  |⠿⠿⠿⠿⠿|  </div>
            <div style={{color: 'white', size: '4', fontFamily: 'Garamond'}}>"⠉⠉⠉⠉"</div>
          </div>
        </Draggable>
      </div>
    )
  }
}

export default App;