 import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMysql,
} from 'react-icons/di' 


import "../style/components/technologiescontainer.css"

 const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> }, 
]; 

const techLeraning =[
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
       <h2>Tecnologias</h2>
       <h3>Tenho experiência</h3>
      <div className="technology-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id} >
            {tech.icon}
            <div className='technology'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
          </div>
        ))}

        
      </div>

      <h3>Estou estudando</h3>
      <div className="technology-grid">
        {techLeraning.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id} >
            {tech.icon}
            <div className='technology'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
          </div>
        ))}

        
      </div>

    </section>
  )
}

export default TechnologiesContainer
