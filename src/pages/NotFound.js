import React from "react"
import { NavLink } from "react-router-dom"
import "../App.css"
import Dino from "../components/Dino"


const NotFound = () => {
  return (
    <>
    <div className="not-found-main-container">

      <div className="game">
        <Dino />
      </div>
      <div className="not-found">
        <p>404</p>
        Page Not Found
        <div> Return home?</div>
      </div>
      <NavLink to={`/`} className="nav-link">
        <button className="button-show">Go Home!</button>
      </NavLink>
    </div>
    </>
  )
}
export default NotFound
