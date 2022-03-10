import React from "react";
import {
  useLocation,
  Link
} from "react-router-dom";
import { RiPlantLine, RiPlantFill, RiBookletLine, RiBookletFill } from "react-icons/ri";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { isAuthenticated } = useAuth0();
  const { pathname } = useLocation();
  
  return (
    isAuthenticated && 
    <footer className="footerContainer">
      <Link to="/">
        <div>
          {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
        </div>
      </Link>
      <Link to="/plants">
        <div>
        {pathname === "/plants" ? <RiPlantFill /> : <RiPlantLine />}
        </div>
      </Link>
      <Link to="/journal">
        <div>
        {pathname === "/journal" ? <RiBookletFill /> : <RiBookletLine />}
        </div>
      </Link>
    </footer>
  )
};

export default Footer;
