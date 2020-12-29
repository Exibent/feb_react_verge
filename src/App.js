// src/App.js 
import React, { Component } from 'react'
import Instructions from './components/button_wool.js'
import V3DApp from './components/V3DApp.js'
import Controls from './components/Controls'
import './App.css'



class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        optionNames: [ 'Body', 'Collar', 'Cuffs', 'Belt' ],   
        optionValues: [
          [ 'Ocher', 'Light Blue'],
          [ 'Grey', 'Yellow'],
          [ 'Grey', 'Red' ],
          [ 'Grey', 'Red' ]
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