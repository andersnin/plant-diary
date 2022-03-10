import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import OutsideClickHandler from "react-outside-click-handler";

// Icons
import { CgLogOut } from "react-icons/cg";
import { BsGear } from "react-icons/bs";

const Navbar = () => {
  const { user, isAuthenticated, logout, signup } = useAuth0();
  const [toggle, setToggle] = useState(false);

  switch (isAuthenticated) {
    case true:
      return (
        <nav>
          <Link to="/">
            <div className="logo">
              <h1>Plant Diary</h1>
            </div>
          </Link>
          {/* <LogoutButton /> */}
          <OutsideClickHandler onOutsideClick={() => setToggle(false)}>
            <div className="dropdown-menu" onClick={() => setToggle(true)}>
              <img className="profile-img" src={user.picture} alt={user.name} />
              {toggle ? (
                <div className="menu-items">
                  <Link to="/edit">
                    <div className="menu-option">
                      <BsGear />
                      <p>Edit profile</p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div onClick={() => logout()} className="menu-option">
                      <CgLogOut />
                      <p>Log out</p>
                    </div>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </OutsideClickHandler>
        </nav>
      );
    case false:
      return (
        <nav>
          <Link to="/">
            <div className="logo">
              <h1>Plant Diary</h1>
            </div>
          </Link>
          <LoginButton />
        </nav>
      );
  }
};

export default Navbar;
