import React from 'react'
import './Projects.css'
import Project from './Project';
import Fade from 'react-reveal/Fade'
import amazon_ss from './images/amazon_ss.png'
import portfolio_ss from './images/portfolio_ss.png'
import Flip from 'react-reveal/Flip'

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <Flip bottom>
          <h2>Projects</h2>
        </Flip>
        <div class="grid">
          <Fade left>
            <Project
              img={amazon_ss}
              title="Amazon Clone"
              desc="Full stack amazon clone made using react.js"
              link="https://fs--clone.web.app/"
              github="https://github.com/Sudhanshu-bh/fs-amazon-clone"
            />
          </Fade>

          <Fade right>
            <Project
              img={portfolio_ss}
              title="Portfolio"
              desc="Portfolio website made using react.js"
              link="#"
              github="https://github.com/Sudhanshu-bh/portfolio"
            />
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Projects
