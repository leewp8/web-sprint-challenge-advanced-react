import React, { useState } from 'react'
import axios from 'axios'


const URL = 'http://localhost:9000/api/result'





export default function AppFunctional(props) {
  const initialState = {
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
const [state, setState] = useState(initialState)

const moveUp = () => {
  if(state.y > 0) {
  const newGrid = [...state.grid]
  newGrid[state.y][state.x] = 0
  newGrid[state.y - 1][state.x] = 1
  setState({
    ...state,
    grid: newGrid,
    y: state.y - 1,
    steps: state.steps + 1,
    message: ''
  })
} else {
  setState({
    ...state,
    message: "You can't go up"
  })
}
}

const moveDown = () => {
  if(state.y < 2) {
  const newGrid = [...state.grid]
  newGrid[state.y][state.x] = 0
  newGrid[state.y + 1][state.x] = 1
  setState({
    ...state,
    grid: newGrid,
    y: state.y + 1,
    steps: state.steps + 1,
    message: ''
  })
} else {
  setState({
    ...state,
    message: "You can't go down"
  })
}
}

const moveRight = () => {
  if(state.x < 2) {
  const newGrid = [...state.grid]
  newGrid[state.y][state.x] = 0
  newGrid[state.y][state.x + 1] = 1
  setState({
    ...state,
    grid: newGrid,
    x: state.x + 1,
    steps: state.steps + 1,
    message: ''
  })
}else{
  setState({
    ...state,
    message: "You can't go right"
  })
}
}

const moveLeft = () => {
  if(state.x > 0) {
  const newGrid = [...state.grid]
  newGrid[state.y][state.x] = 0
  newGrid[state.y][state.x - 1] = 1
  setState({
    ...state,
    grid: newGrid,
    x: state.x - 1,
    steps: state.steps + 1,
    message: ''
  })
} else {
  setState({
    ...state,
    message: "You can't go left"
  })
}
}

const reset = () => {
  setState({
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

const changeInput = (evt) => {
  setState({...state, email: evt.target.value})
}

const postEmail = () => {
  const newPost = {
    x: state.x+1,
    y: state.y+1,
    steps: state.steps,
    email: state.email
  }
  axios.post(URL, newPost)
  .then(res=> {
    console.log(res)
    setState({
      ...state,
      message: res.data.message,
      email: ''
    })
  })
  .catch(err=> {
    console.log(err)
    setState({
      ...state,
      message: err.response.data.message
    })
  })
}

const handleSubmit = evt => {
  evt.preventDefault()
  postEmail(state.values)
}

console.log(state)
  return (
    
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x+1}, {state.y+1})</h3>
        <h3 id="steps">{state.steps===1? `You moved 1 time`: `You moved ${state.steps} times`}</h3>
      </div>
      <div id="grid">
        <div className={`square${state.grid[0][0] ? ' active' : ''}`}>{state.grid[0][0] ? 'B' : ''}</div>
        <div className={`square${state.grid[0][1] ? ' active' : ''}`}>{state.grid[0][1] ? 'B' : ''}</div>
        <div className={`square${state.grid[0][2] ? ' active' : ''}`}>{state.grid[0][2] ? 'B' : ''}</div>
        <div className={`square${state.grid[1][0] ? ' active' : ''}`}>{state.grid[1][0] ? 'B' : ''}</div>
        <div className={`square${state.grid[1][1] ? ' active' : ''}`}>{state.grid[1][1] ? 'B' : ''}</div>
        <div className={`square${state.grid[1][2] ? ' active' : ''}`}>{state.grid[1][2] ? 'B' : ''}</div>
        <div className={`square${state.grid[2][0] ? ' active' : ''}`}>{state.grid[2][0] ? 'B' : ''}</div>
        <div className={`square${state.grid[2][1] ? ' active' : ''}`}>{state.grid[2][1] ? 'B' : ''}</div>
        <div className={`square${state.grid[2][2] ? ' active' : ''}`}>{state.grid[2][2] ? 'B' : ''}</div>
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button onClick={moveLeft} id="left">LEFT</button>
        <button onClick={moveUp} id="up">UP</button>
        <button onClick={moveRight} id="right">RIGHT</button>
        <button onClick={moveDown} id="down">DOWN</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" onChange={changeInput} value={state.email}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
