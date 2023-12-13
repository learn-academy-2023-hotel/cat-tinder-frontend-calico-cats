import React from "react"
import { Button, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import PetIndex from "../pages/PetIndex"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <Link to={`/`}>
          <button className="home-links">Home</button>
        </Link>
        <Link to={`/petindex`}>
          <button className="home-links">See the Pets</button>
        </Link>
        <Link to={`/petnew`}>
          <button className="home-links">Create a Purrfile</button>
        </Link>
      </div>
    </header>
  )
}
export default Header
