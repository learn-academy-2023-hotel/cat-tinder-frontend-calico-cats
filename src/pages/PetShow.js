import React from "react"
import { useParams, NavLink } from "react-router-dom"
import ChatBox from "../components/ChatBox"

const PetShow = ({ pets, deletedPet }) => {
  const { id } = useParams()
  let currentPet = pets?.find((pet) => pet.id === +id)

  return (
    <div className="pet-show-cards">
      <div className="pet-purrfile">
        <h2>Purrfile of {currentPet && currentPet.name}</h2>
      </div>
      {currentPet && (
        <>
          <div className="show-big-container">
            <div className="show-picture">
              <img
                alt={`profile of a pet named ${currentPet.name}`}
                src={currentPet.image}
                className="pet-show-img"
              />
              <h3 className="pet-bio">
                {currentPet.name} enjoys: {currentPet.enjoys}
              </h3>
              <div className="chat-box">
                <ChatBox />
              </div>
            </div>
          </div>
          <div className="show-buttonsbox">
          <NavLink to={`/petedit/${currentPet.id}`} className="nav-link">
            <button className="button-show">Update Purrfile</button>
          </NavLink>
          <NavLink to="/petindex" className="nav-link">
            <button
              onClick={() => deletedPet(currentPet.id)}
              className="button-show"
            >
              Delete Purrfile
            </button>
          </NavLink>
          </div>
        </>
      )}
    </div>
  )
}

export default PetShow
