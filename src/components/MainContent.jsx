import About from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

import "../style/components/maincontent.css"



const MainContent = () => {
  return (
    <main id='main-content'>
      <About/>
       <TechnologiesContainer/> 
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent
