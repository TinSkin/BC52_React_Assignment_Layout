import React from 'react'

export default function Item() {
  return (
    <div className="col-lg-3 col-xxl-4 mb-5">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">500x325</text>
        </svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero culpa deleniti quaerat excepturi expedita rerum.</p>
        </div>
        <div className="card-footer border-1">
          <a className="btn btn-primary btn-md mt-2 mb-2" href="#!">Find Out More!</a>
        </div>
      </div>
    </div>
  )
}
