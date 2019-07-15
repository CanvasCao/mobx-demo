import * as React from 'react'
import {observer} from 'mobx-react'
import Header from './Header.js'
import Container from './Container.js'

@observer
class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <div>----------------------</div>
        <Container />
      </>
    )
  }
}

export default App
