import * as React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const appState = observable({count: 0})
console.log(appState)
appState.increment = () => {
  this.count++
}
appState.decrement = () => {
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
