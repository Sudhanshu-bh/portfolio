import React, { useState, useEffect } from 'react'
import './Header.css'
import ScrollSpy from 'react-scrollspy-navigation'

function Header() {

  const [renderBg, setrenderBg] = useState("")

  const toggleHeaderBg = () => {
    let header = document.getElementById("header");
    if (window.pageYOffset > window.innerHeight - header.offsetHeight) {
      setrenderBg("renderBg");
    } else {
      setrenderBg("");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleHeaderBg);
  }, []);

  return (
    <div className={`header ${renderBg}`} id="header">
      <ScrollSpy>
        <a href="#intro">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ScrollSpy>
    </div>
  )
}

export default Header
