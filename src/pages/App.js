import * as React from 'react'
import {observable, computed} from 'mobx'
import {observer} from 'mobx-react'

@observer
class App extends React.PureComponent {
  render() {
    return (
      <>
        {this.props.store.mixed}
      </>
    )
  }
}

export default App
