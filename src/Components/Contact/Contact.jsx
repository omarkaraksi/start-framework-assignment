import React from 'react'

export default function Contact() {
  return <>
    
   <div className='d-flex justify-content-center align-items-center vh-100 text-white fw-bold'>

      <div className="container">
      
            <div className="row">
                <div className="col-md-12">
                    <h1 className='fw-bold fs-1 text-uppercase text-center py-4 text-dark'>Contact Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                <form className=' w-50 mx-auto'>
                    <div>

                      <div className="mb-3">
                        <label htmlFor="username" className="form-label ">User Name</label>
                        <input type="text" placeholder="User Name" className="form-control form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" id="username" aria-describedby="username" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                        <input type="email" placeholder="Email" className="form-control form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder="Password" className="form-control form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" id="exampleInputPassword1" />
                      </div>
                      
                      <button type="submit" className="btn btn-primary bg-grn">Submit</button>
                    </div>
                  </form>
                </div>
            </div>



          </div>


      </div>

  </>
}
