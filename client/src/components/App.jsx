import React, { Component } from 'react';
import ".././style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <img className="logo" src={`/assets/Logo2.png`}/>
      </div>
    )
  }
}

export default App;