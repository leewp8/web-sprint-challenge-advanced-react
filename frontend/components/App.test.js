// Write your tests here
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from './AppClass'
import React from 'react'


test('cannot go up', () => {
  render(<AppClass/>)
  const up = screen.getByText('UP')
  fireEvent.click(up)
  fireEvent.click(up)
  expect(screen.getByText("You can't go up")).toBeInTheDocument()
})

test('cannot go right', () => {
  render(<AppClass/>)
  const right = screen.getByText('RIGHT')
  fireEvent.click(right)
  fireEvent.click(right)
  expect(screen.getByText("You can't go right")).toBeInTheDocument()
})

test('cannot go left', () => {
  render(<AppClass/>)
  const left = screen.getByText('LEFT')
  fireEvent.click(left)
  fireEvent.click(left)
  expect(screen.getByText("You can't go left")).toBeInTheDocument()
})

test('cannot go down', () => {
  render(<AppClass/>)
  const down = screen.getByText('DOWN')
  fireEvent.click(down)
  fireEvent.click(down)
  expect(screen.getByText("You can't go down")).toBeInTheDocument()
})

test('reset works', () => {
  render(<AppClass/>)
  const up = screen.getByText('UP')
  fireEvent.click(up)
  fireEvent.click(up)
  const reset = screen.getByText('reset')
  fireEvent.click(reset)
  expect(screen.queryByText("You can't go up")).not.toBeInTheDocument()
})


