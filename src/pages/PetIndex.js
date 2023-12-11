import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import mockPets from "../mockPets"

const PetIndex = ({ pets }) => {
  return (
    <div className="cards-index">
      {pets?.map((pet, index) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <img alt={`profile of a cat named ${pet.name}`} src={pet.image} />
            <CardBody>
              <CardTitle tag="h5">{pet.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {pet.age}
              </CardSubtitle>
              <NavLink to={`/petshow/${pet.id}`} className="nav-link">
                View Profile
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default PetIndex
