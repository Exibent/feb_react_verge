// src/App.js 
import React, { Component } from 'react'
import './App.css'
import Controls from './Components/Controls'
import V3DApp from './Components/V3DApp.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      optionNames: [ 'Body', 'Collar', 'Cuffs', 'Belt' ],   
      optionValues: [
        [ 'white', 'red', 'blue', 'green' ],
        [ 'grey', 'white', 'black' ],
        [ 'grey', 'white', 'black' ],
        [ 'grey', 'white', 'black' ]
      ]
    }
  }

  render() {
    return (
      <div className="App">                
        <V3DApp/>                
        <Controls options={this.state.optionNames} optionValues={this.state.optionValues} />        
      </div>
    )
  }
}

export default App
