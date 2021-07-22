import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {

  const [renderBg, setrenderBg] = useState("")
  const [introActive, setintroActive] = useState("active")
  const [projectsActive, setprojectsActive] = useState("")
  const [contactActive, setcontactActive] = useState("")
  const [sidebar, setsidebar] = useState("sidebarClose")

  const sidebarOpen = () => {
    setsidebar("sidebarClose")
  }

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

  const scrollto = id => {
    let header = document.getElementById("header")

    if (id === "projects") {
      window.scrollTo({
        top: getTopOffset(id) - (window.innerWidth > 599 ? header.offsetHeight : 0),
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: getTopOffset(id),
        behavior: "smooth"
      })
    }

    setsidebar("sidebarClose")
  }

  return (
    <>
      <div className={`header ${renderBg} ${sidebar}`} id="header">
        <div onClick={() => scrollto("intro")} className={introActive} role="button">Home</div>
        <div onClick={() => scrollto("projects")} className={projectsActive} role="button">Projects</div>
        <div onClick={() => scrollto("contact")} className={contactActive} role="button">Contact</div>
        <div className="header__closeButton" onClick={sidebarOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
      </div>
      <div className="header__menuIcon" onClick={() => setsidebar("sidebarOpen")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
    </>
  )
}

export default Header
