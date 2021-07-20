import React from 'react'
import './Project.css'

function Project({ img, title, desc, link, github }) {

  return (
    <figure class="effect-ruby">
      <img src={img} alt="Project" />
      <figcaption>
        <h2>{title}</h2>
        <p>
          {desc}
          {link && (
            <> | <a href={link} target="_blank" rel="noreferrer">View</a>
            </>
          )}
          {github && (
            <> | <a className="githubUrl" href={github} target="_blank" rel="noreferrer">Github</a>
            </>
          )}
        </p>
      </figcaption>
    </figure>
  )
}

export default Project
