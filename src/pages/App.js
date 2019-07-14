import * as React from 'react'
import {observable, computed} from 'mobx'
import {observer} from 'mobx-react'

@observer
class App extends React.PureComponent {

  render() {
    return (
      <>
        {this.props.temps.map((temp) => {
          return <div>{temp.temp}</div>
        })}
      </>
    )
  }
}

export default App
