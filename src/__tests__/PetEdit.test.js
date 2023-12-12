import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import PetShow from "../pages/PetShow"
import PetEdit from "../pages/PetEdit"
import mockPets from "../mockPets"

const renderShow = (pet) => {
  render(
    <MemoryRouter initialEntries={[`/petshow/edit/${pet.id}`]}>
      <Routes>
        <Route path="/petshow/edit/:id" element={<PetShow pets={mockPets} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<PetEdit /> linked from <PetShow /> ", () => {
  it("renders without crashing", () => {
    renderShow(mockPets[0])
  })

  it("renders a card with pet enjoys", () => {
    renderShow(mockPets[0])
    expect(
      screen.getByText(mockPets[0].enjoys, { exact: false })
    ).toBeInTheDocument()
  })
})
