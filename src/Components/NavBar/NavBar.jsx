import React from 'react'
import {NavLink} from "react-router-dom";
import Style from "./NavBar.module.css" 

export default function NavBar() {
  return <>
      <nav className={`${Style.nav} navbar navbar-expand-lg text-white fixed-top`}>
         <div className={`${Style.nav} container py-4`}  >
                <NavLink className=" nav navbar-brand fw-bold fs-3 text-uppercase text-white" to={"/"}>
                  START FRAMEWORK                </NavLink>
                <div className="collapse navbar-collapse fw-bold fs-6 text-uppercase" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    
                    <li className="nav-item ">
                        <NavLink className="nav-link text-white rounded-3" to="about" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white  rounded-3" to="contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white rounded-3"  to="portfolio">Portfolio</NavLink>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
  
  </>
}
