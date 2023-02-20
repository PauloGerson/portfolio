import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../style/components/informationcontainer.css'


const informationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
          <AiFillPhone id="phone-icon"/>
          <div>
            <h3>Telefone</h3>
            <p>(63) 984919766</p>
          </div>        
        </div>

        <div className="info-card">
        <AiOutlineMail id="email-icon"/>
          <div>
            <h3>E-mail</h3>
            <a href="mailto:paulogerson81@gmail.com">paulogerson81@gmail.com</a>
          </div>        
        </div>

        <div className="info-card">
          <AiFillEnvironment id="pin-icon"/>
          <div>
            <h3>Localização</h3>
            <p>Palmas-To</p>
          </div>        
        </div>
    </section>
  )
}

export default informationContainer
