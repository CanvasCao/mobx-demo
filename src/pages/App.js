import * as React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const appState = observable({count: 0})
appState.increment = function () {
  console.log(this)
  this.count++
}
appState.decrement = function () {
  this.count--
}

@observer
class App extends React.PureComponent {
  handleIncClick = () => {
    appState.increment()
  }

  handleDecClick = () => {
    appState.decrement()
  }

  render() {
    return (
      <>
        Counter:{appState.count}
        <button onClick={this.handleIncClick}>+</button>
        <button onClick={this.handleDecClick}>-</button>
      </>
    )
  }
}

export default App
