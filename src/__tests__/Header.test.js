import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.debug()
    screen.logTestingPlaygroundURL()
    const homeElement = screen.getByText(/Pet Tinder/i)
    expect(homeElement).toBeInTheDocument()
  })
})
