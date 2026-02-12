import React from 'react'
import Hero from '../components/home/Hero'
import ProjectList from '../components/home/ProjectList'
import Skills from '../components/home/Skills'
import Timeline from '../components/home/Timeline'
import About from '../components/home/About'

const Home = () => {
  return (
    <div className='h-screen'>
      <Hero />
      <ProjectList />
      <Skills />
      <Timeline />
      <About  />
    </div>
  )
}

export default Home
