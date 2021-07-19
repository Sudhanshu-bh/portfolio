import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="footer" id="contact">
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/sudhanshu-bh/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:bsudhanshu3@gmail.com" target="_blank" rel="noreferrer">SEND AN EMAIL</a>
      </div>
      <div className="footer__info">&copy; 2021 | Made by Sudhanshu Bhardwaj</div>
    </section>
  )
}

export default Footer
