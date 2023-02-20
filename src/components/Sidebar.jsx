import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import cv from '../Docs/cv-paulo.pdf'
import "../style/components/sidebar.css"
import avatar from "../img/paulo.jpeg"


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt='Paulo Gerson'/>
      <p className='title'>Desevolvedor</p>
      <SocialNetwork/>
      <InformationContainer/>
        <a href={cv} id='btn' target='_blank'>
        Download currículo
      </a>

    </aside>
  )
}

export default Sidebar
