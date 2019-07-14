require('babel-polyfill')

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {observable, computed} from 'mobx'
import App from './pages/App'

class Temp {
  id = Math.random();
  @observable unit = "C";
  @observable tempC = 25;

  @computed get tempK() {
    return this.tempC * (9 / 5) + 32
  };

  @computed get temp() {
    if (this.unit === "C") {
      return this.tempC + "C"
    } else {
      return this.tempK + "K"
    }
  };
}

const temps = observable([])
temps.push(new Temp())
window.temps = temps
window.Temp = Temp

ReactDOM.render(
  <App temps={temps} />,
  document.getElementById('MainApp')
)
