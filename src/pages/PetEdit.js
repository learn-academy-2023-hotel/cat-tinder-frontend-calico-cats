import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"

const PetEdit = ({ pets, updatePet }) => {
  const { id } = useParams()
  let currentPet = pets?.find((pet) => pet.id === +id)

  const [editPet, setEditPet] = useState({
    name: currentPet.name,
    age: currentPet.age,
    enjoys: currentPet.enjoys,
    image: currentPet.image,
  })

  const handleChange = (e) => {
    setEditPet({ ...editPet, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  const handleSubmit = () => {
    updatePet(editPet, currentPet.id)
    navigate("/petindex")
  }

  return (
    <>
      <div>Edit Your Purrfile</div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={editPet.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={editPet.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            id="enjoys"
            onChange={handleChange}
            value={editPet.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image Link</Label>
          <Input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            value={editPet.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Update Purrfile
        </Button>
      </Form>
    </>
  )
}
export default PetEdit
