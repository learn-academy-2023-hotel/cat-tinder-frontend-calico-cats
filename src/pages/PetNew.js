import React, { useState } from "react"
import { Button, Form, Label, FormGroup, Input } from "reactstrap"
import { useNavigate } from "react-router-dom"

const PetNew = ({ createPet }) => {
  const navigate = useNavigate()
  const [newPet, setNewPet] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createPet(newPet)
    navigate("/petIndex")
  }

  return (
    <>
      <main className="form-div">
        <Form className="forms-input">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              className="input-box"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={newPet.name}
            />
          </FormGroup>

          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              className="input-box"
              type="text"
              name="age"
              id="age"
              onChange={handleChange}
              value={newPet.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Something your soulmate should know?</Label>
            <Input
              className="input-box"
              type="text"
              name="enjoys"
              id="enjoys"
              onChange={handleChange}
              value={newPet.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Submit a link for your purrfile picture.</Label>
            <Input
              className="input-box"
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={newPet.image}
            />
          </FormGroup>
          <Button className="form-button" onClick={handleSubmit}>Submit Your Profile</Button>
        </Form>
      </main>
    </>
  )
}
export default PetNew
