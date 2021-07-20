import React from 'react'
import './Footer.css'
import Fade from 'react-reveal/Fade'

function Footer() {
  return (
    <Fade>
      <section className="footer" id="contact">
        <div className="footer__email">
          <a href="mailto:bsudhanshu3@gmail.com">SEND AN EMAIL</a>
        </div>
        <div className="footer__info">
          <div className="footer__links">
            <a href="https://www.linkedin.com/in/sudhanshu-bh/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/shikari.5/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="footer__name">&copy; 2021 | Made by Sudhanshu Bhardwaj</div>
        </div>
      </section>
    </Fade>
  )
}

export default Footer
