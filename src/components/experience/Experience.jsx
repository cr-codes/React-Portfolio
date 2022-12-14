import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience_head">
        <h5>What Skill's I have</h5>
        <h2>My Experiences</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="post">
          <div className="experience__content">
            <div className="sub_content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
            <div className="sub_content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>BootStrap</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>ReactJS</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="post">

          
          <div className="experience__content">
          <div className="sub_content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>ExpressJS</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
          <div className="sub_content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JAVA</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
           
           
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;