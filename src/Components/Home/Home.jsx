import React from 'react'
import  HomeImage from "../../assets/avataaars.svg"
import styles from "./Home.module.css"
export default function Home() {
  return <>
    <div className="container">
      <div className="row">
        <div className=" text-center d-flex justify-content-center align-items-center vh-100 w-100">
          <div className='w-75'>
            <img src={HomeImage} className='w-25 text-center' alt="" />  
            <h1 className='mt-5 fw-bold fs-1 text-white text-uppercase text-center'>Start Bootstrap</h1>
          </div>
        </div>
      </div>

    </div>
  
  </>

}
