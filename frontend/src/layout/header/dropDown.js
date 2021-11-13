import React, { useEffect, useState } from "react";
import { Home, Power } from "react-feather";
import { Link } from "react-router-dom";
import Coolies from "universal-cookie";

const DropDown = ({ token, active }) => {
  const coolies = new Coolies();
  const [sidebarType, setSidebarType] = useState("");

  useEffect(() => {
    if (token.address !== undefined) {
      setSidebarType("compony");
    }
    if (token.address === undefined) {
      setSidebarType("user");
    }
  }, [token]);

  const signOutHandler = () => {
    coolies.remove("u_t");
    window.location.href = "/auth/user/login";
  };

  return (
    <div className={`header__dropdown ${active && "active"}`}>
      {sidebarType === "compony" && (
        <ul>
          <li>
            <Link
              to="/panel/compony"
              className="text-dark d-flex align-items-center"
            >
              <Home size={16} className="m-r-5" /> پنل شرکت
            </Link>
          </li>
          <li onClick={signOutHandler}>
            <Link to="/" className="text-dark d-flex align-items-center">
              <Power size={16} className="m-r-5" />
              خروج از سایت
            </Link>
          </li>
        </ul>
      )}
      {sidebarType === "user" && (
        <>
          <ul>
            <li onClick={signOutHandler}>
              <Link to="/" className="text-dark d-flex align-items-center">
                <Power size={16} className="m-r-5" />
                خروج از سایت
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default DropDown;
