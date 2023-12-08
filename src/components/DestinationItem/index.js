// Write your code here
import './index.css'

const DestinationItem = props => {
  const {listOfDestiny} = props
  const {name, imgUrl} = listOfDestiny

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <h1 className="name ">{name}</h1>
    </li>
  )
}

export default DestinationItem
