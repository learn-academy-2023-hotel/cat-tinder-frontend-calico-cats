import { render, screen } from "@testing-library/react"
import PetIndex from "../pages/PetIndex"
import mockPets from "../mockPets"
import { BrowserRouter } from "react-router-dom"

describe("<PetIndex />", () => {
  it("renders without crashing", () => {})
  render(
    <BrowserRouter>
      <PetIndex pets={mockPets} />
    </BrowserRouter>
  )
  it("renders cat cards", () => {
    render(
      <BrowserRouter>
        <PetIndex pets={mockPets} />
      </BrowserRouter>
    )
    mockPets.forEach((pet) => {
      const petName = screen.getByText(pet.name)
      expect(petName).toBeInTheDocument()
    })
  })
})
