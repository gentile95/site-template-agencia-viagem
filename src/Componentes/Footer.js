import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-logo">
          <h1>Logo</h1>
          <p>Frase da empresa</p>
        </section>
        <section className="footer-links">
        <h4>Privacy</h4>
          <ul className="privacy links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </section>
        <section className="footer-socials links">
          <h4>Contato</h4>
          <p className='telefone'>+55 (11) 99999-9999</p>
          <p className='email'>dummy@mail.com</p>
          <ul className="socials">
            <li><a className='link' href="#"><i class="uil uil-facebook-f"></i></a></li>
            <li><a className='link' href="#"><i class="uil uil-instagram-alt"></i></a></li>
            <li><a className='link' href="#"><i class="uil uil-twitter"></i></a></li>
            <li><a className='link' href="#"><i class="uil uil-linkedin-alt"></i></a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
