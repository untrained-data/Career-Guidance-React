import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { Head } from "./Head"

const Header = () => {

  return (
    <>
      <Head/>
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
              Contact
              </Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header