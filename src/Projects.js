import React from 'react'
import './Projects.css'
import Project from './Project';
import Fade from 'react-reveal/Fade'
import amazon_ss from './images/amazon_ss.png'
import another_ss from './images/another_ss.png'

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div class="grid">
          <Fade left>
            <Project
              img={amazon_ss}
              title="Amazon Clone"
              desc="A full stack amazon clone made using react.js"
              link="https://fs--clone.web.app/"
              github="https://github.com/Sudhanshu-bh/fs-amazon-clone"
            />
          </Fade>

          <Fade right>
            <Project
              img={another_ss}
              title="Another Project"
              desc="Another project coming soon"
              link="#"
            />
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Projects
