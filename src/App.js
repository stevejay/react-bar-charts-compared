import React, { Component } from 'react'

import ExampleContainer from './components/example-container'
import UpdateButton from './components/update-button'
import './App.css'

class App extends Component {
  render () {
    return (
      <main>
        <ExampleContainer title='Some Library'>
          The bar chart
        </ExampleContainer>
        <ExampleContainer title='Another Library'>
          The other bar chart
        </ExampleContainer>
        <footer>
          <UpdateButton />
        </footer>
      </main>
    )
  }
}

export default App
