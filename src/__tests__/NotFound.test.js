import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound.js"


describe("<NotFound />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        screen.debug()
        screen.logTestingPlaygroundURL()
        const homeElement = screen.getByText(/404/i)
        expect(homeElement).toBeInTheDocument()
    })
})