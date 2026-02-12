import React from 'react'
import { Routes ,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/layout/Layout'



function App() {

 

  return (
    <>          

    <Routes>
      <Route path='/' element={ <Layout /> }>  
        <Route index element={<Home />} />      
        <Route path='/projects' element={ <ProjectsPage /> }/>
        <Route path='/projects/:id' element={ <ProjectDetailsPage /> }/>
        <Route path='*' element={ <NotFoundPage /> }/>
      </Route>
    </Routes>
    </>
  )
}

export default App
