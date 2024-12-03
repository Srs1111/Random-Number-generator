// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncremet = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading-content">Random Number</h1>
          <p className="discription-content">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-btn"
            onClick={this.onIncremet}
          >
            Generate
          </button>
          <p className="count-text">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
