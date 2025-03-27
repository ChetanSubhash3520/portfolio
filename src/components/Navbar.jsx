import logo from "../assets/ChetanSubhashLogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={()=>window.open('https://www.linkedin.com/in/chetansubhashc/', "_blank")}/>
        <FaGithub  onClick={()=>window.open('https://github.com/ChetanSubhash3520',"_blank")}/>
    
      </div>
    </nav>
  );
};

export default Navbar;