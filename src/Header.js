import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {

  const [renderBg, setrenderBg] = useState("")
  const [introActive, setintroActive] = useState("active")
  const [projectsActive, setprojectsActive] = useState("")
  const [contactActive, setcontactActive] = useState("")

  const toggleHeaderBg = () => {
    let header = document.getElementById("header")

    if (window.pageYOffset > window.innerHeight - header.offsetHeight - 1) {
      setrenderBg("renderBg");
    } else {
      setrenderBg("");
    }
  }

  function getTopOffset(id) {
    const rect = document.getElementById(id).getBoundingClientRect();
    return (rect.top + window.scrollY);
  }

  const toggleActive = () => {
    let header = document.getElementById("header")

    if (window.pageYOffset < getTopOffset("projects") - header.offsetHeight) {
      setintroActive("active")
      setprojectsActive("")
      setcontactActive("")
    } else if ((window.pageYOffset < getTopOffset("contact") - header.offsetHeight)) {
      setintroActive("")
      setprojectsActive("active")
      setcontactActive("")
    } else if (window.pageYOffset + header.offsetHeight >= getTopOffset("contact")) {
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

  const scrollto = (id) => {
    let header = document.getElementById("header")

    if (id === "projects") {
      window.scrollTo({
        top: getTopOffset(id) - header.offsetHeight,
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: getTopOffset(id),
        behavior: "smooth"
      })
    }
  }

  return (
    <div className={`header ${renderBg}`} id="header">
      <div onClick={() => scrollto("intro")} className={introActive}>Home</div>
      <div onClick={() => scrollto("projects")} className={projectsActive}>Projects</div>
      <div onClick={() => scrollto("contact")} className={contactActive}>Contact</div>
    </div >
  )
}

export default Header
