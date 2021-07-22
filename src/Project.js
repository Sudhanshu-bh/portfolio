import React from 'react'
import './Project.css'

function Project({ img, title, desc, link, github }) {

  return (
    <figure class="effect-ruby">
      <div>
        <img src={img} alt="Project" />
      </div>
      <figcaption>
        <h2>{title}</h2>
        <p>
          {desc}
          {link && window.innerWidth >= 600 && (
            <> | <a href={link} target="_blank" rel="noreferrer">View</a>
            </>
          )}
          {github && window.innerWidth > 599 && (
            <> | <a href={github} target="_blank" rel="noreferrer">Github</a>
            </>
          )}
        </p>
      </figcaption>
      <div className="project__mobileLinks">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">View</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">Github</a>
        )}
      </div>
    </figure>
  )
}

export default Project
