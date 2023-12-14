import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <p>404</p>
        Page Not Found
        <div> Return home?</div>
      </div>
      <NavLink to={`/`} className="nav-link">
        <button className="button-show">Go Home!</button>
      </NavLink>
    </>
  )
}
export default NotFound
