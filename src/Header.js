import React, { useState, useEffect } from 'react'
import './Header.css'
import ScrollSpy from 'react-scrollspy-navigation'

function Header() {

  const [renderBg, setrenderBg] = useState("")
  const [introActive, setintroActive] = useState("active")
  const [projectsActive, setprojectsActive] = useState("")
  const [contactActive, setcontactActive] = useState("")

  const toggleHeaderBg = () => {
    let header = document.getElementById("header")

    if (window.pageYOffset > window.innerHeight - header.offsetHeight) {
      setrenderBg("renderBg");
    } else {
      setrenderBg("");
    }
  }

  function getTopOffset(id) {
    const rect = document.getElementById(id).getBoundingClientRect();
    return (rect.top + window.scrollY);
  }
  function getBottomOffset(id) {
    const rect = document.getElementById(id).getBoundingClientRect();
    console.log("innerHeight: ", window.innerHeight)
    console.log(rect.bottom)
    return (rect.bottom);
  }

  const toggleActive = () => {
    if (window.pageYOffset < getTopOffset("projects")) {
      setintroActive("active")
      setprojectsActive("")
      setcontactActive("")
    } else if ((window.pageYOffset < getTopOffset("contact")) && (window.innerHeight < getBottomOffset("contact") - 2)) {
      setintroActive("")
      setprojectsActive("active")
      setcontactActive("")
    } else if (window.innerHeight >= getBottomOffset("contact") - 2) {
      setintroActive("")
      setprojectsActive("")
      setcontactActive("active")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleHeaderBg);
    window.addEventListener("scroll", toggleActive);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`header ${renderBg}`} id="header">
      <ScrollSpy className="active">
        <a href="#intro" className={introActive}>Home</a>
        <a href="#projects" className={projectsActive}>Projects</a>
        <a href="#contact" className={contactActive}>Contact</a>
      </ScrollSpy>
    </div>
  )
}

export default Header
