import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PetEdit from "./pages/PetEdit"
import PetIndex from "./pages/PetIndex"
import PetNew from "./pages/PetNew"
import PetShow from "./pages/PetShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ChatBox from "./components/ChatBox"

const App = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    readPets()
  }, [])

  const readPets = () => {
    fetch("http://localhost:3000/pets") // this is the request
      .then((response) => response.json()) // converts JSON to data we can use in JavaScript
      .then((payload) => {
        setPets(payload)
      })
      .catch((error) => console.log("Cat read errors: ", error))
  }

  const createPet = (createdPet) => {
    fetch("http://localhost:3000/pets", {
      body: JSON.stringify(createdPet),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readPets())
      .catch((error) => console.log("Pet create errors:", error))
  }

  const updatePet = (currentPet, id) => {
    fetch(`http://localhost:3000/pets/${id}`, {
      body: JSON.stringify(currentPet),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readPets())
      .catch((error) => console.log("Pet create errors:", error))
  }
  const deletedPet = (id) => {
    fetch(`http://localhost:3000/pets/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readPets())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petindex" element={<PetIndex pets={pets} />} />
          <Route
            path="/petshow/:id"
            element={<PetShow pets={pets} deletedPet={deletedPet} />}
          />
          <Route path="/petnew" element={<PetNew createPet={createPet} />} />
          <Route
            path="/petedit/:id"
            element={<PetEdit pets={pets} updatePet={updatePet} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
