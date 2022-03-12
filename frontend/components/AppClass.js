import React from 'react'
// import axios from 'axios'

// const URL = 'http://localhost:9000/api/result'


export default class AppClass extends React.Component {
  state = {
    x: 1,
    y: 1,
    steps: 0,
    email: '',
    coordinates: [1,1],
    grid: [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
  }

  // changeGrid () => {
  //   if (this.state.grid = 1) {
  //   return 'B'
  // } else {
  //   return null
  // }}

  // componentDidMount() {

  // }

  // getCoordinates = (x, y) => {

  //   console.log(`(${x}, ${y})`)
  // }

  moveUp = () => {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y - 1][this.state.x] = 1
    this.setState({ ...this.state, grid: newGrid })
    // console.log(this.state)
  }

  moveDown = () => {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y + 1][this.state.x] = 1
    this.setState({ ...this.state, grid: newGrid })
  }

  moveRight = () => {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y][this.state.x + 1] = 1
    this.setState({ ...this.state, grid: newGrid })
  }

  moveLeft = () => {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y][this.state.x - 1] = 1
    this.setState({ ...this.state, grid: newGrid })
  }


  render() {
    console.log(this.state)
    const { className } = this.props
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
          <button onClick={evt => this.moveUp} id="up">UP</button>
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
