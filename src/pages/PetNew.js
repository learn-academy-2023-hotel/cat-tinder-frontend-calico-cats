import React, { useState } from "react"
import { Button, Form, Label,FormGroup, Input } from "reactstrap"
import { useNavigate } from "react-router-dom"




const PetNew = ({createPet}) => {
  const navigate = useNavigate()
  const [newPet, setNewPet] = useState({
    name:"",
    age:"",
    enjoys:"",
    image:""
  })


  const handleChange = (e) => {
    setNewPet({...newPet, [e.target.name]: e.target.value})
    // console.log(newPet)
  }

  const handleSubmit = () => {
    createPet(newPet)
    navigate('/petIndex')
  }

  return (
    <>
    <Form>
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input type='text' name='name' id='name' onChange={handleChange} value={newPet.name} />
      </FormGroup>

      <FormGroup>
        <Label for='age'>Age</Label>
        <Input type='text' name='age' id='age' onChange={handleChange} value={newPet.age} />
      </FormGroup>
      <FormGroup>
        <Label for='enjoys'>Enjoys</Label>
        <Input type='text' name='enjoys' id='enjoys' onChange={handleChange} value={newPet.enjoys} />
      </FormGroup>
      <FormGroup>
        <Label for='image'>Image Link</Label>
        <Input type='text' name='image' id='image' onChange={handleChange} value={newPet.image} />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit Your Profile</Button>
      </Form>
    </>
  )
}
export default PetNew
