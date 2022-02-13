import React from 'react'
import '../css/projects.css'
import recipies from '../img/recipies.png'
import breakingBad from '../img/breakingBad.png'
import ifrs from '../img/ifrs.png'
import toDo from '../img/toDo.png'

function Projects() {
  return (
    <div className='mainWrapper'>
      <h1>PROJECTS</h1>
      <hr/>
      <div className='projectsWrapper'>
        <div className='p'>
          <div className='p-browser'>
            <div className='p-circle l'></div>
            <div className='p-circle m'></div>
            <div className='p-circle r'></div>
          </div>
          <a href='https://amazing-hoover-9f2ec3.netlify.app' target='_blank' rel='noreferrer'>
            <img src={recipies} alt='' className='p-img' />
          </a>
        </div>
        <div className='p'>
          <div className='p-browser'>
            <div className='p-circle l'></div>
            <div className='p-circle m'></div>
            <div className='p-circle r'></div>
          </div>
          <a href='https://breakingbad-cast-app.netlify.app' target='_blank' rel='noreferrer'>
            <img src={breakingBad} alt='' className='p-img' />
          </a>
        </div>
        <div className='p'>
          <div className='p-browser'>
            <div className='p-circle l'></div>
            <div className='p-circle m'></div>
            <div className='p-circle r'></div>
          </div>
          <a href='https://dazzling-neumann-f975da.netlify.app' target='_blank' rel='noreferrer'>
            <img src={ifrs} alt='' className='p-img' />
          </a>
        </div>
        <div className='p'>
          <div className='p-browser'>
            <div className='p-circle l'></div>
            <div className='p-circle m'></div>
            <div className='p-circle r'></div>
          </div>
          <a href='https://objective-snyder-f21f18.netlify.app' target='_blank' rel='noreferrer'>
            <img src={toDo} alt='' className='p-img' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
