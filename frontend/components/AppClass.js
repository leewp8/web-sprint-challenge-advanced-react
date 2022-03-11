import React from 'react'
// import axios from 'axios'

// const URL = 'http://localhost:9000/api/result'


export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    position: [1,1],
    grid: [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
  }

  componentDidMount() {

  }

  getCoordinates = (x, y) => {
    console.log(`(${x}, ${y})`)
  }

  // moveRight = (val) => {
  //   this.setState({ ...this.state, position: [1,2] })
  // }

  // moveLeft = (val) => {
  //   this.setState({ ...this.state, position: [1,2] })
  // }

  // moveDown = (val) => {
  //   this.setState({ ...this.state, position: [1,2] })
  // }

  // moveUp = (val) => {
  //   this.setState({ ...this.state, position: [1,2] })
  // }

  // getPosition = (grid) => {
  //   console.log(this.state.grid[0][0])
  // }


  render() {
    console.log(this.state)
    const { className } = this.props
    // const { x, y, steps, email } = this.state
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square">{ this.state.grid[0][0] }</div>
          <div className="square">{ this.state.grid[0][1] }</div>
          <div className="square">{ this.state.grid[0][2] }</div>
          <div className="square">{ this.state.grid[1][0] }</div>
          <div className="square active">{ this.state.grid[1][1] }</div>
          <div className="square">{ this.state.grid[1][2] }</div>
          <div className="square">{ this.state.grid[2][0] }</div>
          <div className="square">{ this.state.grid[2][1] }</div>
          <div className="square">{ this.state.grid[2][2] }</div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
