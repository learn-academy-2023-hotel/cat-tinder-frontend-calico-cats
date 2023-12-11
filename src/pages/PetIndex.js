import React from "react"
import { Link } from "react-router-dom"




const PetIndex = ({ pets }) => {
  return (
    <div className="cards-index">
      {pets?.map((pet, index) => {
        return (
          <div className="card">
            <div className="picture">
              <img className="all-pictures" alt={`Profile picture of a pet named ${pet.name}`} src={pet.image} />
            </div>
            <div className="pet-name">   
            {pet.name}           
            </div>
            <div className="pet-age">
              Age: {pet.age}
            </div>
            <Link to={`/petshow/${pet.id}`}>
            <button className="button">Details</button>
            </Link>
          </div>
        
        )
      })}
    </div>
  )
}

export default PetIndex
