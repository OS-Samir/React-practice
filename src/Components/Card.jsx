
import profilePic from "../assets/Baby.tux-800x800.png"

const Card = () => {
  return (
    <div className="card">
    <img className ="card-image" src = {profilePic} height={250} draggable="false" alt="Profile picture" />
    <h2 className="card-title">Samir Adhikari</h2>
    <p className="card-text">I want to be a mern stack developer</p>
  </div>
  )
}

export default Card
