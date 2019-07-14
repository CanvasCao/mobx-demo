require('babel-polyfill')

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {observable, computed, autorun, action} from 'mobx'
import App from './pages/App'

class Store {
  @observable array = ["a", "b"];
  @observable obj = {};
  @observable map = new Map();

  @observable str = "hello";
  @observable number = 20;
  @observable bool = false;

  @computed get mixed() {
    return this.str + this.number
  };

  @action changeMixed() {
    this.str = 'world';
    this.number = 30;
  }

  @action pushArray() {
    this.array.push("c")
  }
}

var store = new Store()

window.store = store

autorun(() => {
  console.log(store.mixed)
})

ReactDOM.render(
  <App
    store={store}
  />,
  document.getElementById('MainApp')
)
