import React, { Component } from 'react';


import Align from "./align"
import Color from "./color_me"
import Counter from "./counter"
import Hide from "./hide_me"
import Text from "./text"
import Time from "./time"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>6 Components</h1>
        <div>
          <Align />
        </div>
        <div>
          <Color />
        </div>
        <div>
          <Hide />
        </div>
        <div>
          <Text />
        </div>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

