import React from "react"
import { useParams } from "react-router-dom"
import mockPets from "../mockPets"

const PetShow = ({ pets }) => {
  const { id } = useParams()
  let currentPet = pets?.find((pet) => pet.id === +id)
  console.log(currentPet)
  return (
    <main className="pet-show-cards">
      <div className="pet-purrfile">Purrfile of {currentPet.name}</div>
      {currentPet && (
        <>
          <img
            alt={`profile of a pet named ${currentPet.name}`}
            src={currentPet.image}
            className="pet-show-img"
          />
          <h3 className="pet-bio">
            {currentPet.name} enjoys: {currentPet.enjoys}
          </h3>
        </>
      )}
    </main>
  )
}

export default PetShow
