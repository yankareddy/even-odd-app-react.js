// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {displayText}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
