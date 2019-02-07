import React, { Component } from 'react';
import './App.css';
import Display from './components/Display.js';
import Buttons from './components/Buttons.js';
import Button from './components/Button.js';
import update from 'immutability-helper';
import * as math from 'mathjs'

class App extends Component {
state = {
  operations: [''],
  button: [
    {id: 1, label: '0', value: '0'},
    {id: 2, label: '/', value: '/'},
    {id: 3, label: '*', value: '*'},
    {id: 4, label: 'C', value: 'clear'},
    {id: 5, label: '7', value: '7'},
    {id: 6, label: '8', value: '8'},
    {id: 7, label: '9', value: '9'},
    {id: 8, label: '+', value: '+'},
    {id: 9, label: '4', value: '4'},
    {id: 10, label: '5', value: '5'},
    {id: 11, label: '6', value: '6'},
    {id: 12, label: '-', value: '-'},
    {id: 13, label: '1', value: '1'},
    {id: 14, label: '2', value: '2'},
    {id: 15, label: '3', value: '3'},
    {id: 16, label: '=', value: 'equal'},
  ]
}

  render() {
    return (
      <div className="App">
      <h1 className="Casio">CASIO</h1>
        <Display data={this.state.operations} />
          <Buttons>
            <table>
              <tbody>
                <tr>
              {
                      this.state.button.map(x =>
                      <Button label={x.label}
                      value={x.value}
                      key={x.id}
                      onClick={this.handleClick}
                      /> )
                    }
                </tr>
              </tbody>
            </table>
          </Buttons>

      </div>
    );
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
      break;
      case 'equal':
        this.calculateOperations()
      break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations
        })
        break;
    }
  }
  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }
}

export default App;
