import axios from 'axios'
import React from 'react'

const URL = 'http://localhost:9000/api/result'




export default class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 1,
      y: 1,
      steps: 0,
      email: '',
      grid: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      message: ''
    }
  }


  moveUp = () => {
    if(this.state.y > 0) {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y - 1][this.state.x] = 1
    this.setState({
      ...this.state,
      grid: newGrid,
      y: this.state.y - 1,
      steps: this.state.steps + 1,
      message: ''
    })
  } else {
    this.setState({
      ...this.state,
      message: "You can't go up"
    })
  }
}

  moveDown = () => {
    if(this.state.y < 2) {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y + 1][this.state.x] = 1
    this.setState({
      ...this.state,
      grid: newGrid,
      y: this.state.y + 1,
      steps: this.state.steps + 1,
      message: ''
    })
  } else {
    this.setState({
      ...this.state,
      message: "You can't go down"
    })
  }
  }

  moveRight = () => {
    if(this.state.x < 2) {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y][this.state.x + 1] = 1
    this.setState({
      ...this.state,
      grid: newGrid,
      x: this.state.x + 1,
      steps: this.state.steps + 1,
      message: ''
    })
  }else{
    this.setState({
      ...this.state,
      message: "You can't go right"
    })
  }
  }

  moveLeft = () => {
    if(this.state.x > 0) {
    const newGrid = [...this.state.grid]
    newGrid[this.state.y][this.state.x] = 0
    newGrid[this.state.y][this.state.x - 1] = 1
    this.setState({
      ...this.state,
      grid: newGrid,
      x: this.state.x - 1,
      steps: this.state.steps + 1,
      message: ''
    })
  } else {
    this.setState({
      ...this.state,
      message: "You can't go left"
    })
  }
  }

  reset = () => {
    this.setState({
      x: 1,
      y: 1,
      steps: 0,
      email: '',
      grid: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      message: ''
    })
  }

  changeInput = (evt) => {
    this.setState({email: evt.target.value})
  }

  postEmail = () => {
    const newPost = {
      x: this.state.x+1,
      y: this.state.y+1,
      steps: this.state.steps,
      email: this.state.email
    }
    axios.post(URL, newPost)
    .then(res=> {
      console.log(res)
      this.setState({
        message: res.data.message,
        email: ''
      })
      
    })
    .catch(err=> {
      console.log(err)
      this.setState({
        message: err.response.data.message
      })
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.postEmail(this.state.values)
  }

  render() {
    // console.log('props are', this.props)
    console.log('state is', this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x+1}, {this.state.y+1})</h3>
          <h3 id="steps">{this.state.steps===1? `You moved 1 time`: `You moved ${this.state.steps} times`}</h3>
        </div>
        <div id="grid">
          <div className={`square${this.state.grid[0][0] ? ' active' : ''}`}>{this.state.grid[0][0] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[0][1] ? ' active' : ''}`}>{this.state.grid[0][1] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[0][2] ? ' active' : ''}`}>{this.state.grid[0][2] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[1][0] ? ' active' : ''}`}>{this.state.grid[1][0] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[1][1] ? ' active' : ''}`}>{this.state.grid[1][1] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[1][2] ? ' active' : ''}`}>{this.state.grid[1][2] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[2][0] ? ' active' : ''}`}>{this.state.grid[2][0] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[2][1] ? ' active' : ''}`}>{this.state.grid[2][1] ? 'B' : ''}</div>
          <div className={`square${this.state.grid[2][2] ? ' active' : ''}`}>{this.state.grid[2][2] ? 'B' : ''}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.moveLeft} id="left">LEFT</button>
          <button onClick={this.moveUp} id="up">UP</button>
          <button onClick={this.moveRight} id="right">RIGHT</button>
          <button onClick={this.moveDown} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={this.changeInput} value={this.state.email}></input>
          <input id="submit" type="submit" ></input>
        </form>
      </div>
    )
  }
}
