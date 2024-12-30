import React from 'react'

export default function Footer() {
  return <>
    <footer>
      <div className="container-fluid   text-white text-center px-3 py-5">
            <div className="row">
                <div className="col-md-4">
                  <div  className="card-body text-center">
                    <h3 >LOCATION</h3>
                    <p >2215 John Daniel Drive</p>
                    <p >Clark, MO 65243</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div  className="card-body text-center">
                    <h3 >AROUND THE WEB</h3>
                    <div  className="icons">
                    <div>
                        <i className="fa-brands fa-facebook mx-1 icon" />
                        <i className="fa-brands fa-twitter mx-1 icon" />
                        <i className="fa-brands fa-linkedin-in mx-1 icon" />
                        <i className="fa-solid fa-globe mx-1 icon" />
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div  className="card-body text-center px-5 me-5">
                    <h3 >ABOUT FREELANCER</h3>
                    <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                  </div>
                </div>
                
            </div>
            

      </div>  
      <div className="container-fluid bg-dark  text-white text-center">

        <div className="row bottom-0 p-4 py-1">
                  <div className="col-md-12 py-1">
                      <p className='m-3'>Copyright &copy; Your Website 2022</p>
                  </div>
        </div>
      </div>
      </footer>
  </>
}
