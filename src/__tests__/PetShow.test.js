import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockPets from "../mockPets"
import PetShow from "../pages/PetShow"

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/petshow/1"]}>
      <Routes>
        <Route path="/petshow/:id" element={<PetShow pets={mockPets} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<PetShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })

  it("renders a card with pet enjoys", () => {
    renderShow()
    expect(
      screen.getByText(mockPets[0].enjoys, { exact: false })
    ).toBeInTheDocument()
  })
})
