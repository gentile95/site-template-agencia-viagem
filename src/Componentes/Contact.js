import React, { useState } from 'react'
import './Contact.css'
import AssetContact from '../assets/asset-contact.svg'

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <aside className="contact_aside">
                    <div className="aside_img">
                        <img
                            src={AssetContact}
                            alt="Imagem de um boneco homem segurando uma carta (e-mail) com um círculo branco e um ponto de exclamação roxo ao fundo"
                        />
                    </div>
                    <h2>Contact Us</h2>
                    <ul className="contact_details">
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <h5>+55 (11) 99999-9999</h5>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <h5>lucas.gentile95@gmail.com</h5>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <h5>São Paulo, Brasil</h5>
                        </li>
                    </ul>
                    <ul className="contact_socials">
                        <li>
                            <a href="https://facebook.com"><i className="uil uil-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com"><i className="uil uil-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com"><i className="uil uil-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></a>
                        </li>
                    </ul>
                </aside>

                <form action="https://formspree.io/f/mjvnknda" method="post" className="contact_form">
                    <div className="form_name">
                        <input type="text" name="firstName" placeholder="Nome" required />
                        <input type="text" name="lastName" placeholder="Sobrenome" required />
                    </div>
                    <input type="email" name="email" placeholder="E-mail" required />
                    <textarea name="message" rows="10" placeholder="Mensagem" required></textarea>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact