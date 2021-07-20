import React, { useState, useEffect } from 'react'
import './Intro.css'

function Intro() {

  const [fade, setfade] = useState("")

  useEffect(() => {
    setfade("fade-in")
  }, [])

  return (
    <section className={`intro ${fade}`} id="intro">
      <div className="intro__text">
        <div className="intro__iam">Hi, I'm</div>
        <h1 className="intro__name">Sudhanshu.</h1>
        <div className="intro__info">
          <p>Tech enthusiast skilled in technologies like bootstrap, ReactJS, NodeJS and much more.</p>
          <p>Love music and workouts besides coding. ✌️</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
