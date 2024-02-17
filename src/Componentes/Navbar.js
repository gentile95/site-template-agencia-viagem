import { Component } from 'react'
import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {  
  
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <navbar className="navbar-container">
      <div className="navbar-left">
        <h1 className="logo">Logo</h1>
      </div>

      <div className="menu-icons-sm" onClick={handleClick}>
        <i className={click ? "uil uil-times" : "uil uil-bars"}></i>
      </div>

      <div className="navbar-right">
        <ul className={click ? "navbar-links active" : "navbar-links"}>
          <Link className='link' to='/'>
            <li><i className="home"><span class="material-symbols-outlined">home</span><span>Home</span></i></li>
          </Link>
          <Link className='link' to='/info'>
            <li><i className="info"><span class="material-symbols-outlined">info</span><span>Info</span></i></li>
          </Link>
          <Link className='link' to='/servicos'>
            <li><i className="servicos"><span class="material-symbols-outlined">work</span><span>Serviços</span></i></li>
          </Link>
          <Link className='link' to='/contato'>
            <li><i className="contato"><span class="material-symbols-outlined">phone_in_talk</span><span>Contato</span></i></li>
          </Link>
        </ul>
      </div>
    </navbar>
  )
}

export default Navbar