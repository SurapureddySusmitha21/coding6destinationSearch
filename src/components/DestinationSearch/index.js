// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {destinyInput: ''}

  getdestinyClick = event => {
    this.setState({destinyInput: event.target.value})
  }

  render() {
    const {destinyInput} = this.state
    const {destinationsList} = this.props
    const destinationResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(destinyInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              className="search-input"
              type="Search"
              onChange={this.getdestinyClick}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destination-list">
            {destinationResult.map(eachItem => (
              <DestinationItem key={eachItem.id} listOfDestiny={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
