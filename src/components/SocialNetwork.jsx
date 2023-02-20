import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"
//import { FaLinkedinIn } from 'react-icons/fa';
import "../style/components/socialnetworks.css"

const socialnet = [
  {name: "linkedin", icon: <FaLinkedinIn />},
  {name: "github", icon: <FaGithub />},
]

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      <a href="#" className="social-btn" id={socialnet[0].name} key={socialnet[0].name} >
        {socialnet[0].icon}
      </a>
      <a href="#" className="social-btn" id={socialnet[1].name} key={socialnet[1].name} >
        {socialnet[1].icon}
      </a>    
    </section>
  )
};

export default SocialNetwork
