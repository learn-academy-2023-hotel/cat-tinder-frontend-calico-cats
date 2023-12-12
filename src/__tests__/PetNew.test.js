import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import PetNew from "../pages/PetNew"


describe ("<PetNew />", () => {
    const renderNew = () => {
        render(
            <BrowserRouter>
                <PetNew />
            </BrowserRouter>
        )
    }
    it("renders a new pet form", () => {
        renderNew()
        screen.logTestingPlaygroundURL()
        const nameInput = screen.getByRole("textbox", {
            name: /name/i,
        })
        expect(nameInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole("textbox", {
            name: /enjoys/i,
        })
        expect(enjoysInput).toBeInTheDocument()
    })
    it("has a from with entries for name, age, enjoys, image", () => {
        renderNew()
        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")
        
    })
})