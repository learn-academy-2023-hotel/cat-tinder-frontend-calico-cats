import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import mockPets from "../mockPets"



const PetIndex = ({ pets }) => {

console.log(pets)
  return (

    pets?.map((pet, index) => {
      return (
      
        <Card
        style={{
          width: "14rem"
        }}
        key={index}
        >
          <img alt={`profile of a cat named ${pet.name}`} src={pet.image} />
          <CardBody>
            <CardTitle tag="h5">{pet.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {pet.age}
            </CardSubtitle>
            <Button>See More Details</Button>
          </CardBody>
        </Card>
      )
    })
  )
}

export default PetIndex