import React from 'react'
import './Intro.css'
import Fade from 'react-reveal/Fade'

function Intro() {
  return (
    <Fade>
      <section className="intro" id="intro">
        <div className="intro__text">
          <div className="intro__iam">Hi, I'm</div>
          <h1 className="intro__name">Sudhanshu.</h1>
          <div className="intro__info">
            <p>Tech enthusiast skilled in technologies like bootstrap, ReactJS, NodeJS and much more.</p>
            <p>Loves music and workouts besides coding. ✌️</p>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Intro
