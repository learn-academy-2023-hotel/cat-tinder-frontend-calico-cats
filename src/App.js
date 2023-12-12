import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import mockPets from "./mockPets"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PetEdit from "./pages/PetEdit"
import PetIndex from "./pages/PetIndex"
import PetNew from "./pages/PetNew"
import PetShow from "./pages/PetShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  const [pets, setPets] = useState(mockPets)
    const createPet = (createdPet) => {
    console.log("Created Pet:" , createdPet)
  }

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petindex" element={<PetIndex pets={pets} />} />
          <Route path="/petshow/:id" element={<PetShow pets={pets} />} />
          <Route path="/petnew" element={<PetNew createPet={createPet} />} />
          <Route path="/petedit" element={<PetEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
