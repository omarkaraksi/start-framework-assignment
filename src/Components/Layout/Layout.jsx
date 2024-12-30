import React, { useEffect } from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Style from "./Layout.module.css"
export default function Layout() {
  const location = useLocation();
  
  useEffect(() => {
    switch (location.pathname) {
      case "/":

        document.body.className = Style['bg-grn'];
        break;
      case "/about":
        document.body.className = Style['bg-grn'];
        break;
      case "/contact":
        document.body.className = Style['bg-wh'];

        break;
      case "/portfolio":
        document.body.className = Style['bg-wh'];
        break;
      default:
        document.body.className = Style['bg-wh'];
        break;
    }  
  },[location.pathname ])
  return <> 
          <NavBar />
          <div className='container'>
            <div className='row gy-4 '>
                    <Outlet />
            </div>
          </div>          
    </>
}
