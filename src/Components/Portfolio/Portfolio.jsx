import React from 'react'
import ImageeOne from "../../assets/1.png" ;
import ImageeTwo from "../../assets/2.png" ;
import ImageeThree from "../../assets/3.png" ;
import Style from "./Portfolio.module.css"
export default function Portfolio() {
  return <> 
      <div className="container">
          <div className={  `d-flex justify-content-center align-items-center vh-100  fw-bold ${Style['text-main-color']}`} >
            <div className="row g-3">
                <div className="col-md-12">
                    <h1 className='fw-bold fs-1 text-uppercase text-center py-4 '>Portfolio Component</h1>
                </div>
                <div className="col-md-4 rounded-3">
                  <img src={ImageeTwo} className='w-100 rounded-3' alt="" />
                </div> 
                <div className="col-md-4">
                  <img src={ImageeThree} className='w-100 rounded-3' alt="" />  
                </div>
                <div className="col-md-4">
                  <img src={ImageeOne} className='w-100 rounded-3' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={ImageeTwo} className='w-100 rounded-3' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={ImageeThree} className='w-100 rounded-3' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={ImageeOne} className='w-100 rounded-3' alt="" />
                </div>
            </div>

          </div>
      </div>
  </>
}
