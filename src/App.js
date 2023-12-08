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

  console.log(pets)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petindex" element={<PetIndex />} />
        <Route path="/petshow" element={<PetShow />} />
        <Route path="/petnew" element={<PetNew />} />
        <Route path="/petedit" element={<PetEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
