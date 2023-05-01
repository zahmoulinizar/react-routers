import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-light" href="/#">Series</a>
        
        <div className="collapse navbar-collapse " >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" href="/#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
