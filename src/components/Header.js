import React from "react"
import { Button, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import PetIndex from "../pages/PetIndex"

const Header = () => {
  return (
    <header>
      <Nav justified>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/petindex">See the Pets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/petnew">Create a Purrfile</NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}
export default Header
